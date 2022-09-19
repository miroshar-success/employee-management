import DataTable from "../components/DataTable";

const Projects = ({
  isprofiles,
  setIsProfiles,
}: {
  isprofiles: any;
  setIsProfiles: any;
}) => {
  const customData = [
    {
      id: 1,
      name: "project1",
      client_name: "client1",
      status: "running",
      deadline: "2023-10-10",
    },
    {
      id: 2,
      name: "project2",
      client_name: "client2",
      status: "delivered",
      deadline: "2021-10-10",
    },
  ];
  setIsProfiles(false);
  return (
    <div>
      <DataTable customData={customData} isprofiles={isprofiles} />
    </div>
  );
};

export default Projects;
