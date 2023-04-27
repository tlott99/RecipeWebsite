import { React, useState, useEffect } from "react";
import BasicMenu from "./DropMenu";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import MealType from "./MealType";
import Description from "./Description";
import Box from '@mui/material/Box';
import SubmitButton from "./SubmitButton";
import Title from "./Title";
import Typography from "@mui/material/Typography"
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';

// const CreateRecipes = gql`
// mutation createRecipes($title: String!) {
//   createRecipe(title: $title) {
//     title
//   }
// }
// `

export default function Builder() {
  const [ingredientsList, setIngredientsList] = useState([])
  const [instructionsList, setInstructionsList] = useState([])
  const [description, setDescription] = useState([''])
  const [returnValue, setReturnValue] = useState([''])
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('');
  // db.set("recipe1", "{'name':'Spaghetti'}").then(() => {});
  // const [makeRecipe, { loading, error, data }] = useMutation(CreateRecipes);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(  </p>;

  
  return (
    
    <Box>
      {/* <BasicMenu /> */}
      <Box sx={{mt:6}}>
        <Title title={title} setTitle={setTitle} slug={slug} setSlug={setSlug} />
      </Box>
      <br></br>
      <MealType returnValue={returnValue} setReturnValue={setReturnValue}/>
      <Description description={description} setDescription={setDescription}/>
      <Box sx={{mt:6}}>
        <Ingredients 
          ingredientsList={ingredientsList} 
          setIngredientsList={setIngredientsList}
        />
      </Box>
      <Box sx={{mt:14}}>
        <Instructions 
          instructionsList={instructionsList} 
          setInstructionsList={setInstructionsList}
        />
      </Box>
      <SubmitButton 
        title={title}
        mealType={returnValue} 
        description={description} 
        ingredients={ingredientsList} 
        instructions={instructionsList}
        slug={slug}
      />
    </Box>
  )
}
// have a submit button on main. make the use state variables of description, instructions and ingredients list and checkbox and description at main.
//have the submit put the instructions ingredients description and checkbox all together and console log it 