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
  GridColDef,
  GridValueGetterParams,
  DataGrid,
  GridRowId
} from '@material-ui/data-grid';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import { useSnackbar } from 'notistack';
import CustomPaginationActionsTable from '../Table';
import { IProjectResponse } from '../../Models/projectsModels';
import { getUserId } from '../../Services/Auth/SessionParser';
import { deleteProject, getAllProjects } from '../../Services/Projects';

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

export default function Projects() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [projects, setProjects] = useState<IProjectResponse[]>([
    { id: 0, name: '' }
  ]);

  const history = useHistory();

  useEffect(() => {
    getAllProjects(getUserId()).then((v) =>
      setProjects(v as IProjectResponse[])
    );
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
          My Projects
        </Typography>
      </Container>
      <Container>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={projects}
            columns={columns}
            pageSize={5}
            onCellClick={async (e) => {
              if (e.field === 'GoTo') history.push(`/Projects/${e.id}`);
              if (e.field === 'Remove') {
                try {
                  await deleteProject(parseInt(e.id.toString(), 10));

                  projects.filter((x) => x.id.toString() !== e.id.toString());

                  setProjects(
                    projects.filter((x) => x.id.toString() !== e.id.toString())
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
          to="/Projects/add"
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          className={classes.submit}
        >
          Add Project
        </Button>
      </Box>
    </Container>
  );
}
