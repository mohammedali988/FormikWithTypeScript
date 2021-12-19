import React, { ChangeEvent } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import * as types from "./componentTypes";

type label = string | undefined;

const IsEndDate = (props: types.Iprops) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props.name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFieldValue(props.name, checked);
  };
  const configCheckBox = {
    ...field,
    label: props.label,
    onChange: handleChange,
  };

  const catchError: types.IcatchError = {};
  if (meta && meta.touched && meta.error) {
    catchError.error = true;
  }
  return (
    <FormControl {...catchError}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckBox} />}
          label:label={props.label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default IsEndDate;
