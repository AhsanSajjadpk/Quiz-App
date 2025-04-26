import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertFun() {
  return (
    <Stack sx={{ width: '100%' , height: 'auto' }} spacing={2}>
      <Alert severity="error">This is an error Alert.</Alert>
    </Stack>
  );
}
