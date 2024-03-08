import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function ShowDone() {
  return (
    <div className="flex gap-2 items-center mx-1">
      <FontAwesomeIcon icon={faCheck} className="p-2 mr-2 border-[1px] text-amber-200 hover:text-amber-400 cursor-pointer" />
      <p>Show Done</p>
    </div>
  );
}

export default ShowDone;