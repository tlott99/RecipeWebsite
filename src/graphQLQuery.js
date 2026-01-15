import { gql } from "@apollo/client";

export const FINDER_QUERY= gql`
  query Recipes{
    recipes(first : 100) {
    ingredients
    instructions
    description
    mealType
    title
    slug
    id
    }
  }
`;

export const PRINT_QUERY = gql`
  query MyQuery($slug: String = "") {
      recipes(where: {slug: $slug}) {
        id
        ingredients
        instructions
        mealType
        title
        description
        recipePrivacy
        cookTime
        prepTime
        servingSize
      }
  }
`;

export const DISPLAY_QUERY = gql`
  query MyQuery($slug: String = "") {
    recipes(where: {slug: $slug}) {
      id
      ingredients
      instructions
      mealType
      title
      description
      recipePrivacy
      slug
      cookTime
      prepTime
      servingSize
    }
  }
`

export const CREATE_MUTATION = gql`
  mutation createRecipe(
    $title: String!, 
    $ingredients: String!, 
    $instructions: String!, 
    $mealType: String!,
    $description: String!,
    $slug: String,
    $recipePrivacy: String!
    $prepTime: Int!
    $cookTime: Int!
    $servingSize: Int!
  ) 
  {
  createRecipe(
    data:{
    title: $title, 
    ingredients: $ingredients, 
    instructions: $instructions, 
    mealType: $mealType,
    description: $description,
    slug: $slug,
    recipePrivacy: $recipePrivacy,
    cookTime: $cookTime,
    prepTime: $prepTime,
    servingSize: $servingSize,
    }
  ) 
  {
      title
      ingredients
      instructions
      mealType
      description
      id
      recipePrivacy
      cookTime
      prepTime
      servingSize
  }
  }
`;

export const PUBLISH_MUTATION = gql`
mutation publishRecipe($id: ID){
  publishRecipe(
    where: { id: $id }
  ) {
    id
  }
}
`;