import React from 'react';
import { Button, Stack, Typography, Box } from '@mui/material';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

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

export default function RecipeDisplay(props){
    const params = useParams();
    const slug = params.slug
    const { loading, error, data } = useQuery(displayRecipe, {
        variables: { slug:slug },
      });

   
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(  </p>;

    const recipe = data.recipes[0]
    const ingredientsJson = JSON.parse(recipe.ingredients)
    const instructionsJson = JSON.parse(recipe.instructions)
    const mealTypeJson = JSON.parse(recipe.mealType)
    const ingredientsString = ingredientsJson.map((ingredientObj) => <li key={ingredientObj.id}>{ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient}</li>);
    const instructionsString = instructionsJson.map((instructionObj) => <li key={instructionObj.id}>{instructionObj.instruction}</li>);
    const turnPrint = () => {
      props.turnPrint();
    }
    const onPrint = () => {
      props.onPrint();
    }

    return(
        <Box>
            <Typography>{recipe.title}</Typography>
            <Typography>Meal Type: {mealTypeJson.checkedMeal}</Typography>
            <Typography>{recipe.description}</Typography>
            <Typography>Ingredients:</Typography>
            <ul>{ingredientsString}</ul>
            <Typography>Instructions:</Typography>
            <ol>{instructionsString}</ol>
            <Stack spacing ={2} direction ="row" sx={{bottom: 0, position:"absolute", justifyContent: 'center', width:'99%'}}>
              <Button variant="contained" onClick={turnPrint} sx={{maxWidth: '400px', maxHeight: '30px', minWidth: '100px', minHeight: '30px', fontSize:'10px'}}>Turn on Print Mode</Button>
              <Button variant="contained" onClick={onPrint}>Print</Button>
            </Stack>
        </Box>
    )
}