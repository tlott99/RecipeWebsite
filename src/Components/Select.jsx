import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const units = [
  {
    value: 'cups',
    label: 'c.',
  },
  {
    value: 'teaspoons',
    label: 'tsp.',
  },
  {
    value: 'tablespoons',
    label: 'tbsp.',
  },
  {
    value: 'fluid ounces',
    label: 'fl.oz.',
  },
    {
    value: 'ounces',
    label: 'oz.',
  },
  {
    value: 'pounds',
    label: 'lbs.',
  },
  {
    value: 'no measurement',
    label: '',
  },
];

export default function UnitMenu() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: .5, width: '13ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select Unit"
          size="small"
          defaultValue="teaspoons"
/*           helperText="Please select the measurement unit" */
        >
          {units.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
