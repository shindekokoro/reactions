import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';
import { CssBaseline, Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App(error) {
  console.log(error);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Header />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.lightBack,
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto'
            }}
          >
            <Container maxWidth="lg" sx={{ mt: 12, ml: 0 }}>
              {error?.error || <Outlet />}
              <Footer sx={{ pt: 20 }} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
