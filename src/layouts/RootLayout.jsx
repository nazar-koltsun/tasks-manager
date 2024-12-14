import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const openSidebar = () => {
  //   setIsSidebarOpen(true);
  //   document.body.style.overflow = 'hidden';
  // };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-[310px_1fr] grid-rows-[auto_1fr] min-h-screen font-nunito text-sm">
        <div>Header</div>
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <main className="col-start-2 max-768:col-start-1 bg-[#F9F9FC] border-t-[2px] border-t-[#EEF2F7]">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;