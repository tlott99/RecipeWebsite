import {React} from 'react';
import {Box, TextField, Typography} from '@mui/material';

export default function Title({title, setTitle, slug, setSlug}){
  const handleTitleChange = (event) =>{
    setTitle(event.target.value)
    setSlug(event.target.value)
  }

  return(
    <Box>
        <Typography variant ="h5" >Title</Typography>
        <TextField name="title" id="title" required
              defaultValue={''}
              onChange={handleTitleChange}
              label="Add New Title"
              sx={{mt:2, ml:3}}
        />
    
    </Box>
  )
}
