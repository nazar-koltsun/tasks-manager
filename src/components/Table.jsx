import { cn } from '../lib/utils';

import Button from './Button';
import SortIcon from '../assets/images/sort.svg';
import StartIcon from '../assets/images/start.svg';
import StopIcon from '../assets/images/stop.svg';
import timeStartIcon from '../assets/images/time-start.svg';
import pauseIcon from '../assets/images/pause.svg';
import cancelledIcon from '../assets/images/cancelled.svg';

const Table = ({ data, sortableArr = [], className }) => {
  const renderTdContent = (row, key) => {
    if (key === 'Status') {
      return (
        <span
          className={cn(
            'text-[12px] py-2 px-3 text-center rounded-3xl text-white',
            row[key] === 'Completed' && 'bg-[#EBF9F1] text-[#1F9254]',
            row[key] === 'In progress' && 'bg-[#FEF2E5] text-[#CD6200]',
            row[key] === 'Cancelled' && 'bg-[#FBE7E8] text-[var(--indian-red)]'
          )}
        >
          {row[key]}
        </span>
      );
    }

    if (key === 'Time tracking') {
      const getImage = () => {
        if (row[key] === 'inactive') return timeStartIcon;
        if (row[key] === 'active') return pauseIcon;
        return cancelledIcon;
      }
      return (
        <Button
          variant="flat"
          className={cn("flex-shrink-0 w-9 h-9 p-1 justify-center bg-[var(--platinum)] rounded-full",
            row[key] === 'active' && 'bg-[var(--pansy-purple)] hover:bg-[#5a0101]',
            row[key] === 'cancelled' && 'bg-transparent',
          )}
        >
          <img
            src={getImage() || StartIcon}
            alt=""
          />
        </Button>
      );
    }
    return row[key];
  };
  return (
    <div
      className={cn(
        'text-[var(--electric-blue)] overflow-x-auto w-[calc(100vw-390px)] max-1024:w-[calc(100vw-255px)] max-768:w-[calc(100vw-55px)]',
        className
      )}
    >
      <table className="w-full whitespace-nowrap relative text-[var(--arsenic)] font-medium">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, index) => (
              <th
                key={index}
                className="py-[15px] px-[15px] text-left font-bold"
              >
                <div
                  className={cn(
                    'flex items-center justify-between gap-2',
                    index === 0 && 'justify-center'
                  )}
                >
                  {key}
                  {sortableArr.includes(key) && (
                    <Button variant="flat" className="flex-shrink-0">
                      <img src={SortIcon} width={10} height={13} alt="" />
                    </Button>
                  )}
                </div>
              </th>
            ))}
            <th className="py-[15px] px-[15px] text-center font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(rowIndex % 2 === 0 && 'bg-[#F9F9F9]')}
            >
              {Object.keys(row).map((key, index) => (
                <td
                  key={index}
                  className={cn(
                    'py-[24px] px-[15px] text-left',
                    index === 0 && 'text-center'
                  )}
                >
                  {renderTdContent(row, key)}
                </td>
              ))}
              <td className="py-[15px] px-[15px] text-left">
                <div className='flex items-center justify-center gap-2'>
                  <Button
                    variant="flat"
                    className="flex-shrink-0 w-8 h-8 p-1 justify-center hover:bg-[var(--platinum)]"
                  >
                    <img src={StartIcon} width={19} height={19} alt="" />
                  </Button>
                  <Button
                    variant="flat"
                    className="flex-shrink-0 w-8 h-8 p-1 justify-center hover:bg-[var(--platinum)]"
                  >
                    <img src={StopIcon} width={20} height={21} alt="" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
