import React from "react";
import { Button, Box, Typography, TextField } from "@mui/material";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = React.useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("clicked");
    console.log({ email });
    postData();
  };

  const postData = async () => {
    if (email) {
      const res = await axios.post(
        "http://localhost:5000/api/v1/forgetPassword",
        {
          email: email,
        }
      );
      const data = await res.data;
      console.log(data);
    }
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
          Reset Password
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ForgetPassword;
