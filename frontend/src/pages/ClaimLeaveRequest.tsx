import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import DateRangePick from "../components/DateRangePick";
import { DateRange } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Dayjs } from "dayjs";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ClaimLeaveRequest = () => {
  const params = useParams();
  const employeeId = params.id;
  const navigate = useNavigate();

  const [leaveDurationValue, setLeaveDurationValue] = React.useState<
    DateRange<Dayjs>
  >([null, null]);

  const [leaveRequest, setLeaveRequest] = React.useState<any>({
    leaveType: "",
    leaveReason: "",
    leaveDuration: [] || leaveDurationValue,
  });

  const handleLeaveRequest = (e: any) => {
    leaveRequest.leaveDuration = leaveDurationValue;
    setLeaveRequest({ ...leaveRequest, [e.target.name]: e.target.value });
  };

  const postLeaveRequest = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/v1/leaveRequest",
        {
          leaveRequestDate: leaveRequest.leaveDuration,
          leaveType: leaveRequest.leaveType,
          leaveReason: leaveRequest.leaveReason,
          employee: employeeId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Leave Request Submitted");
      navigate("/leaveRequestStatus");
    } catch (error) {
      console.dir(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
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
        }}
        className="project-form"
      >
        <Box sx={{ textAlign: "center", color: "#00005C" }}>
          <h1>Claim Your Leave</h1>
        </Box>
        <br />
        <br />
        <form onSubmit={(e) => postLeaveRequest(e)}>
          <DateRangePick
            id="duration"
            name="duration"
            value={leaveDurationValue}
            ProjectDurationValue={leaveDurationValue}
            setProjectDurationValue={setLeaveDurationValue}
          />
          <br />
          <InputLabel id="leaveType">Leave Type</InputLabel>
          <Select
            labelId="leaveType"
            id="leaveType"
            name="leaveType"
            label="leaveType"
            value={leaveRequest.leaveType}
            onChange={handleLeaveRequest}
            fullWidth
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="sick">Sick leave</MenuItem>
            <MenuItem value="casualLeave">Casual leave</MenuItem>
            <MenuItem value="maternityLeave">Maternity leave</MenuItem>
            <MenuItem value="paterityLeave">Paternity leave</MenuItem>
            <MenuItem value="annualLeave">Annual leave</MenuItem>
            <MenuItem value="otherLeave">Other leave</MenuItem>
          </Select>
          <TextField
            fullWidth
            id="leaveReason"
            name="leaveReason"
            label="Leave Reason"
            value={leaveRequest.leaveReason}
            onChange={handleLeaveRequest}
            sx={{ marginBottom: 2 }}
          />
          <br />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default ClaimLeaveRequest;
