import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function TasksListItem({ task }) {
  return (
    <li className="p-2 border-[1px] my-2 flex items-center">
      <FontAwesomeIcon icon={faCheck} className="p-2 mr-4 border-[1px] text-amber-200 hover:text-amber-400 cursor-pointer" />
      <p>{task}</p>
      <div className="flex gap-1 ml-auto">
        <FontAwesomeIcon icon={faPenToSquare} className="p-2 border-[1px] text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
        <FontAwesomeIcon icon={faTrash} className="p-2 border-[1px] text-indigo-400 hover:bg-indigo-500 hover:text-white cursor-pointer" />
      </div>
    </li>
  );
}

export default TasksListItem;