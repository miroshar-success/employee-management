import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgetPasswordVerify = () => {
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
      const { decoded } = userData.data;
      localStorage.setItem("decoded", JSON.stringify(decoded));

      setLoading(false);
      navigate("/changepassword");
    }
  };

  return <>{loading ? <h1>Wait. verifying your account...</h1> : null}</>;
};

export default ForgetPasswordVerify;
