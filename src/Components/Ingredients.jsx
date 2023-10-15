import { React, useState } from "react";
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import BasicSelect from "./BasicSelect"

export default function Ingredients({ingredientsList, setIngredientsList }) {
  const [measurement, setMeasurement] = useState(['']);
  const [amount, setAmount] = useState([''])
  const [newIngredient, setNewIngredient] = useState('')

  const handleIngredientAdd = () => {
    const thisIngredient = {
      ingredient: newIngredient, measurement: measurement, amount: amount
    }
    setIngredientsList([...ingredientsList, thisIngredient])
  } 
  const handleIngredientChange = (event) => {
    setNewIngredient(event.target.value)
  }
  const handleIngredientRemove = (index) => {
    const updatedIngredients = [...ingredientsList];
    updatedIngredients.splice(index, 1);
    setIngredientsList(updatedIngredients);
  }
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  
  return (
    <form className="App">
      <Box sx={{mt:3}}>
      <Typography variant="h5" htmlFor="ingredient" >Add New Ingredients</Typography>
          <Stack spacing ={2} direction ="row" sx={{mt:2, ml:3}}>
            <TextField name="amount" type="text" required
              defaultValue={''}
              onChange={handleAmountChange}
              label="Amount"
            />
            <BasicSelect 
              measurement={measurement} 
              setMeasurement={setMeasurement} 
            />
            <TextField name="ingredient" type="text" id="ingredient" required
              defaultValue={''}
              onChange={handleIngredientChange}
              label="Ingredient Type"
            />
            <Button variant='outlined' className="add-btn"
              onClick={handleIngredientAdd}>
              <span>Add an Ingredient</span>
            </Button>
          </Stack>
        </Box>
        <Typography variant="h5" sx={{mt:2}}>Ingredients</Typography>
      <Box sx={{ml:2}}>
        {ingredientsList.map((ingredient, index) => (
          <ul key={index}>
            {ingredient.ingredient && <li>{ingredient.amount} {ingredient.measurement} {ingredient.ingredient} 
            <Button
                  variant="outlined"
                  onClick={() => handleIngredientRemove(index)}
                  sx={{ml:1}}
                >
                  Remove
                </Button>
                </li>}
          </ul>
        ))}
      </Box>
    </form>
  );
}

