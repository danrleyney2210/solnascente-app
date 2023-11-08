import React from "react";

import { Auth } from "../../pages/auth";
import { useContextSite } from "../../context/Context";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // const { isAuth } = useContextSite();
  const [token, setToken] = useLocalStorage("@token");

  return token ? children : <Navigate to={"/"} />;
};
