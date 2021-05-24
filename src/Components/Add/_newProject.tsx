import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';

export default function newProject():JSX.Element {

  return (
        <>
            <Grid item xs sm={4}>
                <TextField
                    autoComplete="Project Name"
                    name="projectName"
                    variant="outlined"
                    required
                    fullWidth
                    id="projectName"
                    label="Project Name"
                    autoFocus
                  />
                </Grid>
         </>
  );
}
