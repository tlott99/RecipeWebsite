import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import {Routes, Route, Link} from "react-router-dom";
// import RecipeBuilder from "../Pages/RecipeBuilder";
// import RecipeFinder from '../Pages/RecipeFinder';
import Box from '@mui/material/Box';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log("hello")
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
        Home
        </MenuItem>
        <MenuItem 
          onClick= {handleClose}>
          RecipeBuilder
        </MenuItem>
        <MenuItem 
          onClick={handleClose}>Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
// https://github.com/mui/material-ui/issues/204