import {React} from 'react'
import {Box} from '@mui/material'
import {Routes, Route} from "react-router-dom";
import RecipeBuilder from './RecipeBuilder';
import RecipeFinder from './RecipeFinder';
import HomeContent from '../Components/Content/HomeContent';
import RecipeDisplay from './RecipeDisplay';
import Header from '../Components/partials/Header';
import Footer from '../Components/partials/Footer';
import Login from './Login';
import PrintMode from './PrintMode';


export default function Home(){
  return(
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
      }}>
      <Header/>
      <Box className="justify-center grid flex-1 grid-cols-6">
        <Routes>
          <Route exact path="*" element={<HomeContent />}/>
          <Route exact path="/RecipeBuilder" element={<RecipeBuilder />}/>
          <Route exact path="/RecipeFinder" element={<RecipeFinder />}/>
          <Route exact path ="/RecipeDisplay/:slug" element={<RecipeDisplay/>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/print/:slug" element={<PrintMode />}/>
        </Routes>
      </Box>
      <Footer/>
    </Box>
  )
}