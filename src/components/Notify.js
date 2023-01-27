import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notify({
  open,
  message,
  notifyType,
  closeNotification
}) {

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={3000}
      onClose={closeNotification}>
      <Alert
        onClose={closeNotification}
        severity={notifyType}
        sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}