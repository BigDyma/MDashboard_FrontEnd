import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import DashboardLayout from '../../../Components/DashboardLayout';
import { getUserName } from '../../../Services/Auth/SessionParser';
import Profiled from '../../../Components/Profile';

export default function Profile(): JSX.Element {
  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <Profiled />
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
