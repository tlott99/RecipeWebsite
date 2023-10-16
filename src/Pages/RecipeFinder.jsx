import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';
import { Typography, Box, Container, Button, TextField, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
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
  const [searchCategory, setSearchCategory] = useState('title');
  const [typeSearch, setTypeSearch] = useState('Breakfast'); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(  </p>;
  const title="All Recipes";
  
  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchTerm(search);
  };

  // const recipesToDisplay = data.recipes.filter((recipe) =>
  //   recipe[searchCategory].toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const recipesToDisplay = data.recipes.filter((recipe) => {
    const searchTermLower = searchTerm.toLowerCase();
  
    if (searchCategory === 'mealType') {
      const mealTypeData = JSON.parse(recipe.mealType);
      return (
        (typeSearch === 'All' || mealTypeData.checkedMeal.toLowerCase() === typeSearch.toLowerCase()) &&
        recipe.title.toLowerCase().includes(searchTermLower)
      );
    } else {
      const fieldToCheck = recipe[searchCategory].toLowerCase();
      return fieldToCheck.includes(searchTermLower);
    }
  });
  

  return (
    <Container >  
      <Typography variant="h2" sx={{mb:3}}>{title}</Typography>
      <FormControl sx={{ mb: 3 }}>
        <InputLabel htmlFor="search-category">Search By</InputLabel>
        <Select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          inputProps={{ name: 'searchCategory', id: 'search-category' }}
        >
          <MenuItem value="title">Title &nbsp;</MenuItem>
          <MenuItem value="mealType">Meal Type</MenuItem>
          {/* Add more search categories as needed */}
        </Select>
      </FormControl>
      
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
      
      { searchCategory == 'mealType' && (
        <FormControl sx={{ mb: 3 }}>
          <InputLabel htmlFor="search-category">Meal Type</InputLabel>
          <Select
          value={typeSearch}
          onChange={(e) => setTypeSearch(e.target.value)}
          inputProps={{ name: 'searchCategory', id: 'search-category' }}
          >
            <MenuItem value="Breakfast">Breakfast</MenuItem>
            <MenuItem value="Lunch">Lunch</MenuItem>
            <MenuItem value="Dinner">Dinner</MenuItem>
            <MenuItem value="Dessert">Dessert</MenuItem>
            <MenuItem value="Drink">Drink</MenuItem>
            {/* Add more search categories as needed */}
          </Select>
        </FormControl>
      )}
      {
        recipesToDisplay
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
