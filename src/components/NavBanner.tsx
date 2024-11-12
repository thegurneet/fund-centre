import React from 'react';
import { useTheme } from '@mui/material/styles';
import Banner from '../assets/Banner.png';

export const NavBanner = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.main,
        position: 'relative',
        textAlign: 'center'
      }}>
      <img
        src={Banner}
        style={{ width: '100%', maxHeight: '150px', display: 'block' }}
        alt="navbar-banner"
      />
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '16px',
          color: 'white',
          margin: '0 10vw'
        }}>
        {' '}
        Home | Funds{' '}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '16px',
          color: 'white',
          margin: '0 10vw'
        }}>
        {' '}
        <h1> Our Funds </h1>
      </div>
    </div>
  );
};
