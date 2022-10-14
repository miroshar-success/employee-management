import jwt_decode from "jwt-decode";

export const isLogin = () => {
  if (localStorage.getItem("token")) {
    const user: any = jwt_decode(localStorage.getItem("token") || "");
    if (user.exp < Date.now() / 1000) {
      localStorage.removeItem("token");
      return false;
    }
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
