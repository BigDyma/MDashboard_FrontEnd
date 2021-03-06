import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
// import useStyles from '../../../Components/DashboardLayout/_styles';
import DashboardLayout from '../../../Components/DashboardLayout';
import FileUpload from '../../../Components/CsvUpload';

export default function Application(): JSX.Element {
  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <FileUpload />
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
