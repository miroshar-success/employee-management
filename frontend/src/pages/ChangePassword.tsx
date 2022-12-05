import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const navigate = useNavigate();

  const decoded = JSON.parse(localStorage.getItem("decoded") || "{}");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      decoded.email ? forgetPassword() : changePassword();
    } else {
      alert("Password does not match");
    }
  };

  const changePassword = async () => {
    const res = await axios.put(
      "http://localhost:5000/api/v1/profile/changePassword",
      { password: newPassword },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.data;

    alert(data.message);
    navigate("/myprofile");
  };

  const forgetPassword = async () => {
    const res = await axios.put(
      "http://localhost:5000/api/v1/resetPassword/newPassword",
      {
        password: newPassword,
        id: decoded._id,
        email: decoded.email,
      }
    );
    const data = res.data;
    console.log("data", data);
    navigate("/");
    localStorage.removeItem("decoded");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { md: 600, xs: 320, sm: 400 },
          bgcolor: "#A5C9CA",
          p: 2,
          borderRadius: 2,
        }}
      >
        <h1>Change Password</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="New Password"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            id="confirm-password"
            name="confirm-password"
            label="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default ChangePassword;
