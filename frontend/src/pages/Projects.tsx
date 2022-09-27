import React, { useEffect } from "react";
import DataTable from "../components/DataTable";
import { isLogin } from "../utils/auth";
import useFetch from "../customHooks/useFetch";

import { useNavigate } from "react-router-dom";

const Projects = ({
  isprofiles,
  setIsProfiles,
}: {
  isprofiles: any;
  setIsProfiles: any;
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin()) {
      navigate("/");
    }
  });

  const fecthProjects = useFetch("http://localhost:5000/api/v1/projects");
  const { response, error, isLoading } = fecthProjects;
  if (error) {
    console.log(error);
  }
  const customData = response;
  console.log("customData", customData);
  // const customData = [
  //   {
  //     id: 1,
  //     name: "project1",
  //     client_name: "client1",
  //     pm: "pm1",
  //     status: "running",
  //     deadline: "2023-10-10",
  //   },
  //   {
  //     id: 2,
  //     name: "project2",
  //     client_name: "client2",
  //     pm: "pm2",
  //     status: "delivered",
  //     deadline: "2021-10-10",
  //   },
  // ];
  setIsProfiles(false);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <DataTable customData={customData} isprofiles={isprofiles} />
      )}
    </div>
  );
};

export default Projects;
