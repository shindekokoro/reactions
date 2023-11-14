import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#31343d',
      light: '#48a9a6ff',
      dark: '#31343d',
      contrastText: '#48a9a6ff',
      lightBack: '#ededf7'
    },
    error: {
      main: red.A400
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#434753',
          color: '#48a9a6ff'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#ededf7'
          }
        }
      }
    }
  }
});

export default theme;
