import React from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';

const LayoutPage = () => {
  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-col mx-auto p-4">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
