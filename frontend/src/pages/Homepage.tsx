import React, { useEffect } from "react";
import { isLogin } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin()) {
      navigate("/");
    }
  });
  return (
    <div>
      <h1>Welcome to our website</h1>
    </div>
  );
};

export default Homepage;
