import React, { useEffect } from "react";
import DataTable from "../components/DataTable";
import { isAdmin } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    const response = await axios("http://localhost:5000/api/v1/employee", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log("response", response.data);
    setAllProfiles(response.data);
  };

  console.log("fecthProfilesData", allProfiles);

  setIsProfiles(true);
  return (
    <div>
      <DataTable customData={allProfiles} isprofiles={isprofiles} />
    </div>
  );
};

export default Profiles;
