import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Print } from '@mui/icons-material';

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
    // console.log(params)
    const slug = params.slug
    // console.log(slug)
    const { loading, error, data } = useQuery(displayRecipe, {
        variables: { slug:slug },
      });

   
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(  </p>;

    // const recipe = data?.recipe;
    // if (!recipe) return <p>No recipe found</p>;

    const recipe = data.recipes[0]
    // console.log(data)
    const ingredientsJson = JSON.parse(recipe.ingredients)
    const instructionsJson = JSON.parse(recipe.instructions)
    // console.log(instructionsJson)
    const mealTypeJson = JSON.parse(recipe.mealType)
    // console.log(recipe.ingredients)
    // console.log(ingredientsJson[1].ingredient)
    // console.log(ingredientsJson.length)
    const ingredientsString = ingredientsJson.map((ingredientObj) => <li key={ingredientObj.id}>{ingredientObj.ingredient}</li>);
    const instructionsString = instructionsJson.map((instructionObj) => <li key={instructionObj.id}>{instructionObj.instruction}</li>);

    // const i = 0
    // const PrintIngredients = (x)=>{
    //   const listy=[]
    //   while (i < x.length) {
    //     console.log(x[i].ingredient);
    //     console.log(i)
    //     listy.push(x[i].ingredient)
    //     i++;
    // }
    //   return(console.log(listy))
    // }
    // console.log(ingredientsString)

    return(
        <Box>
            <Typography>{recipe.title}</Typography>
            <Typography>Meal Type: {mealTypeJson.checkedMeal}</Typography>
            <Typography>{recipe.description}</Typography>
            <Typography>Ingredients:</Typography>
            <ul>{ingredientsString}</ul>
            <Typography>Instructions:</Typography>
            <ol>{instructionsString}</ol>
        </Box>
    )
{/* <PrintIngredients x={ingredientsJson}/> */}
}