import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) =>  {
	const  users = useSelector((state) => {
    return state.usersReducer.user
  });
	if (!users) {
		return <Navigate to="/login" />;
	}
	return children;
}

export default ProtectedRoute;