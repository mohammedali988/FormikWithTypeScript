import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";
import * as types from './componentTypes';

const TextFields = (props:types.Iprops) => {
  const [field, meta] = useField(props.name);

  const configTextField: types.IconfigTextField = {
    ...field,
    variant: "outlined",
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} style={{ marginBottom: "20px" }} />;
};

export default TextFields;
