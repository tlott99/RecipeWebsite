import NewCheckbox from "./Checkbox";
import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function MealType({returnValue, setReturnValue}){
    // const [returnValue, setReturnValue] = useState('')


  return(
    <Box>
      <Typography>Select Meal Type</Typography>
      <Stack spacing ={2} direction ="row">
        <NewCheckbox 
          x="Breakfast" 
          returnValue={returnValue} 
          setReturnValue={setReturnValue}
        />
        <NewCheckbox 
          x="Lunch" 
          returnValue={returnValue} 
          setReturnValue={setReturnValue}
        />
        <NewCheckbox 
          x="Dinner" 
          returnValue={returnValue} 
          setReturnValue={setReturnValue}
        />
        <NewCheckbox 
          x="Dessert" 
          returnValue={returnValue} 
          setReturnValue={setReturnValue}
        />
        <NewCheckbox 
          x="Drink" 
          returnValue={returnValue} 
          setReturnValue={setReturnValue}
        />
      </Stack>
    </Box>

  )
}