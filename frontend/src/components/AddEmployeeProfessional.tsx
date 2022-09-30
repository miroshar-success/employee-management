import React from "react";
import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import DatePick from "./DatePick";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
// import DateRangePick from "./DateRangePick";
// import { Dayjs } from "dayjs";
// import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";

const AddEmployeeProfessional = ({
  handleChange,
  values,
  continues,
  back,
  employeeDetails = null,
}: any) => {
  // const [ProjectDurationValue, setProjectDurationValue] = React.useState<
  //   DateRange<Dayjs>
  // >([null, null]);

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
            Add Employee's Performance Information
          </h2>
          <TextField
            id="bonus"
            name="bonus"
            label="Bonus"
            value={values.bonus}
            onChange={handleChange("bonus")}
            margin="normal"
          />
          {employeeDetails && <p>{employeeDetails.professionalInfo.bonus}</p>}
          <TextField
            id="totalLeave"
            name="totalLeave"
            label="Total Leave"
            value={values.totalLeave}
            onChange={handleChange("totalLeave")}
            margin="normal"
          />
          {employeeDetails && (
            <p>{employeeDetails.professionalInfo.totalLeave}</p>
          )}
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

export default AddEmployeeProfessional;
