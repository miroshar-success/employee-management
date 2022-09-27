import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", padding: 2 }}>
          My Profile
        </Typography>
        <Button
          color="primary"
          variant="contained"
          sx={{ height: "3rem", p: 2, mt: 2, color: "white" }}
          onClick={() => navigate("/changePassword")}
        >
          Change Password
        </Button>
      </Box>
      <div>
        <Box>
          <Box sx={{ display: { md: "flex" } }}>
            <Card
              sx={{
                padding: 5,
                margin: 2,
                width: { md: "40rem" },
                boxShadow: "md",
                translate: "translateY(50%)",
                bgcolor: "#526b59",
                color: "white",
              }}
              className="animate__animated animate__fadeInDownBig"
            >
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  pb: 5,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Personal Information
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p>Name:{}</p>
                  <p>Role:{}</p>
                  <p>Email:{}</p>
                  <p>Phone:{}</p>
                </div>
                <div>
                  <p>Address:{}</p>
                  <p>Salary:{}</p>
                  <p>Joinning Date:{}</p>
                </div>
              </Box>
            </Card>
            <Card
              sx={{
                padding: 5,
                margin: 2,
                width: { md: "40rem" },
                boxShadow: "md",
                translate: "translateY(50%)",
                bgcolor: "#bf6c5e",
                color: "#0d0201",
              }}
              className="animate__animated animate__lightSpeedInRight"
            >
              <div>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", pb: 5, fontWeight: "bold" }}
                >
                  Project Information
                </Typography>
                <p>Project Name:{}</p>
                <p>Resposiblity:{}</p>
                <p>Staus:{}</p>
              </div>
            </Card>
          </Box>
          <Card
            sx={{
              padding: 5,
              margin: 2,
              width: { md: "40rem" },
              boxShadow: "md",
              translate: "translateY(50%)",
              bgcolor: "#11465c",
              color: "white",
            }}
            className="animate__animated animate__slideInUp"
          >
            <div>
              <Typography
                variant="h6"
                sx={{ textAlign: "center", pb: 5, fontWeight: "bold" }}
              >
                Performance Information
              </Typography>
              <p>Bonus:{}</p>
              <p>Total Leaves:{}</p>
            </div>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default MyProfile;
