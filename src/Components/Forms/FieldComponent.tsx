import * as React from "react";
import {FieldProps} from "formik";
import { TextField, TextFieldProps } from "@material-ui/core";

export const FieldComponent: React.FC<FieldProps & TextFieldProps> = ({placeholder, field, form}) => {
    return (
        <TextField  placeholder={placeholder}  {...field} />
    )
}