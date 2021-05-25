import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
// import useStyles from '../../../Components/DashboardLayout/_styles';
import DashboardLayout from '../../../Components/DashboardLayout';

export default function Application(): JSX.Element {
  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Home page. I will think later what I can add here.
          </Typography>
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
