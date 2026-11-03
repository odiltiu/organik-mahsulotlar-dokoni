import React from 'react';
import { Outlet } from 'react-router-dom';

export default function MainLayouts() {
  return (
    <div className="w-full min-h-screen">
      <Outlet />
    </div>
  );
}