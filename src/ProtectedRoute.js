import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) =>  {
	if (!user) {
		return <Navigate to="/login" replace="true" />;
	}
	return children;
}

const mapStateToProps = (state) => {
	return {
		user: state.usersReducer.user,
	};
};
export default connect(mapStateToProps)(ProtectedRoute);