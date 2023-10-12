import {React, useState} from 'react'
import {Stack, Box, Button, Typography} from '@mui/material'
import {Routes, Route} from "react-router-dom";
import RecipeBuilder from '../Pages/RecipeBuilder';
import RecipeFinder from '../Pages/RecipeFinder';
import MainPages from '../Pages/MainPages';
import RecipeDisplay from '../Pages/RecipeDisplay';

export default function Header() {
    const[printMode, setPrintMode] = useState(false)

    const handlePrintMode = () => {
      setPrintMode(true)
    }
    const changePrintMode = () =>{
      setPrintMode(false)
      window.print()
    }
return(
    <Box>
        <Box class="backgroundGrey" style={{pt:6, display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)'}}>

            <Typography variant="h2" align="center" sx={{pb:3, gridColumn:'2/2'}}>PutRecipeHere()</Typography>

            {/* {printMode === false &&( */}
            <Stack spacing ={2} direction ="row" sx={{pt:1, display: 'flex', justifyContent: 'right', marginBottom:3, gridColumn: '3/3', height:'30px'}}>
                <Button href="/" variant="contained">Home</Button>
                <Button href="/RecipeFinder" variant="contained">Recipe Finder</Button>
                <Button href="/RecipeBuilder" variant="contained">Recipe Builder</Button>
            </Stack>
            {/* )} */}

        </Box>
    <Routes>
      <Route exact path="*" element={<MainPages/>}>  </Route>
      <Route exact path="/RecipeBuilder" element={<RecipeBuilder/>}/>
      <Route exact path="/RecipeFinder" element={<RecipeFinder/>}/>
      <Route exact path ="/RecipeDisplay/:slug" element={<RecipeDisplay turnPrint={handlePrintMode} onPrint={changePrintMode}/>}/>
    </Routes>
    </Box>
)

}