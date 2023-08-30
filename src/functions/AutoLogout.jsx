import React from "react";
import { useNavigate } from "react-router-dom";
import useTimeout from "./useTimeout";

const Logout = ({ timeout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  useTimeout(handleLogout, timeout);

  return null;
};

export default Logout;
