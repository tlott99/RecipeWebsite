import { React, useState } from "react";
import BasicMenu from "./Components/DropMenu";
import Ingredients from "./Components/Ingredients";
import Instructions from "./Components/Instructions";
import MealType from "./Components/MealType";
import Description from "./Components/Description";
import Box from '@mui/material/Box';
import SubmitButton from "./Components/SubmitButton";
import Title from "./Components/Title";



export default function Main() {
  const [ingredientsList, setIngredientsList] = useState([])
  const [instructionsList, setInstructionsList] = useState([])
  const [description, setDescription] = useState([''])
  const [returnValue, setReturnValue] = useState([''])
  const [title, setTitle] = useState([''])
  // db.set("recipe1", "{'name':'Spaghetti'}").then(() => {});
  


  
  return (
    <Box>
      <BasicMenu  />
      <Title title={title} setTitle={setTitle}/>
      <br></br>
      <MealType returnValue={returnValue} setReturnValue={setReturnValue}/>
      <Description description={description} setDescription={setDescription}/>
      <Box sx={{mt:14}}>
        <Ingredients 
          ingredientsList={ingredientsList} 
          setIngredientsList={setIngredientsList}
        />
      </Box>
      <Box sx={{mt:14}}>
        <Instructions 
          instructionsList={instructionsList} 
          setInstructionsList={setInstructionsList}
        />
      </Box>
      <SubmitButton 
        title={title}
        mealType={returnValue} 
        description={description} 
        ingredients={ingredientsList} 
        instructions={instructionsList}
      />
    </Box>
  )
}
// have a submit button on main. make the use state variables of description, instructions and ingredients list and checkbox and description at main.
//have the submit put the instructions ingredients description and checkbox all together and console log it 