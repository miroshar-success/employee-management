import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NoticeBoard = () => {
  const navigate = useNavigate();
  const [notice, setNotice] = React.useState({
    email: "",
    title: "",
    noticeText: "",
    noticeFile: "",
  });

  const uploadImgHandler = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/v1/noticeFileUploads",
        formData,
        config
      );
      setNotice({ ...notice, noticeFile: data });
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/notice",
        {
          email: notice.email,
          noticeTitle: notice.title,
          noticeBody: notice.noticeText,
          noticeFile: notice.noticeFile,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      navigate("/showNoticeBoard");
    } catch (error) {
      console.error(error);
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
          height: { md: 600, xs: 430, sm: 450 },
          width: { md: 600, xs: 320, sm: 400 },
          bgcolor: "#A5C9CA",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 2,
          boxShadow: 3,
          transform: "translate(-50, -50)",
        }}
      >
        <Box sx={{ textAlign: "center", color: "#00005C", marginBottom: 2 }}>
          <h1>Notice</h1>
        </Box>
        <form onSubmit={submitHandler}>
          <TextField
            fullWidth
            id="outlined"
            label="Receiver Email Address"
            name="email"
            defaultValue={notice.email}
            onChange={(e) => setNotice({ ...notice, email: e.target.value })}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="outlined"
            label="Notice Title"
            name="title"
            defaultValue={notice.title}
            onChange={(e) => setNotice({ ...notice, title: e.target.value })}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Notice"
            name="noticeText"
            multiline
            rows={4}
            defaultValue={notice.noticeText}
            onChange={(e) =>
              setNotice({ ...notice, noticeText: e.target.value })
            }
          />
          <input
            accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
            name="file"
            id="contained-button-file"
            type="file"
            style={{ padding: 10 }}
            onChange={uploadImgHandler}
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default NoticeBoard;
