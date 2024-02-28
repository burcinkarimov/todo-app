import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';

function TasksList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="p-2 border-[1px] my-2 flex items-center">
          <FontAwesomeIcon icon={faCheck} className="p-2 mr-4 border-[1px] text-amber-200 hover:text-amber-400 cursor-pointer" />
          <p>{task}</p>
          <FontAwesomeIcon icon={faPenToSquare} className="ml-auto p-2 border-[1px] text-indigo-400 hover:bg-indigo-600 hover:text-white cursor-pointer" />
        </li>
      ))}
    </ul>
  );
}

export default TasksList;