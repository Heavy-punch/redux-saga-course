import { Button, Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';
import * as React from 'react';

export interface IAdminLayoutProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
}));

export function AdminLayout(props: IAdminLayoutProps) {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());

    // const delayNav = setTimeout(() => {
    //   navigate('/login');
    // }, 1000);
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Admin layout
        </Typography>
        <Box>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogout}>
            Log out
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
