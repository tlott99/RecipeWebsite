import React from 'react';
import Builder from '../Components/Content/Builder'
import { Box } from '@mui/material';

export default function RecipeBuilder() {
  return (
    <Box className="col-span-6 xl:col-start-2 xl:col-span-4">
      <Builder/>
    </Box>
  )
}