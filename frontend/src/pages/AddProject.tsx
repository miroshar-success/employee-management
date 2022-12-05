import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Dayjs } from "dayjs";

import * as yup from "yup";
import { useFormik } from "formik";

import "./style/AddProject.css";
import { isAdmin } from "../utils/auth";
import DateRangePick from "../components/DateRangePick";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  client: yup.string().required("Client is required"),
  pm: yup.string().required("Project Manager is required"),
  status: yup.string().required("Status is required"),
});

const AddProject = () => {
  let params = useParams();
  const projectId = params.id;

  const [ProjectDurationValue, setProjectDurationValue] = React.useState<
    DateRange<Dayjs>
  >([null, null]);
  const [pm, setPm] = React.useState<any>([]);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      client: "",
      pm: "",
      status: "",
      duration: {},
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.duration = ProjectDurationValue;
      // alert(JSON.stringify(values, null, 2));

      projectId ? updateData() : postData();
    },
  });

  useEffect(() => {
    if (!isAdmin()) {
      navigate("/");
    }
    if (projectId) {
      const getData = async () => {
        const res = await axios.get(
          `http://localhost:5000/api/v1/projects/${projectId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await res.data;

        formik.values.name = data.name;
        formik.values.client = data.client;
        formik.values.pm = data.pm;
        formik.values.status = data.status;
        formik.values.duration = data.duration;
        setProjectDurationValue(data.duration);
      };
      getData();
    }
    getPm();
  }, []);

  const postData = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/addprojects",
        formik.values,
        {
          headers: headers,
        }
      );
      const json = await res.data;
      res.data.successMessage
        ? alert(res.data.successMessage)
        : alert(res.data.errorMessage);
      navigate("/projects");
    } catch (error: any) {
      alert(error.response.data);
    }
  };

  const updateData = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const res = await axios.put(
        `http://localhost:5000/api/v1/projects/${projectId}`,
        formik.values,
        {
          headers: headers,
        }
      );
      const json = await res.data;

      navigate("/projects");
    } catch (error: any) {
      alert(error.response.data);
    }
  };

  const getPm = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const res = await axios.get("http://localhost:5000/api/v1/employee", {
        headers: headers,
      });
      const json = await res.data;
      const pm = json.filter(
        (item: any) =>
          item.designation === "pm" && item.employeeStatus === "active"
      );
      setPm(pm);
    } catch (error: any) {
      alert(error.response.data);
    }
  };

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
        {projectId ? (
          <h3 style={{ textAlign: "center", marginTop: "-1px" }}>
            Edit Project
          </h3>
        ) : (
          <h3 style={{ textAlign: "center", marginTop: "-1px" }}>
            Add New Project
          </h3>
        )}
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

          <InputLabel id="pm">PM Name</InputLabel>
          <Select
            labelId="pm"
            id="pm"
            name="pm"
            value={formik.values.pm}
            label="pm"
            onChange={formik.handleChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          >
            {pm.map((item: any) => {
              return <MenuItem value={item.name}>{item.name}</MenuItem>;
            })}
          </Select>

          <InputLabel id="status">Status</InputLabel>
          <Select
            labelId="status"
            id="status"
            name="status"
            value={formik.values.status}
            label="status"
            onChange={formik.handleChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>

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
