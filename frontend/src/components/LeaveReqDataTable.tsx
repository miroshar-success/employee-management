import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const LeaveReqDataTable = ({ allLeaveRequest }: any) => {
  const [leaveData, setLeaveData] = React.useState<any>([]);

  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      const data = allLeaveRequest.filter(
        (data: any) => data.employee._id === userData._id
      );
      setLeaveData(data);
    }
  }, [allLeaveRequest]);

  console.log({ leaveData });

  return (
    <Box sx={{ m: 2 }}>
      <Box
        sx={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
          m: 2,
        }}
      >
        <Typography variant="h4">Leave Request Status</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "gray" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Leave Duration</TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Leave Type
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Leave Reason
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Leave Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveData.map((row: any) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <>
                  <TableCell component="th" scope="row">
                    {row.leaveRequestDate[0].slice(0, 10)} TO{" "}
                    {row.leaveRequestDate[1].slice(0, 10)}
                  </TableCell>

                  <TableCell align="center">{row.leaveType}</TableCell>

                  <TableCell align="center">{row.leaveReason}</TableCell>
                  <TableCell
                    align="center"
                    style={{
                      backgroundColor:
                        row.leaveStatus === "rejected" ? "red" : "inherit",
                      color:
                        row.employeeStatus === "rejected" ? "white" : "inherit",
                      borderRadius: "5px",
                    }}
                  >
                    {row.leaveStatus}
                  </TableCell>
                </>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeaveReqDataTable;
