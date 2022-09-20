import React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const DateRangePick = ({
  ProjectDurationValue,
  setProjectDurationValue,
}: any) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "Start Date", end: "End Date" }}
    >
      <DateRangePicker
        value={ProjectDurationValue}
        onChange={(newValue) => {
          setProjectDurationValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />

      {/* {value[0] && value[1] && (
        <Box sx={{ mt: 2 }}>
          {`Selected date range: ${value[0].format("LL")} - ${value[1].format(
            "LL"
          )}`}
        </Box>
      )} */}
    </LocalizationProvider>
  );
};

export default DateRangePick;
