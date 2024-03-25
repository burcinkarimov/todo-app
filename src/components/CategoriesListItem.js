import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

function CategoriesListItem({ category, handleDeleteCategory, handleSubCategorySubmit}) {
  return (
    <div>
      <li className="p-2 border-[1px] my-2 flex items-center justify-between">
        <p>{category.name}</p>
        <div className="flex gap-1">
          <div onClick={() => handleSubCategorySubmit(category.id)}>
            <FontAwesomeIcon icon={faPlus} className="p-2 border-[1px]  text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
          </div>
          <div onClick={() => handleDeleteCategory(category.id)}>
            <FontAwesomeIcon icon={faTrash} className="p-2 border-[1px] text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
          </div>
        </div>
      </li>

    {category.children.length > 0 && 
      <div className="ml-5">
        {category.children.map((childCategory, index) => {
          // console.log(childCategory);
          return (
            <CategoriesListItem 
              key={index}
              category={childCategory} 
              handleDeleteCategory={handleDeleteCategory} 
              handleSubCategorySubmit={() => handleSubCategorySubmit(childCategory.id)} 
            />
          );
        })}
      </div>
    }
  </div>
  );
}

export default CategoriesListItem;