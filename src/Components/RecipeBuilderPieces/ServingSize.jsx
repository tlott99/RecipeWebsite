import * as React from 'react';
import {Select, FormControl, MenuItem, InputLabel, Box} from '@mui/material';

export default function ServingSize({servingSize, setServingSize}) {
  const handleChange = (event) => {
    setServingSize(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel htmlFor="servingSize">Serving Size</InputLabel>
        <Select
          value={servingSize}
          label="ServingSize"
          onChange={handleChange}
          id="servingSize"
        >
          <MenuItem value={1}>1 Serving</MenuItem>
          <MenuItem value={2}>2 Servings</MenuItem>
          <MenuItem value={4}>4 Servings</MenuItem>
          <MenuItem value={6}>6 Servings</MenuItem>
          <MenuItem value={8}>8 Servings</MenuItem>
          <MenuItem value={10}>10 Servings</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}