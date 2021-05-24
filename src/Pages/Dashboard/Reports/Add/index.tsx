import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import {  useSnackbar } from 'notistack';
import {Formik, Form} from 'formik';
import {Redirect, useHistory } from "react-router-dom";
import DashboardLayout from '../../../../Components/DashboardLayout';
import InputComponent from '../../../../Components/Add';
import {NewReportSchema} from "../../../../Models/reportModels";
import createReport  from '../../../../Services/Reports/_createReport';
import { getUserId } from '../../../../Services/Auth/SessionParser';

export default function ProjectsAdd():JSX.Element {
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    const userId = getUserId();

  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={10}>
        <Paper>
            <Formik 
                validationSchema={NewReportSchema}
                 initialValues={{projectName: 0, reportName: "", reportLink:""}} 
                 onSubmit={async (values) => {
                      try { 
                          await createReport({Name: values.reportName, Link: values.reportLink, ProjectId: values.projectName});
                          history.push('/Reports');
                          enqueueSnackbar("New Report was created!", {variant: "success"})
                        }
                      catch (e) {
                          enqueueSnackbar(e.toString(), {variant: 'error'})
                      }
                          }}>
            {(props) => (
             <Form onSubmit={props.handleSubmit}>
                <InputComponent title="Add New report" variant="report"/>
             </Form>
             )}
          </Formik>
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
