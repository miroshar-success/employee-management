export type existingEmployee = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  phone: number;
  address: string;
  salary: number;
  joingDate: Date;
  currentProjects: {
    projectName: string;
    responsiblity: string;
    status: string;
  };
  professionalInfo: {
    bonus: number;
    totalLeave: number;
    recentLeave: Array<string>;
  };
  createdAt: Date;
  updatedAt: Date;
};
