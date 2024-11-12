import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { MenuItem, SvgIcon } from '@mui/material';
import Image from '../assets/Logo.svg';
import { Search } from 'react-feather';
import { NavBanner } from './NavBanner';
import styled from 'styled-components';

export const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={{ margin: '0 10vw' }}>
        <AppBar position="static" style={{ background: '#ffffff', boxShadow: 'none' }}>
          <Toolbar style={{ paddingBlock: '1.5rem' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <img src={Image} alt="navbar-logo" />
            </IconButton>

            <Box sx={{ flexGrow: 1 }}>
              <MenuItem style={{ justifyContent: 'flex-end', gap: '10' }}>
                <Box sx={{ display: { xs: 'none', sm: 'block', color: 'black' } }}>
                  <NavLinks>About Us</NavLinks>
                  <NavLinks>Funds</NavLinks>
                  <NavLinks>Insights</NavLinks>
                  <NavLinks>Resources</NavLinks>
                  <NavLinks>Contact</NavLinks>
                </Box>
              </MenuItem>
            </Box>

            <SvgIcon />
            <IconButton size="large" edge="start" aria-label="search-icon" sx={{ mr: 2 }}>
              <Search />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <NavBanner />
    </Box>
  );
};

const NavLinks = styled.span`
  margin: 0 10px;
`;
