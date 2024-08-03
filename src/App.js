
import React from 'react';
import LoginPage from './components/auth/login/LoginPage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Feed from './pages/feed/Feed';
import NoMatch from './pages/noMatch/NoMatch';
import Profile from './pages/profile/Profile';

import { Route, Routes } from "react-router-dom";
import PrivateRoutes from './components/auth/utils/PrivateRoutes';
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      {" "}
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          {" "}
          <Route path='/profile' element={<Profile />}/>
          <Route path='/feed' element={<Feed />}/>
        </Route>
        <Route  path='*' element={<NoMatch />}/>
        <Route path='/' element={<LoginPage />}/>
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;