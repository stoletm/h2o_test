import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#54D3C2',
    },
    primary: {
      main: '#F8F8F8',
    },
    success: {
      main: '#54D3C2',
    },
    error: {
      main: '#FC5C65',
    }
  },
  typography: {
    fontFamily: 'Proxima nova, Roboto',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
