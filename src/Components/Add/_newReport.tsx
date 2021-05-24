import React, {useEffect, useState} from "react";
import {Field} from 'formik';
import {TextField} from 'formik-material-ui';
import Grid from '@material-ui/core/Grid';
import { InputLabel, MenuItem, Select, FormControl, makeStyles, Theme, createStyles } from "@material-ui/core";
import {getUserReports, getUserProjects} from '../../Services/Users';
import {getUserId} from '../../Services/Auth/SessionParser';
import { IProjectResponse } from "../../Models/projectsModels";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

// @TO-DO get all projects names

const getAllProjects = async () => {
try
{
    const userId = getUserId();
    const projects =  await getUserProjects(userId);
    return projects;
}
catch (e) {console.log(e)}

return [{Name:"", Id:-1}];
}


export default function newProject():JSX.Element {

    const classes = useStyles();
    const [projects, setProjects] = useState<IProjectResponse[]>([{Id:-1, Name: ""}]);

    useEffect(() => {getAllProjects().then(v => setProjects(v as IProjectResponse[]))}, [] );
    

  return (
        <>
          <Grid item xs sm={4}>
              <FormControl fullWidth variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                    <Field
                    component={Select}
                    name="projectName"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={1}
                    label="Project"
                    >
                    <MenuItem value="None">
                            <em>None</em>
                    </MenuItem>
                    {projects?.map((val: IProjectResponse, i) => (
                        <MenuItem key={val.Id} value={val.Id}>val.Name</MenuItem>
                    ))}
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
