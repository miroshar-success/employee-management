import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DatePick from "./DatePick";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

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
          height: { md: 850, xs: 730, sm: 450 },
          width: { md: 650, xs: 320, sm: 400 },
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
            Add Employee's Personal Information
          </h2>
          <TextField
            id="name"
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />

          <TextField
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            value={values.password}
            onChange={handleChange("password")}
            margin="normal"
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
            margin="normal"
          />
          <TextField
            id="address"
            name="address"
            label="Address"
            value={values.address}
            onChange={handleChange("address")}
            margin="normal"
          />
          <TextField
            id="salary"
            name="salary"
            label="Salary"
            value={values.salary}
            onChange={handleChange("salary")}
            margin="normal"
          />
          {/* <TextField
            id="department"
            name="department"
            label="Department"
            value={values.department}
            onChange={handleChange("department")}
            margin="normal"
          /> */}
          <InputLabel id="department">Department</InputLabel>
          <Select
            labelId="department"
            id="department"
            value={values.department}
            label="department"
            onChange={handleChange("department")}
          >
            <MenuItem value="hr">HR</MenuItem>
            <MenuItem value="engineer">Engineer</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
          <br />
          <input
            accept="image/*"
            name="image"
            id="contained-button-file"
            type="file"
            style={{ padding: 10 }}
          />

          <br />
          <DatePick
            onChange={handleChange("joiningDate")}
            joiningDateInfo={joiningDateInfo}
            setJoiningDateInfo={setJoiningDateInfo}
          />
          <br />
          <br />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={continues}
          >
            Continue
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AddEmployeeInfo;
