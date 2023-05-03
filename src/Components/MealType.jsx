import NewCheckbox from "./Checkbox";
import { React } from 'react';
import {Box, Stack, Typography} from '@mui/material';

export default function MealType({returnValue, setReturnValue}){

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