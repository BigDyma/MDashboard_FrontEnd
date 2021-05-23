import React from 'react';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';
import Copyright from '../../Components/Footer';
import useStyles from './_styles';
import Dashboard from '../../Components/AppBar';


export default function Application():JSX.Element {
  const classes = useStyles();

  return (
    <Dashboard>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
       </main>
    </Dashboard>
  );
}
