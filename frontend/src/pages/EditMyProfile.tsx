import React from "react";
import AddEmployeeForm from "../components/AddEmployeeForm";

const EditMyProfile = () => {
  const [myProfileUpdate, setMyProfileUpdate] = React.useState<boolean>(true);
  return (
    <div>
      <AddEmployeeForm
        myProfileUpdate={myProfileUpdate}
        setMyProfileUpdate={setMyProfileUpdate}
      />
    </div>
  );
};

export default EditMyProfile;
