import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AddEmployeeInfo from "./AddEmployeeInfo";
import AddEmployeeProfessional from "./AddEmployeeProfessional";
import AddEmployeeProject from "./AddEmployeeProject";
import SuccessInfo from "./SuccessInfo";

type employeeInfoType = {
  step: number;
  name: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  address: string;
  salary: string;

  designation: string;
  employeeStatus: string;
  joiningDate: string | Date | null;
  projectName: string;
  responsiblity: string;
  status: string;
  bonus: string;
  totalLeave: string;
  image?: string;
};

const AddEmployeeForm = ({
  myProfileUpdate = false,
  setMyProfileUpdate,
  socket = null,
}: any) => {
  const params = useParams();
  const profileId = params.id;

  const [joiningDateInfo, setJoiningDateInfo] = React.useState<Date | null>(
    new Date()
  );
  const [projectList, setProjectList] = React.useState([]);
  const [employeeImg, setEmployeeImg] = React.useState("");

  const navigate = useNavigate();
  const [employeeDetails, setEmployeeDeatils] = React.useState<
    employeeInfoType | any
  >({
    step: 1,
    name: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    address: "",
    salary: "",
    employeeStatus: "",
    joiningDate: "",
    projectName: "",
    responsiblity: "",
    status: "",
    bonus: "",
    totalLeave: "",
    designation: "",
    image: "",
  });

  if (employeeImg) {
    employeeDetails.image = employeeImg;
  }

  const continues = (e: any) => {
    e.preventDefault();
    setEmployeeDeatils({ ...employeeDetails, step: employeeDetails.step + 1 });
  };

  const back = (e: any) => {
    e.preventDefault();
    setEmployeeDeatils({ ...employeeDetails, step: employeeDetails.step - 1 });
  };

  const handleChange = (input: any) => (e: any) => {
    setEmployeeDeatils({ ...employeeDetails, [input]: e.target.value });
  };

  employeeDetails.joiningDate = joiningDateInfo!.toString();

  const { step } = employeeDetails;
  const {
    name,
    email,
    password,
    role,
    phone,
    address,
    salary,
    joiningDate,
    designation,
    employeeStatus,
    projectName,
    responsiblity,
    status,
    bonus,
    totalLeave,
    image,
  } = employeeDetails;

  const values = [
    name,
    email,
    password,
    role,
    phone,
    address,
    salary,
    joiningDate,
    projectName,
    designation,
    employeeStatus,
    responsiblity,
    status,
    bonus,
    totalLeave,
    image,
  ];

  const postEmployeeData = async () => {
    try {
      const postData = await axios.post(
        "http://localhost:5000/api/v1/addemployee",
        employeeDetails,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      navigate("/profiles");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (employeeDetails.bonus && employeeDetails.totalLeave) {
      profileId ? console.log("post error") : postEmployeeData();
    }
    employeeDetails.step === 4 && profileId
      ? updateEmployeeData()
      : console.log("update error");
  }, [employeeDetails]);

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/v1/projects").then((res) => {
        setProjectList(res.data);
      });
    } catch (error) {
      console.log(error);
    }
    profileId ? getProfile() : console.log("no profile id");
    myProfileUpdate ? fecthMyProfileData() : console.log("no update");
  }, []);

  const getProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/employee/${profileId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = res.data;
      data.step = 1;
      const updateData = {
        step: data.step,
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        phone: data.phone,
        address: data.address,
        salary: data.salary,

        joiningDate: data.joiningDate,
        designation: data.designation,
        employeeStatus: data.employeeStatus,
        projectName: data.currentProjects.projectName,
        responsiblity: data.currentProjects.responsiblity,
        status: data.currentProjects.status,
        bonus: data.professionalInfo.bonus,
        totalLeave: data.professionalInfo.totalLeave,

        image: data.image,
      };
      setEmployeeDeatils(updateData);
    } catch (error) {
      console.log(error);
    }
  };

  const updateEmployeeData = async () => {
    try {
      const postData = await axios.put(
        `http://localhost:5000/api/v1/employee/${profileId}`,
        {
          name: employeeDetails.name,
          email: employeeDetails.email,
          password: employeeDetails.password,
          role: employeeDetails.role,
          phone: employeeDetails.phone,
          address: employeeDetails.address,
          salary: employeeDetails.salary,

          image: employeeDetails.image,
          joiningDate: employeeDetails.joiningDate,
          designation: employeeDetails.designation,
          employeeStatus: employeeDetails.employeeStatus,
          currentProjects: {
            projectName: employeeDetails.projectName,
            responsiblity: employeeDetails.responsiblity,
            status: employeeDetails.status,
          },
          professionalInfo: {
            bonus: employeeDetails.bonus,
            totalLeave: employeeDetails.totalLeave,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate("/profiles");
      notificationHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const notificationHandler = () => {
    socket.emit("sendNotification", {
      senderName: "Admin",
      receiverName: employeeDetails.name,
      action: "Your profile has been updated",
    });
  };

  const fecthMyProfileData = async () => {
    try {
      const response = await axios("http://localhost:5000/api/v1/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.data;
      data.step = 1;
      setEmployeeDeatils(data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <AddEmployeeInfo
            handleChange={handleChange}
            values={values}
            continues={continues}
            joiningDateInfo={joiningDateInfo}
            setJoiningDateInfo={setJoiningDateInfo}
            employeeDetails={employeeDetails}
            setEmployeeImg={setEmployeeImg}
            myProfileUpdate={myProfileUpdate}
          />
        );
      case 2:
        return (
          <AddEmployeeProject
            handleChange={handleChange}
            values={values}
            continues={continues}
            back={back}
            projectList={projectList}
            employeeDetails={profileId ? employeeDetails : null}
          />
        );
      case 3:
        return (
          <AddEmployeeProfessional
            handleChange={handleChange}
            values={values}
            continues={continues}
            back={back}
            employeeDetails={profileId ? employeeDetails : null}
          />
        );
      case 4:
        return <SuccessInfo />;
      default:
        return <NotFound />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default AddEmployeeForm;
