import React from 'react';
// import Hygraph from "../Hygraph";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getRecipes = gql`
query Recipes {
  recipes {
    ingredients
    instructions
    mealType
    title
    slug
  }
}
`

export default function RecipeFinder() {

  const { loading, error, data } = useQuery(getRecipes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(  </p>;

  return (
    <div >
      <h2>Recipe Finder</h2>
      {
        data.recipes.map((recipe, index) => (
          <div key={index}>

            <a href={`/RecipeFinder/recipes/${recipe.slug}`}>
              {recipe.title}
            </a>
          </div>
        ))
      }
    </div>
  )
}