import * as React from 'react';
import {Select, FormControl, MenuItem, InputLabel, Box} from '@mui/material';

export default function CookTime({cookTime, setCookTime}) {
  const handleChange = (event) => {
    setCookTime(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel htmlFor="cookTime">Cook Time</InputLabel>
        <Select
          value={cookTime}
          label="CookTime"
          onChange={handleChange}
          id="cookTime"
        >
          <MenuItem value={10}>10 Minutes</MenuItem>
          <MenuItem value={20}>20 Minutes</MenuItem>
          <MenuItem value={30}>30 Minutes</MenuItem>
          <MenuItem value={40}>40 Minutes</MenuItem>
          <MenuItem value={50}>50 Minutes</MenuItem>
          <MenuItem value={60}>60 Minutes</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}