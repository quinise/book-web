import React from 'react';
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, user }) => {
  return (
    user ? children : <Navigate replace to='/login'/> 
  );
};