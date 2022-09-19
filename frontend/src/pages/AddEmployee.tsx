import React from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

// name
// client
// project start
// project end
// PM

const AddEmployee = () => {
  return (
    <div>
      <Box>
        <Typography>Add New Employee</Typography>
        <form>
          <TextField fullWidth id="" />
        </form>
      </Box>
    </div>
  );
};

export default AddEmployee;
