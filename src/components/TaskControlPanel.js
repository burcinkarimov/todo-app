import ShowDone from './ShowDone';
import SearchBar from './SearchBar';
import AddNewTask from './AddNewTask';

function TaskControlPanel({ handleTaskChange, handleTaskSubmit, newTask }) {
  return (
    <div className="flex items-center justify-between mb-10 flex-wrap">
      <ShowDone />
      <SearchBar />
      <AddNewTask 
        handleTaskChange={handleTaskChange} 
        handleTaskSubmit={handleTaskSubmit} 
        newTask={newTask} 
      /> 
    </div>
  );
}

export default TaskControlPanel;