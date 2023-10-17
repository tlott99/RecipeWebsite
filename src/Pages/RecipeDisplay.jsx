import React from 'react';
import { gql } from 'graphql-tag';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import {Container} from '@mui/material';

const displayRecipe = gql`
query MyQuery($slug: String = "") {
    recipes(where: {slug: $slug}) {
      id
      ingredients
      instructions
      mealType
      title
      description
      recipePrivacy
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
    const ingredientsString = ingredientsJson.map((ingredientObj, index) => <p key={index}>• {ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient}</p>);
    const instructionsString = instructionsJson.map((instructionObj, index) => <p key={index}>{index+1}. {instructionObj.instruction}</p>);
    const turnPrint = () => {
      props.turnPrint();
    }
    const onPrint = () => {
      props.onPrint();
    }
    return(
      <div className="container">
        <div>
            <h3 className="mt-8">{recipe.title}</h3>
            <h3 className="ml-4 mt-8">Recipe Privacy:</h3>
            <p className="ml-12">{recipe.recipePrivacy}</p>
            <h3 className="ml-4 mt-8">Meal Type:</h3>
            <p className="ml-12">{mealTypeJson.checkedMeal}</p>
            <h3 className="oml-4 mt-8">Recipe Description</h3>
            <p className="ml-12">{recipe.description}</p>
            <h3 className="ml-4 mt-8">Ingredients:</h3>
            <div className="ml-12">{ingredientsString}</div>
            <h3 className="ml-4 mt-8">Instructions:</h3>
            <div className= "ml-12">{instructionsString}</div>

        <footer style={{ display: 'flex', width: '15%', justifyContent: "center",
              margin: "auto",}}>
            <div className="button-container" spacing={2} direction="row" style={{
              width:'98%',
              justifyContent: "center",
              '@media screen and (maxWidth: 600px)': {
              flexDirection: 'column',
              alignItems: 'center',
              }
              }}>
              <button className="backgroundLightBlue" onClick={turnPrint} style={{
              '@media screen and (maxWidth: 600px)': {
                maxWidth: '100%',
                minWidth: 'unset',
              }}}>Turn on Print Mode</button>
              <button className="lightblue" onClick={onPrint} style={{
                '@media screen and (maxWidth: 600px)': {
                width: '100%',
              }}}>Print</button>
            </div>
          </footer>
        </div>
      </div>
    )
}