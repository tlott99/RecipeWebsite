import {React} from 'react';
import {Button,Box} from '@mui/material';
import { useMutation } from '@apollo/client';
import {CREATE_MUTATION, PUBLISH_MUTATION} from '../../graphQLQuery';


export default function SubmitButton({title, mealType, description, ingredients, instructions, slug, privacy, cookTime, prepTime, servingSize}){
  const [addRecipes, { loading, error, data }] = useMutation(CREATE_MUTATION);
  const [publishRecipe] = useMutation(PUBLISH_MUTATION);

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
          slug: newSlug,
          recipePrivacy: privacy,
          cookTime: cookTime,
          prepTime: prepTime,
          servingSize: servingSize,
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
      <Button variant="outlined" onClick={AddRecipe } sx={{mt:3, mb:4}}> Submit </Button>
    </Box>
  )
}