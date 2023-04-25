import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Title({title,setTitle}){
  const handleTitleChange = (event) =>{
    setTitle(event.target.value)
  }


  return(
    <Box>
       <TextField name="title" id="title" required
              defaultValue={''}
              onChange={handleTitleChange}
              label="Add New Title"
        />
    
    </Box>
  )
}
