import React from 'react';
import { Button, Stack, Typography, Box, IconButton} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
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
    const ingredientsString = ingredientsJson.map((ingredientObj) => <Typography variant ="body1" key={ingredientObj.id}>• {ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient}</Typography>);
    const instructionsString = instructionsJson.map((instructionObj, index) => <Typography variant="body1" key={instructionObj.id}>{index+1}. {instructionObj.instruction}</Typography>);
    const turnPrint = () => {
      props.turnPrint();
    }
    const onPrint = () => {
      props.onPrint();
    }

    return(
        <Box sx={{ml:3}}>
            <Typography variant="h5" sx={{mt:3}}>{recipe.title}</Typography>
            <Typography variant="h5"sx={{mt:3, ml:3}}>Meal Type: {mealTypeJson.checkedMeal}</Typography>
            <Typography variant="h5"sx={{mt:3, ml:3}}>Recipe Description</Typography>
            <Typography variant="body1"sx={{mt:3, ml:6}}>{recipe.description}</Typography>
            <Typography variant="h5"sx={{mt:3, ml:3}}>Ingredients:</Typography>
            <Box variant="body1" sx={{mt:3, ml:3}} >{ingredientsString}</Box>
            <Typography variant="h5" sx={{mt:3, ml:3}}>Instructions:</Typography>
            <Box variant="body1" sx={{mt:3, ml:3}}>{instructionsString}</Box>
            <Stack spacing ={2} direction ="row" sx={{bottom: 0, position:"absolute", justifyContent: 'center', width:'98%'}}>
              <Button variant="contained" onClick={turnPrint} sx={{maxWidth: '400px', maxHeight: '30px', minWidth: '100px', minHeight: '30px', fontSize:'10px'}}>Turn on Print Mode</Button>
              <Button variant="contained" onClick={onPrint}>Print</Button>
            </Stack>
        </Box>
    )
}