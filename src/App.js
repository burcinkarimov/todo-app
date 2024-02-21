import { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";
import TextInput from "./components/TextInput";

function App() {
  const [tasks, setTasks] = useState(['mock task', 'another mock task', 'do laundry', 'adding new task works though']);
  const [categories, setCategories] = useState(['mock category', 'Work', 'Personal', 'adding new categories works']);
  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setNewCategory(event.target.value);
  }

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if(newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }

  const handleCategorySubmit = (event) => {
    event.preventDefault();
    if(newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  }

  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <form onSubmit={handleCategorySubmit}>
          <TextInput placeholder="Enter category name..." value={newCategory} onChange={handleCategoryChange} />
          <PrimaryButton text="Add" />
        </form>
        <div className="flex gap-2 items-center">
          <input type="checkbox" id="showDoneCheckbox"/>
          <label htmlFor="showDoneCheckbox">Show Done</label>
        </div>
        <div>
        <TextInput placeholder="Search..." />
        </div>
        <form onSubmit={handleTaskSubmit}>
          <TextInput placeholder="Add a new task..." value={newTask} onChange={handleTaskChange} />
          <PrimaryButton text="Save" />
        </form>
      </div>
      <div className="flex h-[550px] mt-5 gap-3">
        <div className="w-2/5 p-10 border-2 overflow-scroll">
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="p-2 border-[1px] my-2">{category}</li>
            ))}
          </ul>
        </div>
        <div className="w-3/5 p-10 border-2 overflow-scroll">
          <ul>
            {tasks.map((task, index) => (
              <div className="flex items-center gap-2">
                <li key={index} className="p-2 border-[1px] my-2 w-full">
                  {task}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
