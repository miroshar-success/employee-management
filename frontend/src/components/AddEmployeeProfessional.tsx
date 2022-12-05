import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

const AddEmployeeProfessional = ({
  handleChange,
  values,
  continues,
  back,
  employeeDetails = null,
}: any) => {
  if (employeeDetails) {
    values.bonus = employeeDetails.bonus;
    values.totalLeave = employeeDetails.totalLeave;
  }

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

          <TextField
            id="totalLeave"
            name="totalLeave"
            label="Total Leave"
            value={values.totalLeave}
            onChange={handleChange("totalLeave")}
            margin="normal"
          />

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
