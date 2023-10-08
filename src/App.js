import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import SignIn from './pages/signIn';
import Login from './pages/login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
