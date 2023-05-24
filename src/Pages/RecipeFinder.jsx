import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from "react-router-dom";
import { Typography, Box } from '@mui/material';
import Paper from '@mui/material/Paper';

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
    <Box sx={{ml:3}}>
      <Typography variant="h2">Recipe Finder</Typography>
      {
        data.recipes.map((recipe, index) => (
          <Box key={index}>
            <Link to={`/RecipeDisplay/${recipe.slug}`}>
              <Typography variant="h6" sx={{ml:2}}>{recipe.title}</Typography>
            </Link>
          </Box>
        ))  
      }
    </Box>
  )
}
