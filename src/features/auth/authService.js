import axios from "axios";

const API_URL_REGISTER = "https://localhost:7075/api/Users/Register";
const API_URL_LOGIN = "https://localhost:7075/api/Users/Login";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL_REGISTER, userData);

  //   if (response.data) {
  //     localStorage.setItem("token", JSON.stringify(response.data));
  //   }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL_LOGIN, userData);

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userinfo");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
