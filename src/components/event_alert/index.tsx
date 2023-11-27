import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps} from '@material-ui/lab/Alert';

interface SnackbarComponentProps {
  open: boolean;
  message: string;
  colorMessage: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackbarComponent: React.FC<SnackbarComponentProps> = ({ open, message, colorMessage, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={colorMessage === 'success' ? 'success' : 'error'}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
