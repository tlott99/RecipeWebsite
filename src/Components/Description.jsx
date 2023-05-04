import { React } from "react";
import {Typography, Box, TextField} from "@mui/material"

export default function Description({description, setDescription}){
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  return(
    <Box sx={{mt:3}}>
      <Typography variant="h5">Description</Typography>
      <TextField name="description" id="description" optional="true"
        defaultValue={''}
        onChange={handleDescriptionChange}
        label="Add New Description"
        sx={{mt:2, ml:3}}
      />
    </Box>
  )
}