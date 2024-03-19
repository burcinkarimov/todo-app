import CategoriesListItem from "./CategoriesListItem";

function CategoriesList({ handleSubCategorySubmit, categories, handleDeleteCategory, handleCategorySubmit }) {
  return (
    <ul>
      {categories.map((category) => (
        <CategoriesListItem category={category} key={category.id} handleSubCategorySubmit={handleSubCategorySubmit} handleDeleteCategory={handleDeleteCategory} handleCategorySubmit={handleCategorySubmit} />
      ))}
    </ul>
  );
}

export default CategoriesList;