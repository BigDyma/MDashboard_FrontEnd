import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import DashboardLayout from '../../../../Components/DashboardLayout';
import InputComponent from '../../../../Components/Add';

export default function ProjectsAdd():JSX.Element {

  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <InputComponent title="Add New report" variant="report"/>
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
