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
import CustomPaginationActionsTable from '../Table';
import { IReportResponse } from '../../Models/reportModels';
import { getAllReports } from '../../Services/Users';
import { IProjectResponse } from '../../Models/projectsModels';
import { getUserId } from '../../Services/Auth/SessionParser';

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

  const [reports, setReports] = useState<IReportResponse[]>([
    {
      id: 0,
      name: '',
      link: '',
      createdTime: null
    }
  ]);

  const history = useHistory();

  useEffect(() => {
    console.log(getUserId(), 'd');
    getAllReports(getUserId()).then((v) => setReports(v as IReportResponse[]));
    console.log(reports);
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Project Name', width: 150 },
    { field: 'reports', headerName: 'Reports', width: 180 },
    {
      field: ' ',
      headerName: '',
      width: 180,
      // eslint-disable-next-line react/display-name
      renderCell: (params: GridValueGetterParams) => (
        <IconButton color="primary" aria-label="add an alarm">
          <ArrowForwardIcon />
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
          {reports.length ? (
            <DataGrid
              rows={reports}
              columns={columns}
              pageSize={5}
              onCellClick={(e) => history.push(`Reports/${e.id}`)}
            />
          ) : (
            <Typography variant="h5">Loading...</Typography>
          )}
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
