import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import App from './App.tsx'
import theme from './theme';


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <StyledComponentsThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </StyledComponentsThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
