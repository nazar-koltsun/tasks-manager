import Button from './Button';
import BurgerIcon from '../assets/images/burger.svg';
import UserInfo from './UserInfo';
import { useAuth } from "../context/AuthContext";


const Header = ({ openSidebar }) => {
  const { isAdmin } = useAuth();

  return (
    <header className="col-start-2 max-768:col-start-1 flex px-[35px] pt-5 pb-3 shadow-headerShadow border-b border-[var(--platinum)]">
      <Button
        className="hidden max-768:flex px-3 py-[18px] hover:opacity-50"
        variant="flat"
        onClick={openSidebar}
      >
        <img src={BurgerIcon} width={18} height={16} alt="" />
      </Button>

      <UserInfo name="Jan Kowalski" isAdmin={isAdmin} className='ml-auto' />
    </header>
  );
};

export default Header;
