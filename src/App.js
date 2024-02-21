import { useState } from "react";
import PrimaryButton from "./components/PrimaryButton";
import TextInput from "./components/TextInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faPenToSquare, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faCheck} className="p-2 mr-2 border-[1px] text-amber-200 hover:bg-amber-200 hover:text-white cursor-pointer" />
          <p>Show Done</p>
        </div>
        <div className="relative">
          <TextInput placeholder="Search..." />
          <FontAwesomeIcon icon={faXmark} className="absolute right-2 top-2 py-1 px-2 border-[1px] text-indigo-400 hover:bg-indigo-600 hover:text-white cursor-pointer" />
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
              <li key={index} className="p-2 border-[1px] my-2 flex items-center justify-between">
                <p>{category}</p>
                <div className="flex gap-1">
                  <FontAwesomeIcon icon={faTrash} className="p-2 border-[1px] text-indigo-400 hover:bg-indigo-600 hover:text-white cursor-pointer" />
                  <FontAwesomeIcon icon={faPlus} className="p-2 border-[1px]  text-indigo-400 hover:bg-indigo-600 hover:text-white cursor-pointer" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/5 p-10 border-2 overflow-scroll">
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="p-2 border-[1px] my-2 flex items-center">
                <FontAwesomeIcon icon={faCheck} className="p-2 mr-4 border-[1px] text-amber-200 hover:bg-amber-200 hover:text-white cursor-pointer" />
                <p>{task}</p>
                <FontAwesomeIcon icon={faPenToSquare} className="ml-auto p-2 border-[1px] text-indigo-400 hover:bg-indigo-600 hover:text-white cursor-pointer" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
