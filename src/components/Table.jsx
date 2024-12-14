import { cn } from '../lib/utils';

import Button from './Button';
import SortIcon from '../assets/images/sort.svg';
import StartIcon from '../assets/images/start.svg';
import StopIcon from '../assets/images/stop.svg';

const Table = ({ data, sortableArr = [], className }) => {
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
                <div className={cn('flex items-center justify-between gap-2', index === 0 && 'justify-center')}>
                  {key}
                  {sortableArr.includes(key) && (
                    <Button variant="flat" className='flex-shrink-0'>
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
                <td key={index} className={cn("py-[24px] px-[15px] text-left", index === 0 && 'text-center')}>
                  {key === 'Status' ? (
                    <span
                      className={cn(
                        'text-[12px] py-2 px-3 text-center rounded-3xl text-white',
                        row[key] === 'Completed' && 'bg-[#EBF9F1] text-[#1F9254]',
                        row[key] === 'In progress' && 'bg-[#FEF2E5] text-[#CD6200]',
                        row[key] === 'Cancelled' && 'bg-[#FBE7E8] text-[var(--indian-red)]',
                      )}
                    >
                      {row[key]}
                    </span>
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
              <td className="flex items-center justify-center gap-2 py-[15px] px-[15px] text-left">
                <Button variant="flat" className='flex-shrink-0 w-8 h-8 p-1 justify-center'>
                  <img src={StartIcon} width={19} height={19} alt="" />
                </Button>
                <Button variant="flat" className='flex-shrink-0 w-8 h-8 p-1 justify-center'>
                  <img src={StopIcon} width={20} height={21} alt="" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
