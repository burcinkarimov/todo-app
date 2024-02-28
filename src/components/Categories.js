import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";
import CategoriesList from "./CategoriesList";

function Categories({ handleCategoryChange, handleCategorySubmit, newCategory, categories }) {
  return (
    <div className="w-full md:w-1/3 p-4 gap-3 overflow-scroll shadow-lg bg-gray-50">
      <form onSubmit={handleCategorySubmit} className="mb-10">
        <TextInput placeholder="Enter category name..." value={newCategory} onChange={handleCategoryChange} />
        <PrimaryButton text="Add" />
      </form>

      <CategoriesList categories={categories} /> 
    </div>
  );
}

export default Categories;