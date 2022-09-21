import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DatePick from "./DatePick";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const AddEmployeeProfessional = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Box
        sx={{
          height: { md: 400, xs: 330, sm: 450 },
          width: { md: 600, xs: 320, sm: 400 },
          bgcolor: "#A5C9CA",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 2,
          boxShadow: 3,
          m: 2,
        }}
      >
        <form style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ textAlign: "center" }}>
            Add Employee's Current Project
          </h2>
          <InputLabel id="projects">projects</InputLabel>
          <Select
            labelId="projects"
            id="projects"
            value={values.projectName}
            label="Project Name"
            onChange={handleChange("projectName")}
          >
            {projects.map((project) => {
              return <MenuItem value={project.name}>{project.name}</MenuItem>;
            })}
          </Select>
          <InputLabel id="employeeResponsiblity">
            Employee Responsiblity
          </InputLabel>
          <Select
            labelId="employeeResponsiblity"
            id="employeeResponsiblity"
            value={values.employeeResponsiblity}
            label="Employee Responsiblity"
            onChange={handleChange("employeeResponsiblity")}
          >
            {Responsiblitites.map((role) => {
              return <MenuItem value={role}>{role}</MenuItem>;
            })}
          </Select>

          <InputLabel id="projectStatus">Project Status</InputLabel>
          <Select
            labelId="projectStatus"
            id="projectStatus"
            value={values.projectStatus}
            label="Project Status"
            onChange={handleChange("projectStatus")}
          >
            {projectStatus.map((status) => {
              return <MenuItem value={status}>{status}</MenuItem>;
            })}
          </Select>
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button color="primary" variant="contained" onClick={back}>
              Back
            </Button>
            <Button color="primary" variant="contained" onClick={continues}>
              Continue
            </Button>
          </div>
        </form>
      </Box> */}
    </div>
  );
};

export default AddEmployeeProfessional;
