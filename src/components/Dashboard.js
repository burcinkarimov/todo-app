import TasksList from './TasksList';
import TaskControlPanel from './TaskControlPanel';

function Dashboard({ handleTaskChange, handleTaskSubmit, newTask, tasks }) {
  return (
    <div className="w-full md:w-2/3 mt-10 md:mt-0 p-4 gap-3 overflow-scroll shadow-lg">
      <TaskControlPanel handleTaskChange={handleTaskChange} handleTaskSubmit={handleTaskSubmit} newTask={newTask} />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default Dashboard;