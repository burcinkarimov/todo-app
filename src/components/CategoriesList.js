import CategoriesListItem from "./CategoriesListItem";

function CategoriesList({ handleSubCategorySubmit, categories, handleDeleteCategory }) {
  return (
    <ul>
      {categories.map((category) => (
        <CategoriesListItem 
          category={category} 
          key={category.id} 
          handleSubCategorySubmit={handleSubCategorySubmit} 
          handleDeleteCategory={handleDeleteCategory} 
        />
      ))}
    </ul>
  );
}

export default CategoriesList;