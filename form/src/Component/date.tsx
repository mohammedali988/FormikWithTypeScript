import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";
import * as types from "./componentTypes";

const TimePicker = (props: types.Iprops) => {
  const [field, meta] = useField(props.name);

  const configDateTime:types.IconfigDateTime = {
    ...field,
    type: "date",
    variant: "outlined",
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTime.error = true;
    configDateTime.helperText = meta.error;
  }

  return (
    <>
      <TextField {...configDateTime} />
    </>
  );
};

export default TimePicker;
