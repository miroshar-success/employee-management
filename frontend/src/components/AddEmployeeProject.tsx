import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const AddEmployeeProject = ({
  handleChange,
  values,
  continues,
  back,
  projectList,
  employeeDetails = null,
}: any) => {
  const Responsiblitites = ["Frontend", "Backend", "Fullstack", "DevOps"];

  const projectStatus = ["Active", "Inactive"];

  if (employeeDetails) {
    values.projectName = employeeDetails.projectName;
    values.responsibility = employeeDetails.responsibility;
    values.status = employeeDetails.status;
  }
  console.log("employeeDetails3", employeeDetails);
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
          <InputLabel id="projectName">projects</InputLabel>
          <Select
            labelId="projectName"
            id="projectName"
            value={values.projectName}
            label="Project Name"
            onChange={handleChange("projectName")}
          >
            {projectList.map((project: any) => {
              return <MenuItem value={project.name}>{project.name}</MenuItem>;
            })}
          </Select>
          {/* {employeeDetails ? <p>{values.projectName}</p> : null} */}
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
          {/* {employeeDetails ? <p>{employeeDetails.responsiblity}</p> : null} */}
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
          {/* {employeeDetails ? <p>{employeeDetails.status}</p> : null} */}
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
