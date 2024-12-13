import logo from '../assets/images/logo.svg';
import MainNav from './MainNav';
// import Button from './Button';
// import LogOutIcon from '../assets/images/log-out.svg';
// import RightArrowIcon from '../assets/images/right-arrow.svg';
import { cn } from '../lib/utils';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  return (
    <>
      <aside
        className={cn(
          'col-start-1 row-start-1 row-end-[-1] max-768:absolute z-10 top-0 left-0 bottom-0 p-[50px] bg-[#7f1d4633]',
          !isSidebarOpen && 'max-768:hidden'
        )}
      >
        <img className="ml-3" src={logo} width={101} height={54} alt="Logo" />

        <div className="mt-[86px]">
          <span className="ml-3 text-[10px] uppercase text-[#757575] opacity-60">
            Main
          </span>

          <MainNav />

          {/* <Button variant="flat" className="mt-[72px] opacity-50 text-[15px]">
            <img src={LogOutIcon} width={16} height={16} alt="Wyloguj" />
            Wyloguj się
          </Button> */}

          {/* <Button
            variant="flat"
            className="mt-[280px] text-[var(--maroon)] font-medium gap-5"
          >
            Więcej
            <img src={RightArrowIcon} width={15} height={15} alt="Więcej" />
          </Button> */}
        </div>
      </aside>
      <div
        className={cn(
          'hidden max-768:block absolute z-0 top-0 right-0 bottom-0 w-full left-0 bg-black opacity-50',
          !isSidebarOpen && 'max-768:hidden'
        )}
        onClick={() => closeSidebar()}
      ></div>
    </>
  );
};

export default Sidebar;