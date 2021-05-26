/* eslint-disable react/prop-types */
import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Form, Formik } from 'formik';
import DashboardLayout from '../../../Components/DashboardLayout';
import { getUserId, getUserName } from '../../../Services/Auth/SessionParser';
import Profiled from '../../../Components/Profile';
import { UserUpdate } from '../../../Models/userModels';
import { updateUser } from '../../../Services/Users';

export default function Profile(): JSX.Element {
  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <Formik
            validationSchema={UserUpdate}
            initialValues={{ userName: '' }}
            onSubmit={async (values) => {
              await updateUser({
                Id: getUserId(),
                UserName: values.userName
              });
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <Profiled />
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
