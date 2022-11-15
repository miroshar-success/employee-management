import React, { useEffect } from "react";
import DataTable from "../components/DataTable";
import { isLogin } from "../utils/auth";
import useFetch from "../customHooks/useFetch";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Pagination";

const Projects = ({
  isprofiles,
  setIsProfiles,
}: {
  isprofiles: any;
  setIsProfiles: any;
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [response, setResponse] = React.useState([]);
  const [currentPage, setCurrentPages] = React.useState(1);
  const [currentLimit, setCurrentLimit] = React.useState(3);
  console.log("currentPage", typeof currentPage);
  useEffect(() => {
    if (!isLogin()) {
      navigate("/");
    }
    getProjectData();
  }, [currentPage]);

  const getProjectData = async () => {
    console.log("getProjectData");
    try {
      setLoading(true);
      const res = await axios(
        `http://localhost:5000/api/v1/projects?currentPage=${currentPage}&currentLimit=${currentLimit}`
      );
      const json = await res.data;
      const { projects, pages, limit } = json;
      console.log({ projects, pages, limit });
      setResponse(projects);
      setCurrentPages(pages);
      setCurrentLimit(limit);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };
  // getProjectData();
  //const fecthProjects = useFetch("http://localhost:5000/api/v1/projects");
  //const { response, error, isLoading } = fecthProjects;
  if (error) {
    console.log(error);
  }
  // console.log("response", fecthProjects);
  // const { projects, pages, limit }: any = response;

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
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <DataTable customData={customData} isprofiles={isprofiles} />
          <Pagination
            setCurrentPages={setCurrentPages}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default Projects;
