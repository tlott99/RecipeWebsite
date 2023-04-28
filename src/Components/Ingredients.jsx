import { React, useState } from "react";
import TextField from '@mui/material/TextField';
import BasicSelect from "./BasicSelect";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

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
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  
  return (
    <form className="App">
        <label htmlFor="ingredient">Add New Ingredients</label>
      <Box sx={{mt:3}}>
          <Stack spacing ={2} direction ="row">
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
            <button type="button" className="add-btn"
              onClick={handleIngredientAdd}>
              <span>Add an Ingredient</span>
            </button>
          </Stack>
        </Box>
      <Box>
        <h2>Ingredients</h2>
        {ingredientsList.map((ingredient, index) => (
          <ul key={index}>
            {ingredient.ingredient && <li>{ingredient.amount} {ingredient.measurement} {ingredient.ingredient}</li>}
          </ul>
        ))}
      </Box>
    </form>
  );
}

