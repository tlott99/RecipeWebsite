import React, {useEffect} from 'react';
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
      recipePrivacy
    }
  }
`

export default function PrintMode(){

    const params = useParams();
    const slug = params.slug

    useEffect(() => {
      const headerElements = document.querySelectorAll('.header');
      const footerElements = document.querySelectorAll('.footer');
      headerElements.forEach((element) => {
        element.style.display = 'none';
      });
      footerElements.forEach((element) => {
        element.style.display = 'none';
      });
    }, []);
  
    const { loading, error, data } = useQuery(displayRecipe, {
        variables: { slug:slug },
      });
    const handlePrint = ()=>{
        window.print();
    }
    useEffect(() => {
      if (data && data.recipes) {
        handlePrint();
      }
    }, [data]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(  </p>;

    const recipe = data.recipes[0]
    const ingredientsJson = JSON.parse(recipe.ingredients)
    const instructionsJson = JSON.parse(recipe.instructions)
    const mealTypeJson = JSON.parse(recipe.mealType)
    const ingredientsString = ingredientsJson.map((ingredientObj, index) => <p key={index}>• {ingredientObj.amount} {ingredientObj.measurement} {ingredientObj.ingredient}</p>);
    const instructionsString = instructionsJson.map((instructionObj, index) => <p key={index}>{index+1}. {instructionObj.instruction}</p>);

    return(
      <div className="container justify-center col-span-6 xl:col-start-2 xl:col-span-4">
        <div>
          <div className="flex flex-col text-center">
            <div className="flex flex-row justify-center">
              <h2 className="mt-8 text-2xl">{recipe.title}</h2>
            </div>
            <div className="flex flex-row justify-center">
              <div>
              <h3 className="ml-4 mt-8">Recipe Privacy:</h3>
              <p className="ml-12">{recipe.recipePrivacy}</p>
              </div>
              <div>
              <h3 className="ml-4 mt-8">Meal Type:</h3>
              <p className="ml-12">{mealTypeJson.checkedMeal}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="ml-4 mt-8">Recipe Description</h3>
            <p className="ml-12">{recipe.description}</p>
            <h3 className="ml-4 mt-8">Ingredients:</h3>
            <div className="ml-12">{ingredientsString}</div>
            <h3 className="ml-4 mt-8">Instructions:</h3>
            <div className= "ml-12">{instructionsString}</div>
          </div>
        </div>
      </div>
    )
    
}