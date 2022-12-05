import React, { useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const AllLeaveRequest = () => {
  const [allLeaveRequest, setAllLeaveRequest] = React.useState<any>([]);

  const user: any = localStorage.getItem("user");
  const userData = JSON.parse(user)._id;

  useEffect(() => {
    fetchAllLeaveRequest();
  }, []);

  const fetchAllLeaveRequest = async () => {
    try {
      const leaveData = await axios.get(
        "http://localhost:5000/api/v1/leaveRequest",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAllLeaveRequest(leaveData?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postRequestResolve = async (value: string, id: string) => {
    try {
      const resolvedData = await axios.put(
        `http://localhost:5000/api/v1/leaveRequest/resolve/${id}`,
        {
          leaveStatus: value,
          resolvedBy: userData,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert(`Leave Request ${value}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

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
              <TableCell align="center" sx={{ color: "white" }}>
                Name
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Designation
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Email
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Leave Duration
              </TableCell>
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
            {allLeaveRequest.map((row: any) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <>
                  <TableCell align="center">{row.employee.name}</TableCell>
                  <TableCell align="center">
                    {row.employee.designation}
                  </TableCell>
                  <TableCell align="center">{row.employee.email}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.leaveRequestDate[0].slice(0, 10)} TO{" "}
                    {row.leaveRequestDate[1].slice(0, 10)}
                  </TableCell>

                  <TableCell align="center">{row.leaveType}</TableCell>

                  <TableCell align="center">{row.leaveReason}</TableCell>
                  {row.leaveStatus === "Pending" &&
                  row.employee._id !== userData ? (
                    <>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="success"
                          sx={{ m: 1 }}
                          onClick={() =>
                            postRequestResolve("Approved", row._id)
                          }
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={() =>
                            postRequestResolve("Rejected", row._id)
                          }
                        >
                          Reject
                        </Button>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor:
                            row.leaveStatus === "Rejected" ? "red" : "green",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        {row.leaveStatus}
                      </TableCell>
                    </>
                  )}
                </>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllLeaveRequest;
