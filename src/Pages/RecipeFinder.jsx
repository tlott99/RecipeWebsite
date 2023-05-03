import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from "react-router-dom";
import { Typography, Box } from '@mui/material';

const getRecipes = gql`
query Recipes{
  recipes(first : 100) {
    ingredients
    instructions
    description
    mealType
    title
    slug
    id
  }
}
`

export default function RecipeFinder() {
  const { loading, error, data } = useQuery(getRecipes);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(  </p>;

  return (
    <Box >
      <h2>Recipe Finder</h2>
      {
        data.recipes.map((recipe, index) => (
          <div key={index}>
            <Link to={`/RecipeDisplay/${recipe.slug}`}>
              <Typography>{recipe.title}</Typography>
            </Link>
          </div>
        ))  
      }
    </Box>
  )
}
