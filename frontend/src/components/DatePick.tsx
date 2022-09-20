import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

const DatePick = ({
  values,
  onChange,
  joiningDateInfo,
  setJoiningDateInfo,
}: any) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic example"
        value={joiningDateInfo}
        onChange={(newValue) => {
          setJoiningDateInfo(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePick;
