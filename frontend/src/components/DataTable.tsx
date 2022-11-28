import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import Hidden from "@mui/material/Hidden";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { isLogin, isAdmin } from "../utils/auth";
import axios from "axios";

type searchData = string | null;

const DataTable = ({
  customData,
  isprofiles,
}: {
  customData: any;
  isprofiles: any;
}) => {
  const [searchQuery, setSearchQuery] = React.useState<searchData>("");

  const navigate = useNavigate();

  const searchData = (searchQuery: string | null, customData: any) => {
    if (searchQuery) {
      return customData.filter((data: any) => {
        return isprofiles
          ? data.email.toLowerCase().includes(searchQuery.trim())
          : data.name.toLowerCase().includes(searchQuery.trim());
      });
    }
    return customData;
  };

  const filterData = searchData(searchQuery, customData);

  useEffect(() => {
    if (!isLogin() && !isAdmin()) {
      navigate("/");
    }
  });

  const handleProjectDelete = async (id: any) => {
    const removeData = await axios.delete(
      `http://localhost:5000/api/v1/projects/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (removeData.data.message) {
      alert(removeData.data.message);
      window.location.reload();
    }
  };

  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {isAdmin() && (
          <Button
            variant="contained"
            sx={{ height: 40 }}
            onClick={() => {
              isprofiles ? navigate("/addEmployee") : navigate("/addProject");
            }}
          >
            Add
          </Button>
        )}
      </Box>
      <Box
        sx={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
          m: 2,
        }}
      >
        {isprofiles ? <h1>Profiles</h1> : <h1>Projects</h1>}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {isprofiles ? (
                <>
                  <TableCell>Name</TableCell>
                  <Hidden smDown>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Role</TableCell>
                    <TableCell align="center">Employee Status</TableCell>
                  </Hidden>
                </>
              ) : (
                <>
                  <TableCell>Name</TableCell>
                  <Hidden smDown>
                    <TableCell align="right">Client Name</TableCell>
                    <TableCell align="center">Status</TableCell>
                    <TableCell align="center">PM</TableCell>
                    <TableCell align="center">Deadline</TableCell>
                  </Hidden>
                </>
              )}
              {isprofiles && <TableCell align="right">Action</TableCell>}
              {!isprofiles && isAdmin() && (
                <TableCell align="right">Action</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {(searchQuery ? filterData : customData).map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {isprofiles ? (
                  <>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <Hidden smDown>
                      <TableCell align="center">{row.email}</TableCell>

                      <TableCell align="center">{row.role}</TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor:
                            row.employeeStatus === "deactive"
                              ? "red"
                              : "inherit",
                          color:
                            row.employeeStatus === "deactive"
                              ? "white"
                              : "inherit",
                          borderRadius: "5px",
                        }}
                      >
                        {row.employeeStatus}
                      </TableCell>
                    </Hidden>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => navigate(`/myprofile/${row._id}`)}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <Hidden smDown>
                      <TableCell align="right">{row.client}</TableCell>
                      <TableCell
                        align="center"
                        style={{
                          backgroundColor:
                            row.status === "inactive" ? "red" : "inherit",
                          color:
                            row.status === "inactive" ? "white" : "inherit",
                          borderRadius: "5px",
                        }}
                      >
                        {row.status}
                      </TableCell>
                      <TableCell align="center">{row.pm}</TableCell>
                      <TableCell align="center">
                        {row.duration[0]}-{row.duration[1]}
                      </TableCell>
                    </Hidden>
                    {isAdmin() && (
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          sx={{ m: 1 }}
                          onClick={() => navigate(`/addProject/${row._id}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => handleProjectDelete(row._id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    )}
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
