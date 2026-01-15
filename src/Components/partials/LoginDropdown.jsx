import React from 'react';
import LoginButton from '../DropdownMenu/LoginButton';
import LogoutButton from '../DropdownMenu/LogoutButton';
import Profile from '../DropdownMenu/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import { MenuItem, Menu, Button, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function LoginDropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { isAuthenticated } = useAuth0();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <div>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
                <MenuIcon/>
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
            {isAuthenticated ? <MenuItem onClick={handleClose}><Profile/> </MenuItem> : null}
            <MenuItem onClick={handleClose}>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</MenuItem>
            </Menu>
        </div>
)
}