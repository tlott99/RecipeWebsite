import { React, useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Description({description, setDescription}){
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  return(
    <Box sx={{mt:10}}>
      <TextField name="description" id="description" optional="true"
        defaultValue={''}
        onChange={handleDescriptionChange}
        label="Add New Description"
      />
    </Box>
  )
}