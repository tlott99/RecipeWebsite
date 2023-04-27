import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/client';

const CreateRecipes = gql`
mutation createRecipes(
    $title: String!, 
    $ingredients: String!, 
    $instructions: String!, 
    $mealType: String!,
    $description: String!,

  ) 
  {
  createRecipe(
    data:{
    title: $title, 
    ingredients: $ingredients, 
    instructions: $instructions, 
    mealType: $mealType,
    description: $description,

      }
  ) 
  {
      title
      ingredients
      instructions
      mealType
      description

  }
  }

`


export default function SubmitButton({title, mealType, description, ingredients, instructions, slug}){
  const [addRecipes, { loading, error, data }] = useMutation(CreateRecipes);

  if (loading) return <p>Loading...</p>;
  if (error) return console.log(error);

  const newTitle = JSON.stringify(title)
  const newMealType = JSON.stringify(mealType)
  const newIngredients = JSON.stringify(ingredients)
  const newInstructions = JSON.stringify(instructions)
  // const newSlug = JSON.stringify(slug)

  const AddRecipe = (e) =>{
    e.preventDefault();
    addRecipes(
      { 
        variables: {
          title: newTitle, 
          mealType: newMealType, 
          ingredients: newIngredients, 
          instructions: newInstructions,
          description: description,
          // slug: newSlug
        }
      })
  }
  
  return(
    <Box>
      <Button variant="outlined" onClick={AddRecipe}> Submit </Button>
    </Box>
  )
}