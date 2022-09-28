export const isLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  //alert("token is not exist");
  return false;
};

export const isAdmin = () => {
  let user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user.role === "admin") {
    return true;
  }
  //alert("You are not admin");
  return false;
};
