import * as React from 'react';
import {Checkbox, FormGroup, FormControlLabel} from '@mui/material';

export default function checkbox(x){
  return (
      <FormGroup>
        <FormControlLabel control={<Checkbox size="small" />} label={x} />
      </FormGroup>
      )
}