import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import DashboardLayout from '../../../../Components/DashboardLayout';
import ReportsLayout from '../../../../Components/Reports';

export default function Reports(): JSX.Element {
  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <ReportsLayout />
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
