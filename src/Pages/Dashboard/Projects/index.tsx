/* eslint-disable react/prop-types */

import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import DashboardLayout from '../../../Components/DashboardLayout';
import ProjectsLayout from '../../../Components/Projects';

export default function Projects():JSX.Element {

  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
            <ProjectsLayout />
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
