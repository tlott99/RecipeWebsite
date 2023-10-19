import { React, useState} from "react";
import Ingredients from "../Ingredients";
import Instructions from "../Instructions";
import MealType from "../MealType";
import Description from "../Description";
import SubmitButton from "../SubmitButton";
import Title from "../Title";
import {Box, useMediaQuery} from "@mui/material";
import RecipePrivacy from "../RecipePrivacy";


export default function Builder() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [instructionsList, setInstructionsList] = useState([]);
  const [description, setDescription] = useState(['']);
  const [returnValue, setReturnValue] = useState(['']);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [privacy, setPrivacy] = useState('public');
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
        />
      </Box>
    </div>
  )
}