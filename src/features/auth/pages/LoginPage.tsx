import { Button, Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useAppDispatch } from 'app/hooks';
import * as React from 'react';
import { authActions, LoginPayload } from '../authSlice';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(3),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    const user: LoginPayload = {
      username: '',
      password: '',
    };
    dispatch(authActions.login(user));
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
