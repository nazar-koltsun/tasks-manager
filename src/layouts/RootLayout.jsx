import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-[310px_1fr] max-1024:grid-cols-[240px_1fr] grid-rows-[auto_1fr] min-h-screen font-nunito text-sm">
        <Header openSidebar={openSidebar} />
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <main className="col-start-2 max-768:col-start-1 max-768:col-end-[-1] p-10 max-1024:p-4 max-1024:pt-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
