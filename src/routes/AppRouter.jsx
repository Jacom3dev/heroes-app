import React from 'react'
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginScreen from '../components/login/LoginScreen';
import DasboardRouter from './DasboardRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute>
          <LoginScreen/>
        </PublicRoute>} />
        <Route path='/*' 
          element={
            <PrivateRoute>
              <DasboardRouter/>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter