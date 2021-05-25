import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import { getUserId } from '../../Services/Auth/SessionParser';
import { IProjectResponse } from '../../Models/projectsModels';
import getUser from '../../Services/Users/_getUser';
import { getUserProps } from '../../Services/Users';
import { IUserResponse } from '../../Models/userModels';

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

export default function Profile() {
  const classes = useStyles();

  const [user, setUser] = useState<IUserResponse>({
    fullName: '',
    userName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    console.log(getUserId(), 'd');
    getUserProps(getUserId()).then((v) => setUser(v as IUserResponse));
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
          My Account
        </Typography>
      </Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs sm={4}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              disabled
              value={user.fullName}
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs sm={4}>
            <TextField
              variant="outlined"
              disabled
              value={user.email}
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs sm={4}>
            <TextField
              variant="outlined"
              disabled
              value={user.userName}
              fullWidth
              id="userName"
              label={user.userName}
              name="userName"
              autoComplete="userName"
            />
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          className={classes.submit}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
}
