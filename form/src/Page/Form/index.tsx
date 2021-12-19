import { Container, Paper, Grid, Button } from "@mui/material";
import React from "react";
import SelectInput from "../../Component/select";
import * as constant from "./data";
import TimePicker from "../../Component/date";
import { useStyle } from "./style";
import TextFields from "../../Component/componentTypes";
import { FormikProvider } from "formik";
import { Form, useFormik } from "formik";
import validationSchema from "../../Utils/validation";
import IsEndDate from "../../Component/checkBox";
import * as types from "./typeForData";

const selectjopField: types.Ioptions[] = constant.jopField;
const selectjopTitle: types.Ioptions[] = constant.jopTitle;
const selectjopLocation: types.Ioptions[] = constant.jopLocation;
const selectcompanyIndustry: types.Ioptions[] = constant.companyIndustry;
const selectcompanySize: types.Ioptions[] = constant.companySize;
const selectcompanySector: types.Ioptions[] = constant.companySector;
const selectCurruncy: types.Ioptions[] = constant.curruncy;

const hundleSubmit = (values: types.IinitialValues) => {
  alert(JSON.stringify(values, null, 2));
};

let initialValues: types.IinitialValues = {
  jopField: "",
  jopTitle: "",
  jopLocation: "",
  startDate: "",
  endDate: "",
  isWorkThere: "",
  jopDiscreption: "",
  companyName: "",
  companyAdress: "",
  companyIndustry: "",
  companySize: "",
  companySector: "",
  superVisorName: "",
  employeeSupervisorBy: "",
  reasonOfLeaveng: "",
  startSalary: "",
  endSalary: "",
  curruncy: "",
  isEndDate: false,
};

const FormPage = () => {
  const classes = useStyle();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: hundleSubmit,
  });

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Container className={classes.container}>
            <Paper className={classes.paper}>
              <label style={{ float: "right !important" }}>
                <h3>Jop Details</h3>
              </label>
              <SelectInput
                name="jopField"
                options={selectjopField}
                label="Jop Field"
              />
              <SelectInput
                options={selectjopTitle}
                name="jopTitle"
                label="Jop Title"
              />
              <SelectInput
                options={selectjopLocation}
                name="jopLocation"
                label="Jop Location"
              />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TimePicker name="startDate" label="Start Date" />
                </Grid>
                <Grid item xs={6}>
                  <TimePicker name="endDate" label="End Date" />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <IsEndDate name="isEndDate" label="Curruntly work there" />
                </Grid>
              </Grid>
              <TextFields
                name="jopDiscreption"
                label="Jop Discreption"
                multiline={true}
                row={10}
              />
              <label style={{ float: "right !important" }}>
                <h3>Company Details</h3>
              </label>
              <TextFields name="companyName" label="Company Name" />
              <TextFields name="companyAdress" label="Company Address" />
              <SelectInput
                options={selectcompanyIndustry}
                name="companyIndustry"
                label="Company Industry"
              />
              <SelectInput
                options={selectcompanySize}
                name="companySize"
                label="Company Size"
              />
              <SelectInput
                options={selectcompanySector}
                name="companySector"
                label="Company Sector"
              />
              <TextFields name="superVisorName" label="Supervisor Name" />
              <TextFields
                name="employeeSupervisorBy"
                label="of Employees supervisor by"
              />
              <TextFields name="reasonOfLeaveng" label="Reson of leaving" />
              <label style={{ float: "right !important" }}>
                <h3>Compenasaition</h3>
              </label>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextFields name="startSalary" label="Start Salary" />
                </Grid>
                <Grid item xs={4}>
                  <TextFields name="endSalary" label="End Salary" />
                </Grid>
                <Grid item xs={4}>
                  <SelectInput
                    options={selectCurruncy}
                    name="curruncy"
                    label="Curruncy"
                  />
                </Grid>
              </Grid>

              <Button type="submit" style={{ border: "none" }}>
                + save and add another{" "}
              </Button>
              <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Container>
          <Button type="submit">save</Button>
        </Form>
      </FormikProvider>
    </>
  );
};

export default FormPage;
