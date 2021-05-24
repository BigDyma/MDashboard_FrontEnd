import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import DashboardLayout from '../../../Components/DashboardLayout';


export default function ViewReport():JSX.Element {

  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
            <iframe title="report" width="100%" height="500"  src="https://app.powerbi.com/view?r=eyJrIjoiNDVkMGRmMTMtOTIzMC00ZWI2LTgxNDQtNzhmMGU3MzU5MTc3IiwidCI6IjZkYjY3YjJiLWY3YWUtNDU0Zi1hZWU4LTdkNDY5NDI3OWU2YyIsImMiOjh9&pageName=ReportSection"  />
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
