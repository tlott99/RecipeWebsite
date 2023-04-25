import {React, useState} from 'react';
import {Checkbox, FormGroup, FormControlLabel} from '@mui/material';

export default function NewCheckbox({x,returnValue, setReturnValue}){
  // ,returnValue, setReturnValue
  const [checked, setChecked] = useState(false);
  const [checkedMeal, setCheckedMeal] = useState('')
  // const [returnValue, setReturnValue] = useState('')
  const label = x
  
  // const handleCheckedMealChange = () =>{
  //   setCheckedMeal(x)
  //   handleMealChange()
  // }

  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
    // setCheckedMeal(x)
    handleMealChange()
    console.log(checked)
    console.log(label)
    // console.log(checkedMeal)
  };
  const handleMealChange = () => {
    const thisMeal = {
      checked: !checked, checkedMeal: x
    }
    setReturnValue(thisMeal)
    console.log(thisMeal)
  }
  
  return (
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={checked} onChange={handleCheckedChange} size="small" />} label={label} />
      </FormGroup>
      )
}