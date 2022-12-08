import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { routes } from '../router';
import Main from '../layouts/Main';

export default function App() {
  return (
    <Main>
      <Routes>
        {routes.map(({ element: Element, key, path }) => (
          <Route
            key={key}
            path={path}
            element={<Element />}
          />
        ))}
      </Routes>
    </Main>
  )
}
