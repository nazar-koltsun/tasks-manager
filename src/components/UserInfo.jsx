import UserIcon from '../assets/images/user-icon.svg';
import { cn } from '../lib/utils';

const UserInfo = ({ name, isAdmin, avatar = null, className }) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div className="flex flex-col mt-[3px]">
        <span className='font-400 text-[var(--arsenic)] text-lg leading-5'>{name}</span>
        <span className='text-[#898888] text-xs'>{isAdmin ? "Admin" : "Employee"}</span>
      </div>

      {avatar && (
        <img
          className="object-cover"
          src={avatar}
          width={40}
          height={40}
          alt="User"
        />
      )}
      {!avatar && (
        <img
          className="object-cover"
          src={UserIcon}
          width={40}
          height={40}
          alt="User"
        />
      )}
    </div>
  );
};

export default UserInfo;
