import axios from "axios";
import { useState } from "react";

export default function AuthUser() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("TOKEN");
    // const userToken = JSON.stringify(tokenString);
    return tokenString;
  };

  const [token, settoken] = useState(getToken());

  const saveToken = (token) => {
    sessionStorage.setItem("TOKEN", token);

    settoken(token);
  };

  const logout = () => {
    sessionStorage.clear();
  };

  const http = axios.create({
    baseURL: "https://localhost:7075/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    settoken: saveToken,
    token,
    getToken,
    http,
    logout,
  };
}
