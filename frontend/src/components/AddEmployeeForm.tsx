import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AddEmployeeInfo from "./AddEmployeeInfo";
import AddEmployeeProfessional from "./AddEmployeeProfessional";
import AddEmployeeProject from "./AddEmployeeProject";
import SuccessInfo from "./SuccessInfo";
import Papa from "papaparse";

type employeeInfoType = {
  step: number;
  name: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  address: string;
  salary: string;
  // department: string;
  joiningDate: string | Date | null;
  projectName: string;
  responsiblity: string;
  status: string;
  bonus: string;
  totalLeave: string;
  // admin: string;
  image?: string;
};

const AddEmployeeForm = () => {
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
    // department: "",
    joiningDate: "",
    projectName: "",
    responsiblity: "",
    status: "",
    bonus: "",
    totalLeave: "",
    // admin: "",
    image: "",
  });

  if (employeeImg) {
    employeeDetails.image = employeeImg;
  }
  console.log({ employeeDetails });

  const continues = (e: any) => {
    e.preventDefault();
    console.log("step", step);
    setEmployeeDeatils({ ...employeeDetails, step: employeeDetails.step + 1 });
  };

  const back = (e: any) => {
    e.preventDefault();
    setEmployeeDeatils({ ...employeeDetails, step: employeeDetails.step - 1 });
  };

  const handleChange = (input: any) => (e: any) => {
    console.log("a", input, e.target.value);
    console.log("j", joiningDateInfo);
    setEmployeeDeatils({ ...employeeDetails, [input]: e.target.value });
  };

  employeeDetails.joiningDate = joiningDateInfo!.toString();

  console.log("employeeDetails", employeeDetails);

  const { step } = employeeDetails;
  const {
    name,
    email,
    password,
    role,
    phone,
    address,
    salary,
    // department,
    joiningDate,
    projectName,
    responsiblity,
    status,
    bonus,
    totalLeave,
    // admin,
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
    // department,
    joiningDate,
    projectName,
    responsiblity,
    status,
    bonus,
    totalLeave,
    // admin,
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
      console.log("postData", postData.data);
      navigate("/profiles");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (employeeDetails.bonus && employeeDetails.totalLeave) {
      console.log(">>", employeeDetails.totalLeave);
      profileId ? console.log("post error") : postEmployeeData();
    }
    employeeDetails.step === 4 && profileId
      ? updateEmployeeData()
      : console.log("update error");
  }, [employeeDetails]);

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/v1/projects").then((res) => {
        console.log("res", res.data);
        setProjectList(res.data);
      });
    } catch (error) {
      console.log(error);
    }
    profileId ? getProfile() : console.log("no profile id");
  }, []);

  // useEffect(() => {
  //   profileId ? updateEmployeeData() : console.log("no profile id");
  // });

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
      console.log("res", res.data);
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
        // department: "",
        joiningDate: data.joiningDate,
        projectName: data.currentProjects.projectName,
        responsiblity: data.currentProjects.responsiblity,
        status: data.currentProjects.status,
        bonus: data.professionalInfo.bonus,
        totalLeave: data.professionalInfo.totalLeave,
        // admin: "",
        image: "",
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
          // department: employeeDetails.department,
          joiningDate: employeeDetails.joiningDate,
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
      console.log("updateData", postData.data);
      navigate("/profiles");
    } catch (error) {
      console.log(error);
    }
  };
  // render(){
  //    var  formSteps =()=>{
  //         switch(step){
  //             case 1:
  //                 return <PersonalDetails/>;
  //             case 2:
  //                 return <ProfessionalDetails/>;
  //             case 3:
  //                 return <ProjectDetails/>;
  //             case 4:
  //                 return <SuccessInfo/>;
  //             default:
  //                 return <PersonalDetails/>;

  //         }
  //     }
  // }

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
            employeeDetails={profileId ? employeeDetails : null}
            //employeeImg={employeeImg}
            setEmployeeImg={setEmployeeImg}
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

  return (
    <div>
      {/* <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
          const files = e.target.files;
          console.log(files);
          if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
              complete: function (results) {
                console.log("Finished:", results.data);
              },
            });
          }
        }}
      /> */}
      {renderContent()}
    </div>
  );
};

export default AddEmployeeForm;
