import React, { useEffect } from "react";
import DataTable from "../components/DataTable";
import { isAdmin } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const customData = [
  {
    id: 1,
    name: "User",
    email: "user@gmail.com",
    role: "user",
    status: "active",
  },
  {
    id: 2,
    name: "admin",
    email: "admin@gmail.com",
    role: "admin",
    status: "deactive",
  },
];

const Profiles = ({
  isprofiles,
  setIsProfiles,
}: {
  isprofiles: any;
  setIsProfiles: any;
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    setIsProfiles(true);
    if (!isAdmin()) {
      navigate("/");
    }
  });

  return (
    <div>
      <DataTable customData={customData} isprofiles={isprofiles} />
    </div>
  );
};

export default Profiles;
