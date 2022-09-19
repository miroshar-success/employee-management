import React from "react";
import DataTable from "../components/DataTable";

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
  setIsProfiles(true);
  return (
    <div>
      <DataTable customData={customData} isprofiles={isprofiles} />
    </div>
  );
};

export default Profiles;
