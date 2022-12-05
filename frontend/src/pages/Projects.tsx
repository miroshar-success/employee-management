import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DataTable from "../components/DataTable";
import { isLogin } from "../utils/auth";
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

  useEffect(() => {
    if (!isLogin()) {
      navigate("/");
    }
    getProjectData();
  }, [currentPage]);

  const getProjectData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `http://localhost:5000/api/v1/projects?currentPage=${currentPage}&currentLimit=${currentLimit}`
      );
      const json = await res.data;
      const { projects, pages, limit } = json;

      setResponse(projects);
      setCurrentPages(pages);
      setCurrentLimit(limit);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  if (error) {
    console.log(error);
  }

  const customData = response;

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
