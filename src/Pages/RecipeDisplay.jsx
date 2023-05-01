import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

// const displayRecipe = gql`
// query Recipes($slug: String!) {
//     recipe(where: {slug: $slug})
//         {
//             ingredients
//             instructions
//             mealType
//             title
//             description
//         }
//     }
// `
const displayRecipe = gql`
query MyQuery($slug: String = "") {
    recipes(where: {slug: $slug}) {
      id
      ingredients
      instructions
      mealType
      title
      description
    }
  }
`

export default function RecipeDisplay(){

    const params = useParams();
    console.log(params)
    const slug = params.slug
    console.log(slug)
    const { loading, error, data } = useQuery(displayRecipe, {
        variables: { slug:slug },
      });

   
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(  </p>;

    // const recipe = data?.recipe;
    // if (!recipe) return <p>No recipe found</p>;

    const recipe = data.recipes[0]
    console.log(data)
    return(
        <Box>
            <Typography>{recipe.title}</Typography>
            <Typography>{recipe.mealType}</Typography>
            <Typography>{recipe.description}</Typography>
            <Typography>{recipe.ingredients}</Typography>
            <Typography>{recipe.instructions}</Typography>

        </Box>
    )

}