import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  onHandledDeleteTodo,
  onHandledCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button
        className="check-btn"
        onClick={() => {
          onHandledCheckedTodo(data);
        }}
      >
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandledDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
