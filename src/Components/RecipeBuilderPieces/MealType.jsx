import NewCheckbox from "./Checkbox";
import { React } from 'react';
import {Box, Stack, Typography} from '@mui/material';

export default function MealType({returnValue, setReturnValue}){

  return(
    <Box>
      <Typography variant ="h5" sx={{mt:3}}>Select Meal Type</Typography>
      <Stack spacing ={2} direction ="row" sx={{mt:2, ml:3}}>
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