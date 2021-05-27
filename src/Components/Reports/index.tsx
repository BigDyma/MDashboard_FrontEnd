import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { Link, useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams
} from '@material-ui/data-grid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import { useSnackbar } from 'notistack';
import CustomPaginationActionsTable from '../Table';
import { IReportResponse } from '../../Models/reportModels';
import { getAllReports } from '../../Services/Users';
import { IProjectResponse } from '../../Models/projectsModels';
import { getUserId } from '../../Services/Auth/SessionParser';
import { getProjectsReports } from '../../Services/Projects';
import deleteReport from '../../Services/Reports/_deleteReport';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch'
    }
  }
}));

export default function Reports() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [reports, setReports] = useState<IReportResponse[]>([
    {
      id: 0,
      name: 'loading',
      link: 'no link',
      createdTime: null
    }
  ]);

  const history = useHistory();

  const pageType = window.location.pathname;

  useEffect(() => {
    if (pageType.includes('/Reports')) {
      getAllReports(getUserId()).then((v) =>
        setReports(v as IReportResponse[])
      );
    } else {
      getProjectsReports(parseInt(pageType[pageType.length - 1], 10)).then(
        (v) => setReports(v as IReportResponse[])
      );
    }
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Project Name', width: 150 },
    { field: 'reports', headerName: 'Reports', width: 180 },
    {
      field: 'GoTo',
      headerName: '',
      width: 180,
      // eslint-disable-next-line react/display-name
      renderCell: (params: GridValueGetterParams) => (
        <IconButton color="primary" aria-label="add an alarm">
          <ArrowForwardIcon />
        </IconButton>
      )
    },
    {
      field: 'Remove',
      headerName: '',
      width: 180,
      // eslint-disable-next-line react/display-name
      renderCell: (params: GridValueGetterParams) => (
        <IconButton color="primary" aria-label="add an alarm">
          <RemoveCircleOutlineOutlinedIcon />
        </IconButton>
      )
    }
  ];

  return (
    <Container>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          My Reports
        </Typography>
      </Container>
      <Container>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={reports}
            columns={columns}
            pageSize={5}
            onCellClick={async (e) => {
              if (e.field === 'GoTo') history.push(`/Reports/${e.id}`);
              if (e.field === 'Remove') {
                try {
                  await deleteReport(parseInt(e.id.toString(), 10));

                  reports.filter((x) => x.id.toString() !== e.id.toString());
                  setReports(
                    reports.filter((x) => x.id.toString() !== e.id.toString())
                  );

                  enqueueSnackbar('Removed with success', {
                    variant: 'success'
                  });
                } catch (error) {
                  console.log(error);
                  enqueueSnackbar(error.toString(), { variant: 'error' });
                }
              }
            }}
          />
        </div>
      </Container>
      <Box textAlign="center">
        <Button
          component={Link}
          to="/Reports/add"
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          className={classes.submit}
        >
          Add Report
        </Button>
      </Box>
    </Container>
  );
}
