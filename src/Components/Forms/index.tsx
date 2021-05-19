import * as React from 'react';
import {TextField, Button} from "@material-ui/core";
import { Formik, Form, Field } from 'formik';
import {FieldComponent} from './FieldComponent'
import * as Yup from 'yup';
import * as RegisterValidation from '../../Models/registerModel'

interface Props {
    onSubmit: (values: RegisterValidation.IRegisterModel) => void;
}


export const AuthForm: React.FC<Props> = ({onSubmit}) => {
    return (
        <Formik validationSchema={RegisterValidation.registerSchema} initialValues={{fullName: "", userName: "", email: "", password: "", confirmPassword:""}} onSubmit={(values) =>{
            onSubmit(values)
        }}>
            {({values, handleChange, handleBlur}) => (
                <Form>
                    <div>   
                        <Field placeholder="firstName" name="firstName" component={FieldComponent} value=""/>
                    </div>
                    <div>
                        <Field placeholder="userName" name="userName"  component={FieldComponent}/>
                    </div>
                    <div>
                        <Field placeholder="email" name="email"  component={FieldComponent}/>
                    </div>
                    <div>
                        <Field placeholder="password" name="password"  component={FieldComponent}/>
                    </div>
                    <div>
                        <Field placeholder="confirm password" name="confirmPassword"  component={FieldComponent}/>
                    </div>
                    <Button type="submit" >Submit</Button>
                    <pre>
                        {JSON.stringify(values, null, 2)}
                    </pre>
                </Form>
        ) }</Formik>
    );
} 