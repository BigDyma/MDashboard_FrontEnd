/* eslint-disable react/prop-types */
import * as React from 'react';
import { FieldProps, Field } from 'formik';
import { TextFieldProps } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

const FieldComponent: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  field
  // eslint-disable-next-line react/jsx-props-no-spreading
}) => <Field component={TextField} placeholder={placeholder} {...field} />;

export default FieldComponent;
