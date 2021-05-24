import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import newProject from './_newProject'
import newReport from './_newReport'

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

const chooseComponent = (variant: string):JSX.Element => {
    if (variant === "report")
        return newReport();
    if (variant === "project")
        return newProject();
    return <></>
}

export default function Add(props: {title:string, variant: string}):JSX.Element {
  const classes = useStyles();

  const {title, variant} = props;
  
  const variantComponent = chooseComponent(variant);


  return (
      <Container>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            {title}
          </Typography>
        </Container>
        <Container >
          <Grid container spacing={3} >
              {variantComponent}
          </Grid>
        </Container>
        <Box textAlign='center' >
           <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                className={classes.submit}
              >
                Save
          </Button>
          </Box >
        </ Container>
  );
}
