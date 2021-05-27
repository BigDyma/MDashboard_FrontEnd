import React, { useEffect, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router';
import DashboardLayout from '../../../Components/DashboardLayout';
import { getUserId } from '../../../Services/Auth/SessionParser';
import { IReportResponse } from '../../../Models/reportModels';
import getReport from '../../../Services/Reports/_getReport';

export default function ViewReport(): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  const [report, setReport] = useState<IReportResponse>({
    name: '',
    link: '',
    id: 0,
    createdTime: null
  });
  const id = parseInt(window.location.pathname.split('Reports/')[1], 10);
  useEffect(() => {
    try {
      getReport(id).then((v) => setReport(v as IReportResponse));
    } catch (e) {
      enqueueSnackbar(e.toString(), { variant: 'error' });
    }
  }, []);

  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <iframe
            title={report.name}
            width="100%"
            height="500"
            src={report.link}
          />
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
