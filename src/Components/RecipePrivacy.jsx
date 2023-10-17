import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RecipePrivacy({privacy, setPrivacy}) {
  const handlePrivacyChange = (event) =>{
    setPrivacy(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel id="recipe-privacy-settings">Recipe Privacy</FormLabel>
      <RadioGroup
        row
        aria-labelledby="recipe-privacy-settings"
        name="row-radio-buttons-group"
        value={privacy}
        onChange={handlePrivacyChange}
      >
        <FormControlLabel value="personal" control={<Radio />} label="Personal" />
        <FormControlLabel value="public" control={<Radio />} label="Public" />
      </RadioGroup>
    </FormControl>
    
  );
}