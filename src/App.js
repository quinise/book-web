import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Feed from './components/pages/feed/Feed';
import LoginPage from './components/pages/login-page/LoginPage';
import NoMatch from './components/pages/noMatch/NoMatch';
import Profile from './components/pages/profile/Profile';

import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from './components/utils/ProtectedRoute';
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