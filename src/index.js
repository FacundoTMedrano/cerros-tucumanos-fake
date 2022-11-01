import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Wrapper>
  </BrowserRouter>
);
