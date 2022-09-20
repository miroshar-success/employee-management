import React from "react";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DatePick from "./DatePick";
import { Box } from "@mui/system";

const AddEmployeeInfo = ({
  handleChange,
  values,
  continues,
  joiningDateInfo,
  setJoiningDateInfo,
}: any) => {
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
          m: 2,
        }}
      >
        <form style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleChange("firstName")}
          />
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleChange("lastName")}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            value={values.password}
            onChange={handleChange("password")}
          />
          <InputLabel id="role"> Role</InputLabel>
          <Select
            labelId="role"
            id="role"
            value={values.role}
            label="role"
            onChange={handleChange("role")}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="employee">Employee</MenuItem>
          </Select>
          <TextField
            id="phone"
            name="phone"
            label="Phone"
            value={values.phone}
            onChange={handleChange("phone")}
          />
          <TextField
            id="address"
            name="address"
            label="Address"
            value={values.address}
            onChange={handleChange("address")}
          />
          <TextField
            id="salary"
            name="salary"
            label="Salary"
            value={values.salary}
            onChange={handleChange("salary")}
          />
          <TextField
            id="department"
            name="department"
            label="Department"
            value={values.department}
            onChange={handleChange("department")}
          />
          <DatePick
            onChange={handleChange("joiningDate")}
            joiningDateInfo={joiningDateInfo}
            setJoiningDateInfo={setJoiningDateInfo}
          />
        </form>
      </Box>
    </div>
  );
};

export default AddEmployeeInfo;
