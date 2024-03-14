import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

function CategoriesListItem({ category, handleDeleteCategory, index}) {
  return (
    <li className="p-2 border-[1px] my-2 flex items-center justify-between">
      <p>{category.text}</p>
      <div className="flex gap-1">
        <FontAwesomeIcon icon={faPlus} className="p-2 border-[1px]  text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
        <div onClick={() => handleDeleteCategory(index)}>
          <FontAwesomeIcon icon={faTrash} className="p-2 border-[1px] text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
        </div>
      </div>
    </li>
  );
}

export default CategoriesListItem;