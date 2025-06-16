import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ key, data, onHandledDeleteTodo }) => {
  return (
    <li key={key} className="todo-item">
      <span>{data}</span>
      <button className="check-btn">
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandledDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
