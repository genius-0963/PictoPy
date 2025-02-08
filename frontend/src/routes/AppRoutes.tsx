import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { ROUTES } from '../constants/routes';  
import Layout from '@/layout/main';
import { LayoutRoutes } from './LayoutRoutes/LayoutRoutes';
import { InitialPage } from '@/pages/Setupscreen/Setup';

export const AppRoutes: React.FC = () => {
  const location = useLocation();
  

  return (
    <Routes>
    {/* Handle the /initial route separately without layout */}
    <Route path={ROUTES.INITIAL} element={<InitialPage />} />

    {/* Wrap all layout routes under a parent layout */}
    <Route
      path="/*"
      element={
        <Layout>
          <LayoutRoutes />
        </Layout>
      }
    />
  </Routes>
    
    
  );
};
