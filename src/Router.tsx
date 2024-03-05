import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { LoginPage } from './Pages/Login';
import { CharacterPage } from './Pages/Character'
import { RouterLayout } from './Common/RouterLayout';

export const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
