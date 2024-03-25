import CategoriesList from "./CategoriesList";
import AddNewCategory from "./AddNewCategory";

function Categories({ handleSubCategorySubmit, handleCategoryChange, handleCategorySubmit, handleDeleteCategory, newCategory, categories }) {
  return (
    <div className="w-full md:w-1/3 p-4 gap-3 overflow-scroll shadow-lg bg-gray-50">
      <AddNewCategory 
        handleCategoryChange={handleCategoryChange} 
        handleCategorySubmit = {handleCategorySubmit}
        newCategory={newCategory}
      />
      <CategoriesList 
        categories={categories} 
        handleSubCategorySubmit={handleSubCategorySubmit} 
        handleDeleteCategory={handleDeleteCategory} 
      /> 
    </div>
  );
}

export default Categories;