import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DataTable from './components/DataTable';
import moment from 'moment';
import {
  fetchAllCaspsules,
  fetchCaspsuleDetails,
  setSelectedCapsule
} from './store/capsulesSlice';
import CapsuleDetails from './components/CapsuleDetails';

const theme = createTheme();

const tableHeaders = [
  { id: 'capsule_id', label: 'ID' },
  { id: 'capsule_serial', label: 'Serial' },
  { id: 'type', label: 'Type' },
  { id: 'original_launch', label: 'Launched On', render: (value) => value ? moment(value).format('lll') : 'unknown' },
  { id: 'missions', label: 'Missions', align: 'right', render: (value) => value.length },
  { id: 'reuse_count', label: 'Reuse Count', align: 'right' },
  { id: 'status', label: 'Status' }
];


export default function App() {

  const dispatch = useDispatch();

  const {
    allCapsules,
    loadingAllCapsules,
    selectedCapsule,
    loadingCapsuleDetails,
    loadingCapsuleDetailsFailed
  } = useSelector(state => state.capsules);

  const [filters, setFilters] = useState({
    status: '',
    type: '',
    date: ''
  });
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    return () => dispatch(fetchAllCaspsules());
  }, [dispatch]);

  const handleRowClick = (data) => {
    dispatch(fetchCaspsuleDetails(data.capsule_serial));
    setOpenDetails(true);
  }

  const handleClose = () => {
    dispatch(setSelectedCapsule(null));
    setOpenDetails(false);
  }

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
            <Stack
              component="form"
              direction={{ xs: 'column', sm: 'row' }}
              mt={2}
              spacing={2}
              autoComplete="off"
            >
              <Typography pt={1} variant="h6" color="text.secondary" align="center">
                Filters:
              </Typography>
              <TextField
                label="Filter by Status"
                id="status"
                name="status"
                size="small"
                type="string"
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                value={filters.status || ''}
              />
              <TextField
                label="Filter by Type"
                id="type"
                name="type"
                size="small"
                type="string"
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                value={filters.type}
              />
              <TextField
                label="Filter by Launch Date"
                id="date"
                name="date"
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                value={filters.date}
              />
            </Stack>
          </Grid>
        </Container>
        {/* Filters End*/}

        {/* Table section*/}
        <Container sx={{ py: 1 }}>
          <Grid container sx={{ p: 1 }} justifyContent="center" alignItems="center">
            <Typography variant="body4" color="text.secondary" align="center">
              A list of capsules
            </Typography>
          </Grid>
          <DataTable
            tableHeaders={tableHeaders}
            tableData={allCapsules}
            isLoading={loadingAllCapsules}
            onRowClick={handleRowClick}
          />
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

      {openDetails && (
        <CapsuleDetails
          open={openDetails}
          handleClose={handleClose}
          capsuleInfo={selectedCapsule}
          isLoading={loadingCapsuleDetails}
          loadingFailed={loadingCapsuleDetailsFailed}
        />
      )}
    </ThemeProvider>
  );
}