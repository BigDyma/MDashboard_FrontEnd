import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';
import { InputLabel, MenuItem, Select, FormControl, makeStyles, Theme, createStyles } from "@material-ui/core";

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

export default function newProject():JSX.Element {

    const classes = useStyles();
  return (
        <>
            <Grid item xs sm={4}>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={1}
                    onChange={() => console.log()}
                    label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs sm={4}>
                <TextField
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
                <TextField
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
