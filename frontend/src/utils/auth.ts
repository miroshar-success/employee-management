export const isLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};

export const isAdmin = () => {
  if (localStorage.getItem("role") === "admin") {
    return true;
  }
  return false;
};
