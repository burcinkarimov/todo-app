import CategoriesListItem from "./CategoriesListItem";

function CategoriesList({ categories }) {
  return (
    <ul>
      {categories.map((category, index) => (
        <CategoriesListItem category={category} key={index} />
      ))}
    </ul>
  );
}

export default CategoriesList;