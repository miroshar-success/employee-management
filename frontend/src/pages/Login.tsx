import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import axios from "axios";
//import usePost from "../customHooks/usePost";

const Login = () => {
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    fetchData();
  };

  const fetchData = () => {
    axios
      .post("http://localhost:5000/api/v1/login", {
        email: email,
        password: password,
      })
      .then((res: any) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.employeeExists));
      });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: 400,
          width: { md: 400, xs: 300 },
          backgroundColor: "darkslategray",
          color: "white",
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Box component="form" onSubmit={onSubmit} noValidate sx={{ m: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e: any) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e: any) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
