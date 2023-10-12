import React from 'react';
import { Button, Stack, Typography, Box, IconButton} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { gql } from 'graphql-tag';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

const displayRecipe = gql`
query MyQuery($slug: String = "") {
    recipes(where: {slug: $slug}) {
      id
      ingredients
      instructions
      mealType
      title
      description
    }
  }
`

export default function RecipeDisplay(props){
    const params = useParams();
    const slug = params.slug
    const { loading, error, data } = useQuery(displayRecipe, {
        variables: { slug:slug },
      });

   
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(  </p>;

    const recipe = data.recipes[0]
    const ingredientsJson = JSON.parse(recipe.ingredients)
    const instructionsJson = JSON.parse(recipe.instructions)
    const mealTypeJson = JSON.parse(recipe.mealType)
    const ingredientsString = ingredientsJson.map((ingredientObj) => <p key={ingredientObj.id}>• {ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient}</p>);
    const instructionsString = instructionsJson.map((instructionObj, index) => <p key={instructionObj.id}>{index+1}. {instructionObj.instruction}</p>);
    const turnPrint = () => {
      props.turnPrint();
    }
    const onPrint = () => {
      props.onPrint();
    }

    return(
        <body class="thnested" style={{marginLeft: "3rem", padding:0}}>
            <h3 class="title">{recipe.title}</h3>
            <h3 class="onested title">Meal Type: {mealTypeJson.checkedMeal}</h3>
            <h3 class="onested title">Recipe Description</h3>
            <p class="thnested">{recipe.description}</p>
            <h3 class="onested title">Ingredients:</h3>
            <p class="thnested">{ingredientsString}</p>
            <h3 class="onested title">Instructions:</h3>
            <p class= "thnested">{instructionsString}</p>

        <footer style={{ display: 'flex', width: '15%', justifyContent: "center",
              margin: "auto",}}>
            <div className="button-container" spacing={2} direction="row" style={{
              width:'98%',
              justifyContent: "center",
              '@media screen and (max-width: 600px)': {
              flexDirection: 'column',
              alignItems: 'center',
              }
              }}>
              <button class="backgroundLightBlue" onClick={turnPrint} style={{
              '@media screen and (max-width: 600px)': {
                maxWidth: '100%',
                minWidth: 'unset',
              }}}>Turn on Print Mode</button>
              <button class="lightblue" onClick={onPrint} style={{
                '@media screen and (max-width: 600px)': {
                width: '100%',
              }}}>Print</button>
            </div>
        </footer>
        </body>
    )
}