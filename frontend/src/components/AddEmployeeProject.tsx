import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import axios from "axios";

const AddEmployeeProject = ({
  handleChange,
  values,
  continues,
  back,
  projectList,
}: any) => {
  // const projects = [
  //   {
  //     id: 1,
  //     name: "Project 1",
  //     pm: "PM 1",
  //     start: "2021-10-10",
  //     end: "2021-10-10",
  //   },
  //   {
  //     id: 2,
  //     name: "Project 2",
  //     pm: "PM 2",
  //     start: "2022-10-10",
  //     end: "2022-10-10",
  //   },
  //   {
  //     id: 3,
  //     name: "Project 3",
  //     pm: "PM 3",
  //     start: "2023-10-10",
  //     end: "2023-10-10",
  //   },
  // ];

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
            {projectList.map((project: any) => {
              return <MenuItem value={project.name}>{project.name}</MenuItem>;
            })}
          </Select>
          <InputLabel id="responsiblity">Employee Responsiblity</InputLabel>
          <Select
            labelId="responsiblity"
            id="responsiblity"
            value={values.responsiblity}
            label="responsiblity"
            onChange={handleChange("responsiblity")}
          >
            {Responsiblitites.map((role) => {
              return <MenuItem value={role}>{role}</MenuItem>;
            })}
          </Select>

          <InputLabel id="status">Project Status</InputLabel>
          <Select
            labelId="status"
            id="status"
            value={values.status}
            label="status"
            onChange={handleChange("status")}
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
