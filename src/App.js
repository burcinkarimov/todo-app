import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Categories from "./components/Categories";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
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
      const task = {
        id: v4(),
        text: newTask.trim(),
      }
      setTasks([...tasks, task]);
      setNewTask('');
    }
  }

  const handleCategorySubmit = (event) => {
    event.preventDefault();
    if(newCategory.trim() !== '') {
      const category = {
        id: v4(),
        text: newCategory.trim(),
      }
      setCategories([...categories, category]);
      setNewCategory('');
    }
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const handleDeleteCategory = (catId) => {
    setCategories(categories.filter(category => category.id !== catId))
  }

  return (
    <div className="p-4 md:p-10">
      <div className="block md:flex h-[550px] gap-2">
        <Categories 
          handleCategorySubmit={handleCategorySubmit}
          handleCategoryChange={handleCategoryChange}
          handleDeleteCategory={handleDeleteCategory}
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
