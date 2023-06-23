import React from 'react';
import { Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import LandingPage from "../pages/LandingPage";
import LogIn from "../pages/LogIn/LogIn";
import ErrorPage from "../pages/ErrorPage/errorPage";

const useAuth = () => {

  const user = JSON.parse(localStorage.getItem('user'))

  return !!user;
};

export const ProtectedRoute = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />
};
