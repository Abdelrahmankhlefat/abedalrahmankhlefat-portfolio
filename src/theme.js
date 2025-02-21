'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    primary: {
     main: '#022C43', 
    },
    secondary: {
      main: '#FF69B4', 
    },
  },
});

export default theme;