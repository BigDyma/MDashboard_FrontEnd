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
      Id: 0,
      Name: '',
      Link: '',
      CreatedTime: null
    }
  ]);

  const history = useHistory();

  useEffect(() => {
    console.log(getUserId(), 'd');
    getAllReports(getUserId()).then((v) => setReports(v as IReportResponse[]));
    console.log(reports);
  }, []);

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
        <CustomPaginationActionsTable to="Reports" />
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
