import { useState } from "react";

export const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 20 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  return (
    <div className="main-div">
      <h1>User List</h1>
      <ul>
        {users.map((curElem, index) => {
          return (
            <li key={index}>
              {curElem.name} - {curElem.age} year old
            </li>
          );
        })}
      </ul>
    </div>
  );
};
