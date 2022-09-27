import React from "react";
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
        console.log(data.email);
        return isprofiles
          ? data.email.toLowerCase().includes(searchQuery.trim())
          : data.name.toLowerCase().includes(searchQuery.trim());
      });
    }
    return customData;
  };

  const filterData = searchData(searchQuery, customData);
  // console.log("fi", searchData(searchQuery, customData));
  // console.log("f", filterData);

  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Button
          variant="contained"
          sx={{ height: 40 }}
          onClick={() => {
            isprofiles ? navigate("/addEmployee") : navigate("/addProject");
          }}
        >
          Add
        </Button>
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
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Role</TableCell>
                  </Hidden>
                </>
              ) : (
                <>
                  <TableCell>Name</TableCell>
                  <Hidden smDown>
                    <TableCell align="right">Client Name</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">PM</TableCell>
                    <TableCell align="right">Deadline</TableCell>
                  </Hidden>
                </>
              )}
              <TableCell align="right">Actions</TableCell>
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
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.role}</TableCell>
                    </Hidden>
                  </>
                ) : (
                  <>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <Hidden smDown>
                      <TableCell align="right">{row.client_name}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.pm}</TableCell>
                      <TableCell align="right">{row.deadline}</TableCell>
                    </Hidden>
                  </>
                )}
                {isprofiles ? (
                  <TableCell align="right">Details</TableCell>
                ) : (
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      sx={{ m: 1 }}
                      onClick={() => navigate("/addProject/:id")}
                    >
                      Edit
                    </Button>
                    <Button variant="contained">Delete</Button>
                  </TableCell>
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
