import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import {Routes, Route, Link} from "react-router-dom";
import RecipeBuilder from './RecipeBuilder';
import RecipeFinder from './RecipeFinder';
import { Typography } from '@mui/material';
// import MainPage from './MainPage';
import MainPages from './MainPages';
import Builder from '../Components/Builder'
import RecipeDisplay from './RecipeDisplay';

export default function Home(){


  return(
    <Box sx={{mt:3}}>
      <Stack spacing ={2} direction ="row">
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

    <Routes>
      <Route exact path="*" element={<MainPages/>}>  </Route>
      <Route exact path="/RecipeBuilder" element={<RecipeBuilder/>}/>
      <Route exact path="/RecipeFinder" element={<RecipeFinder/>}/>
      <Route exact path ="/RecipeDisplay/:slug" element={<RecipeDisplay/>}/>
    </Routes>
    </Box>
  )
}