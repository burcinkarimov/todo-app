import CategoriesListItem from "./CategoriesListItem";

function CategoriesList({ handleSubcategorySubmit, categories, handleDeleteCategory }) {
  return (
    <ul>
      {categories.map((category) => (
        <CategoriesListItem 
          category={category} 
          key={category.id} 
          handleSubcategorySubmit={handleSubcategorySubmit} 
          handleDeleteCategory={handleDeleteCategory} 
        />
      ))}
    </ul>
  );
}

export default CategoriesList;