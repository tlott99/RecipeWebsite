import {React, useState} from 'react'
import {Box} from '@mui/material'
import {Routes, Route} from "react-router-dom";
import RecipeBuilder from './RecipeBuilder';
import RecipeFinder from './RecipeFinder';
import MainPages from './MainPages';
import RecipeDisplay from './RecipeDisplay';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


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
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
      }}>
      <Header/>
      <Box 
        style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        }}>
        <Routes>
            <Route exact path="*" element={<MainPages/>}/>
            <Route exact path="/RecipeBuilder" element={<RecipeBuilder/>}/>
            <Route exact path="/RecipeFinder" element={<RecipeFinder/>}/>
            <Route exact path ="/RecipeDisplay/:slug" element={<RecipeDisplay turnPrint={handlePrintMode} onPrint={changePrintMode}/>}/>
        </Routes>
      </Box>
      <Footer/>
    </Box>
  )
}