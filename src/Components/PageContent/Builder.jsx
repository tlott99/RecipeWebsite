import { React, useState} from "react";
import Ingredients from "../RecipeBuilderPieces/Ingredients";
import Instructions from "../RecipeBuilderPieces/Instructions";
import MealType from "../RecipeBuilderPieces/MealType";
import Description from "../RecipeBuilderPieces/Description";
import SubmitButton from "../RecipeBuilderPieces/SubmitButton";
import Title from "../RecipeBuilderPieces/Title";
import {Box, useMediaQuery} from "@mui/material";
import RecipePrivacy from "../RecipeBuilderPieces/RecipePrivacy";
import PrepTime from "../RecipeBuilderPieces/PrepTime";
import CookTime from "../RecipeBuilderPieces/CookTime";
import ServingSize from "../RecipeBuilderPieces/ServingSize";


export default function Builder() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [instructionsList, setInstructionsList] = useState([]);
  const [description, setDescription] = useState(['']);
  const [returnValue, setReturnValue] = useState(['']);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [privacy, setPrivacy] = useState('public');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servingSize, setServingSize] = useState('');
  const large = useMediaQuery('(min-width:1200px)');

  return (
    
    <div className="container">
      <Box sx={{mt:6}}>
        <Title title={title} setTitle={setTitle} slug={slug} setSlug={setSlug} />
      </Box>
      <Box sx={{mt:6}}>
        <RecipePrivacy privacy={privacy} setPrivacy={setPrivacy}/>
      </Box>
      <Box sx={{display: 'flex', flexDirection:large ? 'row' : 'column'}}>
        <MealType returnValue={returnValue} setReturnValue={setReturnValue}/>
      </Box>
      <div className="flex flex-row space-x-8 mt-6">
        <Box><PrepTime prepTime={prepTime} setPrepTime={setPrepTime}/></Box>
        <Box><CookTime cookTime={cookTime} setCookTime={setCookTime}/></Box>
        <Box><ServingSize servingSize={servingSize} setServingSize={setServingSize}/></Box>
      </div>
      <Box>
        <Description description={description} setDescription={setDescription}/>
      </Box>
      <Box sx={{mt:6}}>
        <Ingredients 
          ingredientsList={ingredientsList} 
          setIngredientsList={setIngredientsList}
        />
      </Box>
      <Box sx={{mt:6}}>
        <Instructions 
          instructionsList={instructionsList} 
          setInstructionsList={setInstructionsList}
        />
      </Box>
      <Box>
        <SubmitButton 
          title={title}
          mealType={returnValue} 
          description={description} 
          ingredients={ingredientsList} 
          instructions={instructionsList}
          slug={slug}
          privacy={privacy}
          prepTime={prepTime}
          cookTime={cookTime}
          servingSize={servingSize}
        />
      </Box>
    </div>
  )
}