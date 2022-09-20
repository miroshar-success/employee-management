import React from "react";
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

function App() {
  const [isprofiles, setIsProfiles] = React.useState<any>(true);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/myprofile" element={<MyProfile />} />
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
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
