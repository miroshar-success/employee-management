import React, { useEffect } from "react";
import { isLogin } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { Box, Card, Typography } from "@mui/material";

const Homepage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  useEffect(() => {
    if (!isLogin()) {
      navigate("/");
    }
    const employeeHome: any = JSON.parse(localStorage.getItem("user") || "{}");
    setUserName(employeeHome.name);
  });
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            height: 600,
            width: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: 2,
            bgcolor: "#1c0f67",
            color: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" component="div" sx={{ margin: "auto" }}>
            Welcome {userName}
          </Typography>
        </Card>
      </Box>
    </div>
  );
};

export default Homepage;
