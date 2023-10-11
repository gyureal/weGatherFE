import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import SignUp from './pages/signUp';
import Login from './pages/login';
import EmailResend from './pages/EmailResend';
import CheckEmailToken from './pages/CheckEmailToken';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/email-resend' element={<EmailResend />}></Route>
        <Route path='/check-email-token' element={<CheckEmailToken />}></Route>

        <Route path='/profile/:username' element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
