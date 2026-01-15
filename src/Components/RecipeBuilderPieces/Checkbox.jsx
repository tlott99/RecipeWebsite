import {React, useState} from 'react';
import {Checkbox, FormGroup, FormControlLabel, Box} from '@mui/material';

export default function NewCheckbox({x,returnValue, setReturnValue}){
  const [checked, setChecked] = useState(false);
  const [checkedMeal, setCheckedMeal] = useState('')
  const label = x
  
  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
    handleMealChange()

  };
  const handleMealChange = () => {
    const thisMeal = {
      checked: !checked, checkedMeal: x
    }
    setReturnValue(thisMeal)
  }
  
  return (
      <FormGroup >
        <Box>
          <FormControlLabel control={<Checkbox checked={checked} onChange={handleCheckedChange} size="small" />} label={label} />
        </Box>
      </FormGroup>
      )
}