/* eslint-disable react/prop-types */
import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import DashboardLayout from '../../../Components/DashboardLayout';
import StripeContainer from '../../../Components/Stripe';

export default function Subscription(): JSX.Element {
  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <StripeContainer />
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
