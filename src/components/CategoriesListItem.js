import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

function CategoriesListItem({category}) {
  return (
    <li className="p-2 border-[1px] my-2 flex items-center justify-between">
      <p>{category}</p>
      <div className="flex gap-1">
        <FontAwesomeIcon icon={faTrash} className="p-2 border-[1px] text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
        <FontAwesomeIcon icon={faPlus} className="p-2 border-[1px]  text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
      </div>
    </li>
  );
}

export default CategoriesListItem;