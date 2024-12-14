import logo from '../assets/images/logo.svg';
import MainNav from './MainNav';
import Button from './Button';
import { useAuth } from '../context/AuthContext';

import { cn } from '../lib/utils';
import settingsIcon from '../assets/images/settings.svg';
import arrowIcon from '../assets/images/nav-icons/arrow.svg';
import infoIcon from '../assets/images/info.svg';
import exitIcon from '../assets/images/exit.svg';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const { isAdmin, logout } = useAuth();

  return (
    <>
      <aside
        className={cn(
          'flex flex-col h-full overflow-auto col-start-1 row-start-1 row-end-[-1] max-768:absolute z-10 top-0 left-0 bottom-0 p-[50px] pb-[282px] bg-[#7f1d4633]',
          !isSidebarOpen && 'max-768:hidden'
        )}
      >
        <img className="ml-3" src={logo} width={101} height={54} alt="Logo" />

        <div className="mt-[86px]">
          <span className="ml-3 text-[10px] uppercase text-[#757575] opacity-60">
            Main
          </span>

          <MainNav />

          <div
            className={cn(
              'border-t-[2px] border-[var(--cultured)] mt-6 mb-6 pt-6',
              !isAdmin && 'mt-[368px]'
            )}
          >
            <p className="pl-3 text-[10px] uppercase text-[var(--arsenic)]">
              Ustawienia
            </p>
            <Button variant="flat" className="w-full mt-2">
              <img src={settingsIcon} width={20} height={20} alt="Settings" />
              Ustawienia
              <img
                src={arrowIcon}
                width={10}
                height={67}
                alt="Arrow"
                className="rotate-180 ml-auto"
              />
            </Button>
          </div>
        </div>

        <div className="mt-auto space-y-2">
          <Button variant="flat" className="w-full">
            <img src={infoIcon} width={20} height={20} alt="Help" />
            Pomoc
          </Button>
          <Button
            variant="flat"
            className="w-full text-[var(--indian-red)]"
            onClick={logout}
          >
            <img src={exitIcon} width={14} height={18} alt="Exit" />
            Wyloguj się
          </Button>
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
