import TasksListItem from "./TasksListItem";

function TasksList({ tasks, handleDeleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TasksListItem task={task} key={index} index={index} handleDeleteTask={handleDeleteTask} /> 
      ))}
    </ul>
  );
}

export default TasksList;