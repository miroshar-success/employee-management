import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Hidden from "@mui/material/Hidden";
import SearchBar from "./SearchBar";

const customData = [
  {
    name: "User",
    email: "user@gmail.com",
    role: "user",
    status: "active",
  },
  {
    name: "admin",
    email: "admin@gmail.com",
    role: "admin",
    status: "deactive",
  },
];

type searchData = string | null;

const DataTable = () => {
  const [searchQuery, setSearchQuery] = React.useState<searchData>("");
  // console.log("s", searchQuery);

  const searchData = (searchQuery: string | null, customData: any) => {
    if (searchQuery) {
      return customData.filter((data: any) => {
        console.log(data.email);
        return data.email.toLowerCase().includes(searchQuery.trim());
      });
    }
    return customData;
  };

  const filterData = searchData(searchQuery, customData);
  // console.log("fi", searchData(searchQuery, customData));
  // console.log("f", filterData);

  return (
    <Box sx={{ m: 2 }}>
      <Box>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "bold",
          m: 2,
        }}
      >
        <h2>Projects</h2>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <Hidden smDown>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Role</TableCell>
              </Hidden>
              <TableCell align="right">Deatils</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(searchQuery ? filterData : customData).map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <Hidden smDown>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                </Hidden>
                <TableCell align="right">actions</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
