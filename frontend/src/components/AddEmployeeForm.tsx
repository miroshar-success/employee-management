import React from "react";
import NotFound from "../pages/NotFound";
import AddEmployeeInfo from "./AddEmployeeInfo";
import AddEmployeeProfessional from "./AddEmployeeProfessional";
import AddEmployeeProject from "./AddEmployeeProject";
import SuccessInfo from "./SuccessInfo";

type employeeInfoType = {
  step: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  phone: string;
  address: string;
  salary: string;
  department: string;
  joiningDate: string | Date | null;
  projectName: string;
  projectResponsiblity: string;
  projectStatus: string;
  bonus: string;
  totalLeave: string;
  admin: string;
  image?: string;
};

const AddEmployeeForm = () => {
  const [joiningDateInfo, setJoiningDateInfo] = React.useState<Date | null>(
    new Date()
  );

  const [employeeDetails, setEmployeeDeatils] =
    React.useState<employeeInfoType>({
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
      phone: "",
      address: "",
      salary: "",
      department: "",
      joiningDate: "",
      projectName: "",
      projectResponsiblity: "",
      projectStatus: "",
      bonus: "",
      totalLeave: "",
      admin: "",
      image: "",
    });

  console.log({ employeeDetails });

  const continues = (e: any) => {
    e.preventDefault();
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
    firstName,
    lastName,
    email,
    password,
    role,
    phone,
    address,
    salary,
    department,
    joiningDate,
    projectName,
    projectResponsiblity,
    projectStatus,
    bonus,
    totalLeave,
    admin,
    image,
  } = employeeDetails;

  const values = [
    firstName,
    lastName,
    email,
    password,
    role,
    phone,
    address,
    salary,
    department,
    joiningDate,
    projectName,
    projectResponsiblity,
    projectStatus,
    bonus,
    totalLeave,
    admin,
    image,
  ];

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
          />
        );
      case 2:
        return (
          <AddEmployeeProject
            handleChange={handleChange}
            values={values}
            continues={continues}
            back={back}
          />
        );
      case 3:
        return (
          <AddEmployeeProfessional
            handleChange={handleChange}
            values={values}
            continues={continues}
            back={back}
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
