import React from 'react';
// import Hygraph from "../Hygraph";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {Routes, Route, Link} from "react-router-dom";
import RecipeDisplay from './RecipeDisplay';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TestPage from './TestPage';
import Button from '@mui/material/Button';


const getRecipes = gql`
query Recipes {
  recipes {
    ingredients
    instructions
    description
    mealType
    title
    slug
    id
  }
}
`
// const displayRecipe = gql`
// query Recipes($slug: String!) {
// recipe(where: {slug: $slug})
// {
//     ingredients
//     instructions
//     mealType
//     title
//     description
// }
// }
// `

export default function RecipeFinder() {

  const { loading, error, data } = useQuery(getRecipes);
  
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(  </p>;
  // if (loadings) return <p>Loading...</p>;
  // if (errors) return <p>Error :(  </p>;
  const DataPrint = () =>{
    data.recipes.map((recipe) => (console.log(recipe, recipe.slug)))}
  return (
    <div >
      <h2>Recipe Finder</h2>
      {
        data.recipes.map((recipe, index) => (
          <div key={index}>
            <Link to={`/RecipeDisplay/${recipe.slug}`}>
              {recipe.title}
            </Link>
            {/* <Routes>
            <Route
            key={recipe.slug}
            path={`/RecipeDisplay/:slug`}
            element={<RecipeDisplay slug={recipe.slug}/>}
          />
          </Routes> */}
          </div>
        ))  
      }
      <Button href="/RecipeDisplay" variant="contained">
        Recipe Builder
      </Button>
      {/* <Routes>
      {data.recipes.map((recipe) => (
          <Route
            key={recipe.slug}
            path={`/RecipeDisplay/${recipe.slug}`}
            element={<RecipeDisplay slug={recipe.slug}/>}
          />
        ))}
      </Routes> */}
    </div>
  )
}
