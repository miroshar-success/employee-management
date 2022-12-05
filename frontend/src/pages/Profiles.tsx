import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DataTable from "../components/DataTable";
import { isAdmin } from "../utils/auth";

const Profiles = ({
  isprofiles,
  setIsProfiles,
}: {
  isprofiles: any;
  setIsProfiles: any;
}) => {
  const navigate = useNavigate();
  const [allProfiles, setAllProfiles] = React.useState<any>([]);

  useEffect(() => {
    if (!isAdmin()) {
      navigate("/");
    }
    fecthProfiles();
  }, []);

  const fecthProfiles = async () => {
    try {
      const response = await axios("http://localhost:5000/api/v1/employee", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setAllProfiles(response.data);
    } catch (error: any) {
      alert(error.response.data);
    }
  };

  setIsProfiles(true);
  return (
    <div>
      <DataTable customData={allProfiles} isprofiles={isprofiles} />
    </div>
  );
};

export default Profiles;
