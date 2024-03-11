import TextInput from './TextInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    <div className="flex relative justify-center mx-1">
      <TextInput placeholder="Search..." />
      <FontAwesomeIcon icon={faXmark} className="absolute right-2 top-2 py-1 px-2 border-[1px] text-indigo-400 hover:text-indigo-500 cursor-pointer" />
    </div>
  );
}

export default SearchBar;