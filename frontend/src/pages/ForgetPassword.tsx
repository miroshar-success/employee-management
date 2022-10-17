import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    postUserData();
  }, []);

  const postUserData = async () => {
    const userData = await axios.get(
      `http://localhost:5000/api/v1/resetPassword/${id}/${token}`
    );
    if (userData.data) {
      console.log("userData", userData.data);
      setLoading(false);
      navigate("/changepassword");
    }
  };

  return <>{loading ? <h1>Wait. verifying your account...</h1> : null}</>;
};

export default ForgetPassword;
