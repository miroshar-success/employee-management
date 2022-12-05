import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = ({ setSearchQuery }: any, { searchQuery }: any) => {
  const search = (e: any) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="medium"
          onInput={(e: React.FormEvent<HTMLInputElement>) => {
            search(e);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
