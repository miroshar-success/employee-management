import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const SearchBar = ({ setSearchQuery }: any) => {
  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="Search By Email"
          variant="outlined"
          size="medium"
        />

        <IconButton type="submit" aria-label="search">
          <Box
            style={{ fill: "blue" }}
            sx={{
              height: 20,
              width: 60,
              backgroundColor: "#30475E",
              p: 2,
              borderRadius: 5,
              marginTop: -1,
            }}
          >
            <p style={{ color: "white" }}> Search</p>
          </Box>
        </IconButton>
      </form>
    </div>
  );
};

export default SearchBar;
