import React, { useEffect, useState } from 'react';
import { Field } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import {
  InputLabel,
  MenuItem,
  FormControl,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';
import { getUserReports, getUserProjects } from '../../Services/Users';
import { getUserId } from '../../Services/Auth/SessionParser';
import { IProjectResponse } from '../../Models/projectsModels';
import getUser from '../../Services/Users/_getUser';
import { getAllProjects } from '../../Services/Projects';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

export default function newProject(): JSX.Element {
  const classes = useStyles();
  // states
  const [projects, setProjects] = useState<IProjectResponse[]>([
    { id: -1, name: '' }
  ]);
  const [selectedProject, setSelectedProject] = useState<number>();

  // handle selected project
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedProject(event.target.value as number);
  };

  // get all projects
  useEffect(() => {
    console.log(getUserId(), 'd');
    getAllProjects(getUserId()).then((v) =>
      setProjects(v as IProjectResponse[])
    );
    console.log(projects);
  }, []);

  return (
    <>
      <Grid item xs sm={4}>
        <FormControl
          fullWidth
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Project
          </InputLabel>
          <Field
            component={Select}
            name="projectName"
            labelId="projectName"
            id="projectName"
            label="projectName"
            multiple={false}
          >
            {projects.length ? (
              projects.map((val: IProjectResponse, i) => (
                <MenuItem key={val.id} value={val.id}>
                  <option value={val.id}>{val.name}</option>
                </MenuItem>
              ))
            ) : (
              <MenuItem>Loading...</MenuItem>
            )}
          </Field>
        </FormControl>
      </Grid>
      <Grid item xs sm={4}>
        <Field
          component={TextField}
          autoComplete="Report Name"
          name="reportName"
          variant="outlined"
          required
          fullWidth
          id="reportName"
          label="Report Name"
          autoFocus
        />
      </Grid>
      <Grid item xs sm={4}>
        <Field
          component={TextField}
          autoComplete="Report Link"
          name="reportLink"
          variant="outlined"
          required
          fullWidth
          id="reportLink"
          label="Report Link"
          autoFocus
        />
      </Grid>
    </>
  );
}
