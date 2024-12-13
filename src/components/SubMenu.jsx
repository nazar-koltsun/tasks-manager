import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

import branchIcon from '../assets/images/nav-icons/branch.svg';

const SubMenu = ({ submenu }) => {
  return (
    <ul className="ml-6 mt-2 space-y-2 pl-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-[19px] before:w-[2px] before:bg-[var(--cultured)]">
      {submenu.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 py-2 px-3 text-[var(--arsenic)] text-xs rounded-lg transition duration-200 ease-in-out hover:bg-[var(--cultured)] relative',
                isActive && 'bg-[var(--cultured)]'
              )
            }
          >
            <img className='absolute left-[-12px] bottom-[11px]' src={branchIcon} alt=" " role="presentation" />
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
