import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../components/App';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
