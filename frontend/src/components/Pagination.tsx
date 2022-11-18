import { Button, Box } from "@mui/material";

const Pagination = ({ setCurrentPages, currentPage }: any) => {
  return (
    <div style={{ width: "100%", padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "95%",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Button
          variant="contained"
          onClick={
            currentPage > 1
              ? () => setCurrentPages(parseInt(currentPage) - parseInt("1"))
              : () => setCurrentPages(parseInt(currentPage))
          }
        >
          Previous
        </Button>
        <Box
          sx={{ bgcolor: "green", padding: 2, color: "white", borderRadius: 5 }}
        >
          Page No: {currentPage}
        </Box>
        <Button
          variant="contained"
          onClick={() => setCurrentPages(parseInt(currentPage) + parseInt("1"))}
        >
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Pagination;
