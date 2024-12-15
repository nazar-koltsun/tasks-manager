import FormLabel from './FormLabel';
import FormInput from './FormInput';
import Button from './Button';

import PlusRedIcon from '../assets/images/plus-red.svg';
import PlusIcon from '../assets/images/plus.svg';

const AddNewTask = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const todayDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className='flex items-center gap-2'>
        <span className='flex items-center justify-center w-5 h-5 bg-[#e5d2da] rounded-md '>
          <img src={PlusRedIcon} width={10} height={10} alt="" />
        </span>
        <h2 className="font-nunito font-semibold text-[22px] text-[var(--arsenic)]">
          Add task
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full mt-4">
        <div>
          <FormLabel htmlFor="type">Type</FormLabel>
          <FormInput
            id="type"
            type="text"
            name="type"
            placeholder="Enter type"
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="project">Project</FormLabel>
          <FormInput
            id="project"
            type="text"
            name="project"
            placeholder="Enter project"
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="employee">Assigned employee</FormLabel>
          <FormInput
            id="employee"
            type="text"
            name="employee"
            placeholder="Enter employee"
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="date">Added date</FormLabel>
          <FormInput
            id="date"
            type="date"
            name="date"
            placeholder="Enter date"
            defaultValue={todayDate}
            required
          />
        </div>

        <Button
          className="mt-6 self-center"
          variant="default"
          type="submit"
        >
          <img src={PlusIcon} width={10} height={10} alt="" />
          Add
        </Button>
      </form>
    </>
  );
};

export default AddNewTask;
