export const isLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  alert("token is not exist");
  return false;
};

export const isAdmin = () => {
  if (localStorage.getItem("role") === "admin") {
    return true;
  }
  alert("You are not admin");
  return false;
};
