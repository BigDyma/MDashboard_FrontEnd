/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Form } from 'formik';
import { Grid, Paper } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { Redirect, useHistory } from 'react-router-dom';
import DashboardLayout from '../../../../Components/DashboardLayout';
import InputComponent from '../../../../Components/Add';
import { ProjectSchema } from '../../../../Models/projectsModels';
import { createProject } from '../../../../Services/Projects';
import { getUserId } from '../../../../Services/Auth/SessionParser';

export default function ProjectsAdd(): JSX.Element {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const userId = getUserId();
  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
          <Formik
            validationSchema={ProjectSchema}
            initialValues={{ projectName: '' }}
            onSubmit={async (values) => {
              try {
                await createProject({
                  Name: values.projectName,
                  UserId: userId
                });
                history.push('/Projects');
                enqueueSnackbar('New project created!', { variant: 'success' });
              } catch (e) {
                enqueueSnackbar(e.toString(), { variant: 'error' });
              }
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <InputComponent title="Add New Project" variant="project" />
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
