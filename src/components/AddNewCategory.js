import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";

function AddNewCategory({ handleCategoryChange, handleCategorySubmit, newCategory }) {
  return (
    <form onSubmit={handleCategorySubmit} className="mb-10">
      <TextInput placeholder="Enter category name..." value={newCategory} onChange={handleCategoryChange} />
      <PrimaryButton text="Add" />
    </form>
  );
}

export default AddNewCategory;