import {React} from 'react';
import {Button,Box} from '@mui/material';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/client';

const CreateRecipes = gql`
mutation createRecipe(
    $title: String!, 
    $ingredients: String!, 
    $instructions: String!, 
    $mealType: String!,
    $description: String!,
    $slug: String
  ) 
  {
  createRecipe(
    data:{
    title: $title, 
    ingredients: $ingredients, 
    instructions: $instructions, 
    mealType: $mealType,
    description: $description,
    slug: $slug
    }
  ) 
  {
      title
      ingredients
      instructions
      mealType
      description
      id
  }
  }
`
const PublishRecipes = gql`
mutation publishRecipe($id: ID){
  publishRecipe(
    where: { id: $id }
  ) {
    id
  }
}
`


export default function SubmitButton({title, mealType, description, ingredients, instructions, slug}){
  const [addRecipes, { loading, error, data }] = useMutation(CreateRecipes);
  const [publishRecipe] = useMutation(PublishRecipes);

  if (loading) return <p>Loading...</p>;
  if (error) return console.log(error);

  const newTitle = title
  const newMealType = JSON.stringify(mealType)
  const newIngredients = JSON.stringify(ingredients)
  const newInstructions = JSON.stringify(instructions)
  const newSlug = newTitle.replace(/\s+/g, '-').toLowerCase()

  const AddRecipe = async (e) => {
    e.preventDefault();
    try {
      const result = await addRecipes({
        variables: {
          title: newTitle,
          mealType: newMealType,
          ingredients: newIngredients,
          instructions: newInstructions,
          description: description,
          slug: newSlug
        },
      })
      console.log(result)
      const recipeId = result.data.createRecipe.id;
      console.log(recipeId)
      await publishRecipe({
        variables: {
          id: recipeId,
        },
      });
      window.location.href = '/RecipeFinder';
    } catch (error) {
      console.log(error);
    }
  };
  
  return(
    <Box>
      <Button variant="outlined" onClick={AddRecipe } sx={{mt:3}}> Submit </Button>
    </Box>
  )
}