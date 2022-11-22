import axios from "axios";
import React, { useEffect } from "react";
import LeaveReqDataTable from "../components/LeaveReqDataTable";

const LeaveReqStatus = () => {
  const [allLeaveRequest, setAllLeaveRequest] = React.useState<any>([]);

  useEffect(() => {
    fetchAllLeaveRequest();
  }, []);
  console.log({ allLeaveRequest });
  const fetchAllLeaveRequest = async () => {
    try {
      const leaveData = await axios.get(
        "http://localhost:5000/api/v1/leaveRequest",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setAllLeaveRequest(leaveData?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <LeaveReqDataTable allLeaveRequest={allLeaveRequest} />
    </div>
  );
};

export default LeaveReqStatus;
