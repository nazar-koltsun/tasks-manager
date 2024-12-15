import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import PlusIcon from '../assets/images/plus.svg';
import Table from '../components/Table';
import Modal from '../components/Modal';
import AddNewTask from '../components/AddNewTask';

const TABLE_DATA_USER = [
  {
    Task: 'Nazwa zadania',
    Project: 'Nazwa projektu',
    Przypisano: 'Andrzej Nowak',
    'Data dodania': '3/12/2024',
    Czas: '3:12:00',
    'Time tracking': 'inactive',
    Status: 'Completed',
  },
  {
    Task: 'Nazwa zadania',
    Project: 'Nazwa projektu',
    Przypisano: 'Wiktoria Nowak',
    'Data dodania': '22/05/2022',
    Czas: '3:12:00',
    'Time tracking': 'inactive',
    Status: 'Completed',
  },
  {
    Task: 'Nazwa zadania',
    Project: 'Nazwa projektu',
    Przypisano: 'Andrzej Nowak',
    'Data dodania': '15/06/2022',
    Czas: '3:12:05',
    'Time tracking': 'active',
    Status: 'In progress',
  },
  {
    Task: 'Nazwa zadania',
    Project: 'Nazwa projektu',
    Przypisano: 'Brad Mason',
    'Data dodania': '06/09/2022',
    Czas: '3:12:05',
    'Time tracking': 'inactive',
    Status: 'Completed',
  },
  {
    Task: 'Nazwa zadania',
    Project: 'Nazwa projektu',
    Przypisano: 'Wiktoria Nowak',
    'Data dodania': '25/09/2022',
    Czas: '00:00:00',
    'Time tracking': 'cancelled',
    Status: 'Cancelled',
  },
];

const TABLE_DATA_ADMIN = [
  {
    Task: 'Nazwa zadania',
    Project: 'Nazwa projektu',
    Przypisano: 'Andrzej Nowak',
    'Data dodania': '3/12/2024',
    Czas: '3:12:00',
    Status: 'Completed',
  },
  {
    Task: 'Nazwa zadania',
    Project: 'Nazwa projektu',
    Przypisano: 'Wiktoria Nowak',
    'Data dodania': '22/05/2022',
    Czas: '3:12:00',
    Status: 'Completed',
  },
  {
    Task: 'Nazwa zadania',
    Project: 'Nazwa projektu',
    Przypisano: 'Andrzej Nowak',
    'Data dodania': '15/06/2022',
    Czas: '3:12:05',
    Status: 'In progress',
  },
  {
    Task: 'Nazwa zadania',
    Project: 'Nazwa projektu',
    Przypisano: 'Brad Mason',
    'Data dodania': '06/09/2022',
    Czas: '3:12:05',
    Status: 'Completed',
  },
  {
    Task: 'Nazwa zadania',
    Project: 'Nazwa projektu',
    Przypisano: 'Wiktoria Nowak',
    'Data dodania': '25/09/2022',
    Czas: '00:00:00',
    Status: 'Cancelled',
  },
];

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAdmin, isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login'); // Redirect to login page if not authenticated
    }
  }, [isAuth, navigate]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-[var(--arsenic)]">
        List of tasks
      </h1>

      <div className="mt-10">
        <time
          className="pl-3.5 font-inter text-base text-[#0D062D] font-medium relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-[var(--pansy-purple)] before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-0"
          dateTime="2024-12-04"
        >
          Today, 4/12/2024
        </time>

        <ProgressBar value={30} max={100} className="mt-4" />
      </div>

      <Button className="mt-10 ml-3.5" onClick={openModal}>
        <img src={PlusIcon} width={12} height={12} alt="" />
        Add new task
      </Button>

      <Table
        data={isAdmin ? TABLE_DATA_ADMIN : TABLE_DATA_USER}
        sortableArr={['Project', 'Przypisano', 'Data dodania', 'Status']}
        className="mt-4"
      />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddNewTask onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default DashboardPage;
