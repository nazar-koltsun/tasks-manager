import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  )
}

export default BasicLayout;