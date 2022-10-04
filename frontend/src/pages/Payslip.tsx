import React, { useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import PdfDownloader from "../components/PdfDownloader";

const Payslip = () => {
  const [payslipData, setPayslipData] = React.useState<any>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user") || "[]");
    setPayslipData(data);
  }, []);
  console.log({ payslipData });

  const { name, email, salary, role, joingDate } = payslipData;
  //const date: any = new Date(joingDate);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ width: "600px", height: "400px" }}>
          <div id="payslipId">
            <CardContent>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                Pay Slip
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "2px solid",
                  padding: "10px",
                  marginTop: "60px",
                }}
              >
                <div style={{ lineHeight: 2 }}>
                  <h3>Month: October</h3>
                  <h3>Employee Id: #D31232424</h3>
                  <h3>Name: {name}</h3>
                  <h3>Email: {email}</h3>
                  <h3>Position: {role}</h3>
                  <h3>Salary: {salary}</h3>
                  <h3>Joinning Date: {joingDate}</h3>
                </div>
                <div style={{ lineHeight: 2 }}>
                  <h3>Organazation Name: ABCDE</h3>
                  <h3>Address: ######</h3>
                </div>
              </div>
            </CardContent>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              marginRight: "20px",
            }}
          >
            <PdfDownloader
              downloadFileName="PayslipPdf"
              rootElementId="payslipId"
            />
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default Payslip;
