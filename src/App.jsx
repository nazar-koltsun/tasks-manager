import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import RootLayout from './layouts/RootLayout';
import BasicLayout from './layouts/BasicLayout';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <BasicLayout />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
      ],
    },
  ],
);


const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  );
};


export default App;
