import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

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
            'flex items-center gap-3 py-2.5 px-3 text-[var(--arsenic)] rounded-lg transition duration-200 ease-in-out cursor-pointer hover:bg-[#F6F6F6]',
            isOpen && 'bg-[#F6F6F6]'
          )}
        >
          <img src={icon} alt={title} />
          {title}
          <span className="ml-auto">
            {isOpen ? '▲' : '▼'} {/* Replace with an appropriate arrow icon */}
          </span>
        </div>
      ) : (
        // Render as a NavLink if there's no submenu
        <NavLink
          to={path}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 py-2.5 px-3 text-[var(--arsenic)] rounded-lg transition duration-200 ease-in-out hover:bg-[#F6F6F6]',
              isActive && 'bg-[#F6F6F6]'
            )
          }
        >
          <img src={icon} alt={title} />
          {title}
        </NavLink>
      )}

      {isOpen && submenu.length > 0 && (
        <ul className="ml-6 mt-2 space-y-2">
          {submenu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 py-1.5 px-2 text-[var(--arsenic)] rounded-lg transition duration-200 ease-in-out hover:bg-[#EDEDED]',
                    isActive && 'bg-[#EDEDED]'
                  )
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
