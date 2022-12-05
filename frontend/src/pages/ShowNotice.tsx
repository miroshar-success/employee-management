import React, { useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";

const ShowNotice = () => {
  const [showNotice, setShowNotice] = React.useState([]);

  useEffect(() => {
    getNotice();
  }, []);

  const getNotice = async () => {
    try {
      axios.get("http://localhost:5000/api/v1/notice").then((res) => {
        const data = res.data;
        const user: any = JSON.parse(localStorage.getItem("user") || "{}");

        const myNotice = data.filter((notice: any) => {
          return notice.email === "" || notice.email === user.email;
        });
        setShowNotice(myNotice);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const sortedData = showNotice.sort((a: any, b: any) => {
    return +new Date(b.noticeDate) - +new Date(a.noticeDate);
  });
  return (
    <div>
      {sortedData.map((notice: any) => {
        return (
          <Box
            sx={{
              maxHeight: "10rem",
              bgcolor: "#03fca9",
              textAlign: "center",
              borderRadius: 2,
              m: 2,
              p: 2,
              color: "black",
              borderStyle: "solid",
              borderColor: "#c5ded7",
              maxWidth: "50rem",
              marginLeft: "30rem",
            }}
          >
            <Box>
              <h3>Subject: {notice.noticeTitle}</h3>
              <p>{notice.noticeBody}</p>
              <p>{notice.noticeFile}</p>
              <br />
              <hr />
              <br />
              <b>Date: {notice.noticeDate.slice(0, 10)}</b>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

export default ShowNotice;
