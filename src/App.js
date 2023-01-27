import React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import RocketIcon from '@mui/icons-material/Rocket';

const theme = createTheme();

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <RocketIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            spaceX
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        {/* banner */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 3,
            pb: 3,
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
              gutterBottom
            >
              spaceXploration
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              A demo app to display some data, <i> list of capsules </i> from spaceX. <br />
              An exploration in short and about the collection of data. You can also explore!.
            </Typography>
          </Container>
        </Box>
        {/* End banner */}

        {/* Filters section */}
        <Container sx={{ py: 2 }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Typography variant="body4" color="text.secondary" align="center">
              Filters
            </Typography>
          </Grid>
        </Container>
        {/* Filters End*/}

        {/* Table section*/}
        <Container sx={{ py: 1 }}>
          <Grid container sx={{ p: 2 }} justifyContent="center" alignItems="center">
            <Typography variant="body4" color="text.secondary" align="center">
              A list of capsules
            </Typography>
          </Grid>
        </Container>
        {/*End Table section*/}
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Divider />
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          sx={{ mt: 2 }}
        >
          <i>
            The names SpaceX as well as related names, marks, emblems and images are registered trademarks of their respective owners
          </i>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          spacex{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}