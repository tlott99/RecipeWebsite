import { React } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"

export default function Description({description, setDescription}){
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  return(
    <Box sx={{mt:10}}>
      <Typography>Description</Typography>
      <TextField name="description" id="description" optional="true"
        defaultValue={''}
        onChange={handleDescriptionChange}
        label="Add New Description"
      />
    </Box>
  )
}