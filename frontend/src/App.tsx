import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import MyProfile from "./pages/MyProfile";
import MyProjects from "./pages/MyProjects";
import AddProject from "./pages/AddProject";
import AddEmployee from "./pages/AddEmployee";
import NotFound from "./pages/NotFound";
import ChangePassword from "./pages/ChangePassword";
import AddEmployeeForm from "./components/AddEmployeeForm";
import Payslip from "./pages/Payslip";
import EditMyProfile from "./pages/EditMyProfile";
import ForgetPasswordVerify from "./pages/ForgetPasswordVerify";
import ForgetPassword from "./pages/ForgetPassword";
import { io } from "socket.io-client";
import AllLeaveRequest from "./pages/AllLeaveRequest";
import ClaimLeaveRequest from "./pages/ClaimLeaveRequest";
import LeaveReqStatus from "./pages/LeaveReqStatus";
import NoticeBoard from "./pages/NoticeBoard";
import ShowNotice from "./pages/ShowNotice";

function App() {
  const [isprofiles, setIsProfiles] = React.useState<any>(true);
  const [socket, setSocket] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    const userData: any = localStorage.getItem("user");
    setUser(JSON.parse(userData)?.name);

    if (user) {
      console.log("userId", user, socket);
      socket?.emit("newUser", user);
    }
  }, [user, socket]);

  return (
    <BrowserRouter>
      <NavBar socket={socket} user={user} />
      <Routes>
        <Route path="/" element={<Login socket={socket} user={user} />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myprofile/:id" element={<MyProfile />} />
        <Route path="/myprojects" element={<MyProjects />} />
        <Route
          path="/projects"
          element={
            <Projects isprofiles={isprofiles} setIsProfiles={setIsProfiles} />
          }
        />
        <Route
          path="/profiles"
          element={
            <Profiles isprofiles={isprofiles} setIsProfiles={setIsProfiles} />
          }
        />
        <Route path="/addProject" element={<AddProject />} />
        <Route path="/addProject/:id" element={<AddProject />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route
          path="/addEmployee/:id"
          element={<AddEmployeeForm socket={socket} />}
        />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/profileEdit" element={<EditMyProfile />} />
        <Route path="/payslip" element={<Payslip />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/allLeaveRequest" element={<AllLeaveRequest />} />
        <Route path="/leaveRequestStatus" element={<LeaveReqStatus />} />
        <Route path="/claimLeaveRequest/:id" element={<ClaimLeaveRequest />} />
        <Route path="/noticeboard" element={<NoticeBoard />} />
        <Route path="/showNoticeBoard" element={<ShowNotice />} />
        <Route
          path="/resetPassword/:id/:token"
          element={<ForgetPasswordVerify />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
