import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Index from './pages';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}></Route>
        </Routes>
    </BrowserRouter>
  );
}
