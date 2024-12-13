import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

import SubMenu from './SubMenu';
import arrowIcon from '../assets/images/nav-icons/arrow.svg';

const NavItem = ({ title, path, icon, submenu = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li>
      {submenu.length > 0 ? (
        // Render as a div if there is a submenu
        <div
          onClick={toggleSubmenu}
          className={cn(
            'flex items-center gap-3 py-2.5 px-3 text-[var(--arsenic)] rounded-lg transition duration-200 ease-in-out cursor-pointer hover:bg-[var(--cultured)]',
            isOpen && 'bg-[var(--cultured)]'
          )}
        >
          <img src={icon} alt={title} />
          {title}
          <span className="ml-auto">
            <img src={arrowIcon} width={10} height={67} alt="Arrow" className={isOpen ? '' : 'rotate-180'} />
          </span>
        </div>
      ) : (
        // Render as a NavLink if there's no submenu
        <NavLink
          to={path}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 py-2.5 px-3 text-[var(--arsenic)] rounded-lg transition duration-200 ease-in-out hover:bg-[var(--cultured)]',
              isActive && 'bg-[var(--cultured)]'
            )
          }
        >
          <img src={icon} alt={title} />
          {title}
        </NavLink>
      )}

      {isOpen && submenu.length > 0 && (
        <SubMenu submenu={submenu} />
      )}
    </li>
  );
};

export default NavItem;
