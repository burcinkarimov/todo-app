import TextInput from './TextInput';
import PrimaryButton from './PrimaryButton';
import TasksList from './TasksList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

function Dashboard({ handleTaskChange, handleTaskSubmit, newTask, tasks }) {
  return (
    <div className="w-full md:w-2/3 mt-10 md:mt-0 p-4 gap-3 overflow-scroll shadow-lg">
      <div className="flex items-center justify-between mb-10 flex-wrap">
        <div className="flex gap-2 items-center mx-1">
          <FontAwesomeIcon icon={faCheck} className="p-2 mr-2 border-[1px] text-amber-200 hover:text-amber-400 cursor-pointer" />
          <p>Show Done</p>
        </div>
      
        <div className="flex relative justify-center mx-1">
          <TextInput placeholder="Search..." />
          <FontAwesomeIcon icon={faXmark} className="absolute right-2 top-2 py-1 px-2 border-[1px] text-indigo-400 hover:text-indigo-500 cursor-pointer" />
        </div>
    
        <form onSubmit={handleTaskSubmit} className="mx-1">
          <TextInput placeholder="Add a new task..." value={newTask} onChange={handleTaskChange} />
          <PrimaryButton text="Save" />
        </form>
      </div>
  
      <TasksList tasks={tasks} />
    </div>
  );
}

export default Dashboard;