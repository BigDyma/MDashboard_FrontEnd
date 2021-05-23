import React from 'react';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';
import Copyright from '../Footer';
import useStyles from './_styles';
import Dashboard from './_dashboard';


export default function DashboardLayout(props: {children: React.ReactNode}):JSX.Element {
  const classes = useStyles();
  const {children} = props;

  return (
    <Dashboard key='dashboardLayout'>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} />
            {children}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
       </main>
    </Dashboard>
  );
}
