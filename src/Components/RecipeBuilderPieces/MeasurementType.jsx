import * as React from 'react';
import {Select, FormControl, MenuItem, InputLabel, Box} from '@mui/material';

export default function MeasurementType({measurement, setMeasurement}) {
  const handleChange = (event) => {
    setMeasurement(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="measurementTypeLabel">Measurement</InputLabel>
        <Select
          labelId="measurementTypeLabel"
          id="measurementType"
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