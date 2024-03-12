import CategoriesListItem from "./CategoriesListItem";

function CategoriesList({ categories, handleDeleteCategory }) {
  return (
    <ul>
      {categories.map((category, index) => (
        <CategoriesListItem category={category} key={index} index={index} handleDeleteCategory={handleDeleteCategory} />
      ))}
    </ul>
  );
}

export default CategoriesList;