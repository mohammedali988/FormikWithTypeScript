import * as yup from "yup";

const validationSchema = yup.object().shape({
  jopField: yup.string().required("required!"),
  jopTitle: yup.string().required("required!"),
  jopLocation: yup.string().required("required!"),
  companyIndustry: yup.string().required("required!"),
  companySize: yup.string().required("required!"),
  companySector: yup.string().required("required!"),
  curruncy: yup.string().required("required!"),
  companyName: yup.string().required("required!"),
  companyAdress: yup.string().required("required!"),
  superVisorName: yup.string().required("required!"),
  employeeSupervisorBy: yup.number().required("required!"),
  reasonOfLeaveng: yup.string().required("required!"),
  startDate: yup.date().required("Field Is required"),
  endDate: yup.date().when("isEndDate", {
    is: false,
    then: yup.date().required("please Select the end date!"),
  }),
  isEndDate: yup.boolean(),
});

export default validationSchema;
