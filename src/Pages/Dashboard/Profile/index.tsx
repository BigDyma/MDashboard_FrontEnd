import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import DashboardLayout from '../../../Components/DashboardLayout';
import {getUserName} from '../../../Services/Auth/SessionParser'

export default function Profile():JSX.Element {

  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={9}>
        <Paper>
          <Typography component="h1" variant="h2" color="inherit" noWrap>
              Hello nigger
           </Typography>
        </Paper>
      </Grid>
    </DashboardLayout>
  );
  
}
