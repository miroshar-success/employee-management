import React from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import DateRangePick from "../components/DateRangePick";
import "./style/AddProject.css";
import { Dayjs } from "dayjs";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";

const AddProject = () => {
  const [ProjectDurationValue, setProjectDurationValue] = React.useState<
    DateRange<Dayjs>
  >([null, null]);
  console.log("po", ProjectDurationValue);
  const formik = useFormik({
    initialValues: {
      name: "",
      client: "",
      pm: "",
      status: "",
      duration: {},
    },
    onSubmit: (values) => {
      values.duration = ProjectDurationValue;
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: { md: 600, xs: 430, sm: 450 },
          width: { md: 600, xs: 320, sm: 400 },
          bgcolor: "#A5C9CA",

          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 2,
          boxShadow: 3,
          transform: "translate(-50, -50)",
        }}
        className="project-form"
      >
        <h3 style={{ textAlign: "center", marginTop: "-1px" }}>
          Add New Project
        </h3>
        <br />
        <br />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Project Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ marginBottom: 2 }}
          />

          <TextField
            fullWidth
            id="cilent"
            name="client"
            label="Client Name"
            value={formik.values.client}
            onChange={formik.handleChange}
            error={formik.touched.client && Boolean(formik.errors.client)}
            helperText={formik.touched.client && formik.errors.client}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            id="pm"
            name="pm"
            label="PM Name"
            value={formik.values.pm}
            onChange={formik.handleChange}
            error={formik.touched.pm && Boolean(formik.errors.pm)}
            helperText={formik.touched.pm && formik.errors.pm}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            id="status"
            name="status"
            label="Project Status"
            value={formik.values.status}
            onChange={formik.handleChange}
            error={formik.touched.status && Boolean(formik.errors.status)}
            helperText={formik.touched.status && formik.errors.status}
            sx={{ marginBottom: 2 }}
          />
          {/* <DateRangePick
            ProjectDurationValue={ProjectDurationValue}
            setProjectDurationValue={setProjectDurationValue}
          /> */}
          <DateRangePick
            id="duration"
            name="duration"
            value={ProjectDurationValue}
            ProjectDurationValue={ProjectDurationValue}
            setProjectDurationValue={setProjectDurationValue}
          />
          <br />
          <br />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AddProject;
