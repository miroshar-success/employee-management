import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const AddEmployeeProject = ({ handleChange, values, continues, back }: any) => {
  const projects = [
    {
      id: 1,
      name: "Project 1",
      pm: "PM 1",
      start: "2021-10-10",
      end: "2021-10-10",
    },
    {
      id: 2,
      name: "Project 2",
      pm: "PM 2",
      start: "2022-10-10",
      end: "2022-10-10",
    },
    {
      id: 3,
      name: "Project 3",
      pm: "PM 3",
      start: "2023-10-10",
      end: "2023-10-10",
    },
  ];

  const Responsiblitites = ["Frontend", "Backend", "Fullstack", "DevOps"];

  const projectStatus = ["Active", "Inactive"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
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
      </Box>
    </div>
  );
};

export default AddEmployeeProject;
