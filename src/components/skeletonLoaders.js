import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


export const TableLoader = () => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Skeleton variant="rectangular" height={50} />
      <Stack
        component="form"
        direction={'row'}
        sx={{ p: 1 }}
        spacing={1}
      >
        {Array(5).fill('').map((e, i) =>
          <Skeleton variant="rectangular" width={215} height={30} key={i} />
        )}
      </Stack>
      <Stack
        component="form"
        direction={'row'}
        sx={{ p: 1 }}
        spacing={1}
      >
        {Array(5).fill('').map((e, i) =>
          <Skeleton variant="rectangular" width={215} height={30} key={`r${i}`} />
        )}
      </Stack>
    </Paper>
  );
}

export const CapsuleDetailsLoader = () => {
  return (
    <>
      <Skeleton variant="rectangular" height={118} />
      <Skeleton width="30%" />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </>
  )
}
