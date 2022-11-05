import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Holder from './Holder';
import LogInPage from './Pages/LogInPage';
import SignUp from './Pages/SignUp';
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<ProtectedRoute><Holder /></ProtectedRoute>} /> 
            <Route path="/login" element={<LogInPage />} />  
            <Route path="/" element={<SignUp />} />  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router