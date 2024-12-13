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
          path: '/',
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <BasicLayout />,
      children: [
        {
          path: '/login',
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
