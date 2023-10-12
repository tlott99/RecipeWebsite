import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';
import { Typography, Box, Container, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const getRecipes = gql`
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
`

export default function RecipeFinder() {
  const { loading, error, data } = useQuery(getRecipes);
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(  </p>;
  const title="All Recipes";
 
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You can perform search-related logic here
  };

  return (
    <Container >  
      <Typography variant="h2" sx={{mb:3}}>{title}</Typography>
      <TextField 
       label={
        <>
          <SearchIcon style={{ marginRight: '8px' }} />
          Search
        </>
      }
      variant="outlined"
      value={searchTerm}
      onChange={handleSearch}
      sx={{width:"50%", mb:3}}
    />
      {
        data.recipes
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((recipe, index) => (
          <Box key={index}>
            <Button href={`/RecipeDisplay/${recipe.slug}`} sx={{ display:"inline"}}>
                {recipe.title}
            </Button>
          </Box>
        ))  
      }
    </Container>
  )
}
