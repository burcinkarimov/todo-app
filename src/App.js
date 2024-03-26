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
        name: newCategory.trim(),
        depth: 0, 
        subcategories: [],
      }
      setCategories([...categories, category])
      setNewCategory('');
    }
  }

  const handleSubcategorySubmit = (parentCategoryId, parentCategory) => {
    const newSubcategory = {
      id: v4(),
      name: `child of ${parentCategory.name}`,
      depth: parentCategory.depth + 1, 
      subcategories: [],
    };

    setCategories(prevCategories => 
      prevCategories.map(category => {
        if (category.id === parentCategoryId) {
          return {
            ...category,
            subcategories: [...category.subcategories, newSubcategory]
          } 
        } else if (category.subcategories.length > 0) {
          return {
            ...category, 
            subcategories: addSubcategories(
              category.subcategories,
              parentCategoryId,
              newSubcategory,
              parentCategory.depth + 1
            )
          }
        } else {
          return category;
        }
      })
    );
  };
  
  const addSubcategories = (subcategories, parentCategoryId, newSubcategory, parentDepth) => {
    return subcategories.map((category) => {
      if(category.id === parentCategoryId) {
        return { ...category, subcategories: [...category.subcategories, newSubcategory]}
      } else if (category.subcategories.length > 0) {
        return {
          ...category, 
            subcategories: addSubcategories(
              category.subcategories,
              parentCategoryId,
              newSubcategory,
              parentDepth
            )
        }
      } else {
        return category;
      }
    })
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const handleDeleteCategory = (catId) => {
    const deleteCategoryAndSubcategories = (categoriesArray) => {
      return categoriesArray.filter(category => {
        if (category.id === catId) {
          return false;
        }
        if (category.subcategories.length > 0) {
          category.subcategories = deleteCategoryAndSubcategories(category.subcategories);
        }
        return true;
      });
    };
  
    setCategories(prevCategories => deleteCategoryAndSubcategories(prevCategories));
  };

  return (
    <div className="p-4 md:p-10">
      <div className="block md:flex h-[550px] gap-2">
        <Categories 
          handleCategorySubmit={handleCategorySubmit}
          handleCategoryChange={handleCategoryChange}
          handleDeleteCategory={handleDeleteCategory}
          handleSubcategorySubmit={handleSubcategorySubmit}
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
