import React from 'react';
import './App.css';
import { NavigationBar } from './components/Navbar';
import { ThemeProvider } from '@emotion/react';
import {theme} from './utils/theme'
import { Router } from './routes';
import Footer from './components/Footer';

function App() {
  return (

    <ThemeProvider theme={theme}>
        <NavigationBar />
        <Router />
        <Footer />
    </ThemeProvider>

  );
}

export default App;
