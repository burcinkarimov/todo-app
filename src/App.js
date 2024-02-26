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
    <div className="p-4 md:p-10">
      <div className="block md:flex h-[550px] gap-2">
        <div className="w-full md:w-2/5 p-4 gap-3 overflow-scroll shadow-lg">
            <form onSubmit={handleCategorySubmit} className="mb-10">
              <TextInput placeholder="Enter category name..." value={newCategory} onChange={handleCategoryChange} />
              <PrimaryButton text="Add" />
            </form>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="p-2 border-[1px] my-2 flex items-center justify-between">
                  <p>{category}</p>
                  <div className="flex gap-1">
                    <FontAwesomeIcon icon={faTrash} className="p-2 border-[1px] text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
                    <FontAwesomeIcon icon={faPlus} className="p-2 border-[1px]  text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
                  </div>
                </li>
              ))}
            </ul>
        </div>
        <div className="w-full md:w-3/5 mt-10 md:mt-0 p-4 gap-3 overflow-scroll shadow-lg">
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
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="p-2 border-[1px] my-2 flex items-center">
                <FontAwesomeIcon icon={faCheck} className="p-2 mr-4 border-[1px] text-amber-200 hover:text-amber-400 cursor-pointer" />
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
