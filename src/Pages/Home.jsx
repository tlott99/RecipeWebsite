import {React, useState} from 'react'
import {Stack, Box, Button} from '@mui/material'
import {Routes, Route} from "react-router-dom";
import RecipeBuilder from './RecipeBuilder';
import RecipeFinder from './RecipeFinder';
import MainPages from './MainPages';
import RecipeDisplay from './RecipeDisplay';

export default function Home(){
  const[printMode, setPrintMode] = useState(false)

  const handlePrintMode = () => {
    setPrintMode(true)
  }
  const changePrintMode = () =>{
    setPrintMode(false)
    window.print()
  }
  
  return(
    <Box sx={{mt:3}} >
      {printMode === false &&(
      <Stack spacing ={2} direction ="row" sx={{display: 'flex', justifyContent: 'center'}}>
        <Button href="/RecipeFinder" variant="contained">
          Recipe Finder
        </Button>
        <Button href="/" variant="contained">
          Home
        </Button>
            <Button href="/RecipeBuilder" variant="contained">
          Recipe Builder
        </Button>
      </Stack>
      )}
    <Routes>
      <Route exact path="*" element={<MainPages/>}>  </Route>
      <Route exact path="/RecipeBuilder" element={<RecipeBuilder/>}/>
      <Route exact path="/RecipeFinder" element={<RecipeFinder/>}/>
      <Route exact path ="/RecipeDisplay/:slug" element={<RecipeDisplay turnPrint={handlePrintMode} onPrint={changePrintMode}/>}/>
    </Routes>
    </Box>
  )
}