import NewCheckbox from "./Checkbox";
import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function SubmitButton({title, mealType, description, ingredients, instructions}){
  const newEntry ={
    title: title,
    mealType: mealType, 
    description:description, 
    ingredients:ingredients, 
    instructions:instructions
  }
  const handleClick = ()=>{
    console.log(newEntry)
  }

  return(
    <Box>
      <Button variant="outlined" onClick={handleClick}> Submit </Button>
    </Box>
  )
}