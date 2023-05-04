import { React, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";


export default function Instructions({instructionsList, setInstructionsList }) {
  const [newInstruction, setNewInstruction] = useState('')
  
  const handleInstructionAdd = (event) => {
    event.preventDefault()
    const thisInstruction ={
      instruction: newInstruction
    }
    setInstructionsList([...instructionsList, thisInstruction])
  }

  const handleInstructionChange = (event) => {
    event.preventDefault()
    setNewInstruction(event.target.value)
  }

  return (
    <form className="App" onSubmit={handleInstructionAdd}>
      <Typography variant="h5" htmlFor="instruction">Add a New Instruction</Typography>
      <Box>
      <Stack spacing ={2} direction ="row" sx={{mt:2, ml:3}}>
        <TextField name="instruction" id="instruction" required
          defaultValue={''}
          onChange={handleInstructionChange}
          label='New Instructions'
        />
        <Button variant='outlined' className="add-btn" type="submit">
          <span>Add an Instruction</span>
        </Button> 
      </Stack>
      </Box>
      <Typography variant="h5" sx={{mt:2}}>Instructions</Typography>
      <Box sx={{ml:2}}>
        <ol >
          {instructionsList.map((instruction, index) => (
             <li key={index}>{instruction.instruction}</li>
          ))} 
          </ol>
      </Box>
    </form>
  );
}

