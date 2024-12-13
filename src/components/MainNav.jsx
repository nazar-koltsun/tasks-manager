import NavItem from "./NavItem";
import dashboardIcon from "../assets/images/nav-icons/dashboard.svg";
import todoIcon from "../assets/images/nav-icons/todo.svg";
import projectsIcon from "../assets/images/nav-icons/projects.svg";
import calendarIcon from "../assets/images/nav-icons/calendar.svg";
import reportsIcon from "../assets/images/nav-icons/reports.svg";

const NAV_ITEMS = [
  {
    title: "Dashboard",
    path: "/",
    icon: dashboardIcon,
  },
  {
    title: "Lista zadań",
    path: "/todos",
    icon: todoIcon,
  },
  {
    title: "Projekty",
    path: "/projects",
    icon: projectsIcon,
  },
  {
    title: "Kalendarz",
    path: "/calendar",
    icon: calendarIcon,
  },
  {
    title: "Raporty",
    icon: reportsIcon,
    submenu: [
      { title: 'Profile', path: '/settings/profile' },
      { title: 'Account', path: '/settings/account' },
    ],
  },
];

const MainNav = () => {
  return (
    <nav className="mt-2">
      <ul>
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;