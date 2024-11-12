import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FundsPage } from '../screens/FundsPage';
import { NoMatchPage } from '../screens/NoMatchPage';

export const Router = () => (
  <Routes>
    <Route index path="/" element={<FundsPage />} />
    <Route path="*" element={<NoMatchPage />} />
  </Routes>
);
