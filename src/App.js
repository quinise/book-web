import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginPage from './components/auth/login-page/LoginPage';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Feed from './pages/feed/Feed';
import NoMatch from './pages/noMatch/NoMatch';
import Profile from './pages/profile/Profile';

import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './components/auth/utils/ProtectedRoute';
import { auth } from "./config/firebase";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/profile' element={
          <ProtectedRoute user={user}>
            <Profile />
          </ProtectedRoute>  
        } />
        <Route path='/feed' element={
          <ProtectedRoute user={user}>
            <Feed />
          </ProtectedRoute>
        } />
        <Route  path='*' element={<NoMatch />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;