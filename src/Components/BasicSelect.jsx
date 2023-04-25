import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({measurement, setMeasurement}) {
  // const [measurement, setMeasurement] = React.useState('');
  
  const handleChange = (event) => {
    setMeasurement(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Measurement</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={measurement}
          label="Measurement"
          onChange={handleChange}
        >
          <MenuItem value="c.">Cups</MenuItem>
          <MenuItem value="tsp.">Teaspoons</MenuItem>
          <MenuItem value="tbsp.">Tablespoons</MenuItem>
          <MenuItem value="fl.oz.">Fluid Ounces</MenuItem>
          <MenuItem value="oz.">Ounces</MenuItem>
          <MenuItem value="lbs.">Pounds</MenuItem>
          <MenuItem value="">/None/</MenuItem>
          <MenuItem value="g.">Grams</MenuItem>
          <MenuItem value="kg.">Kilograms</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}