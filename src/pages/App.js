import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from '../layouts/Main';
import Users from './Users';

export default function App() {
  return (
    <Main>
      <Routes>
        <Route path='/users' index element={<Users />} />
        <Route path="*" element={<h2>404 Page</h2>} />
      </Routes>
    </Main>
  )
}
