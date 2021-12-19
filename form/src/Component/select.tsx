import React, { ChangeEvent } from "react";
import { MenuItem, TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import * as types from './componentTypes'


const SelectInput = (props: types.Iprops): JSX.Element => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props.name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFieldValue(props.name, value);
  };

  const configSelect: types.IconfigSelect = {
    ...field,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: () => handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }
  return (
    <>
      <TextField {...configSelect} style={{ marginBottom: "20px" }}>
        {props.options.map((item: types.Iitem, index: number) => {
          return (
            <MenuItem key={index} value={item.value}>
              {item.value}
            </MenuItem>
          );
        })}
      </TextField>
    </>
  );
};
export default SelectInput;
