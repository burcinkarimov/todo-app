import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

function CategoriesListItem({ category, handleDeleteCategory, handleSubcategorySubmit}) {
  return (
    <div>
      <li className="p-2 border-[1px] my-2 flex items-center justify-between">
        <p className="p-2">{category.name}</p>
        <div className="flex gap-1">
          <div onClick={() => handleSubcategorySubmit(category.id, category)}>
            <FontAwesomeIcon icon={faPlus} className="p-2 border-[1px]  text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
          </div>
          <div onClick={() => handleDeleteCategory(category.id)}>
            <FontAwesomeIcon icon={faTrash} className="p-2 border-[1px] text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
          </div>
        </div>
      </li>

      {category.subcategories.map((subcategory) => (
        <div className="ml-5" key={subcategory.id}>
          <CategoriesListItem 
            category={subcategory} 
            handleDeleteCategory={handleDeleteCategory} 
            handleSubcategorySubmit={handleSubcategorySubmit}
          />
        </div>
      ))}

  </div>
  );
}

export default CategoriesListItem;