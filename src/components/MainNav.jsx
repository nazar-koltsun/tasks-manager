import NavItem from './NavItem';
import dashboardIcon from '../assets/images/nav-icons/dashboard.svg';
import todoIcon from '../assets/images/nav-icons/todo.svg';
import projectsIcon from '../assets/images/nav-icons/projects.svg';
import calendarIcon from '../assets/images/nav-icons/calendar.svg';
import reportsIcon from '../assets/images/nav-icons/reports.svg';
import { useAuth } from '../context/AuthContext';

const NAV_ITEMS = [
  {
    title: 'Lista zadań',
    path: '/todos',
    icon: todoIcon,
  },
  {
    title: 'Projekty',
    path: '/projects',
    icon: projectsIcon,
  },
  {
    title: 'Kalendarz',
    path: '/calendar',
    icon: calendarIcon,
  },
  {
    title: 'Raporty',
    icon: reportsIcon,
    submenu: [
      { title: 'Nazwa 1', path: '/reports/1' },
      { title: 'Nazwa 2', path: '/reports/2' },
      { title: 'Nazwa 3', path: '/reports/3' },
      { title: 'Nazwa 4', path: '/reports/4' },
    ],
  },
];

const MainNav = () => {
  const { isAdmin } = useAuth();

  return (
    <nav className="mt-2">
      <ul>
        <NavItem title="Dashboard" path="/" icon={dashboardIcon} />

        {isAdmin &&
          NAV_ITEMS.map((item) => <NavItem key={item.title} {...item} />)}
      </ul>
    </nav>
  );
};

export default MainNav;
