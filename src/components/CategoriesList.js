import CategoriesListItem from "./CategoriesListItem";

function CategoriesList({ categories, handleDeleteCategory }) {
  return (
    <ul>
      {categories.map((category) => (
        <CategoriesListItem category={category} key={category.id} index={category.id}  handleDeleteCategory={handleDeleteCategory} />
      ))}
    </ul>
  );
}

export default CategoriesList;