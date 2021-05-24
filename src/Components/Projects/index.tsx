import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import CustomPaginationActionsTable from '../Table'

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch"
    }
  }
}));

export default function Projects() {
  const classes = useStyles();

  return (
      <Container>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            My Projects
          </Typography>
        </Container>
        <Container >
          <CustomPaginationActionsTable to="Projects" />
        </Container>
        <Box textAlign='center' >
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
          </Box >
        </ Container>
  );
}
