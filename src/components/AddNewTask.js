import PrimaryButton from "./PrimaryButton";
import TextInput from "./TextInput";

function AddNewTask({ handleTaskChange, handleTaskSubmit, newTask }) {
  return (
    <form onSubmit={handleTaskSubmit} className="mx-1">
      <TextInput placeholder="Add a new task..." value={newTask} onChange={handleTaskChange} />
      <PrimaryButton text="Save" />
    </form>
  );
}

export default AddNewTask;