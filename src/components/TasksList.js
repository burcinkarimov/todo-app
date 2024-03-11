import TasksListItem from "./TasksListItem";

function TasksList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TasksListItem task={task} key={index} /> 
      ))}
    </ul>
  );
}

export default TasksList;