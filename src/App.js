import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Categories from "./components/Categories";

function App() {
  const [tasks, setTasks] = useState(['mock task', 'another mock task', 'do laundry', 'adding new task works though']);
  const [categories, setCategories] = useState(['mock category', 'Work', 'Personal', 'adding new categories works']);
  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleCategoryChange = (event) => {
    setNewCategory(event.target.value);
  }

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
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

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className="p-4 md:p-10">
      <div className="block md:flex h-[550px] gap-2">
        <Categories 
          handleCategorySubmit={handleCategorySubmit}
          handleCategoryChange={handleCategoryChange}
          newCategory={newCategory}
          categories={categories}
        /> 
        <Dashboard 
          handleTaskSubmit={handleTaskSubmit}
          handleTaskChange={handleTaskChange}
          handleDeleteTask={handleDeleteTask}
          newTask={newTask}
          tasks={tasks}
        />
      </div>
    </div>
  );
}

export default App;
