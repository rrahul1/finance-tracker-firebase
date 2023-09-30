import { useState } from "react";
import { useAddTodo } from "../../hooks/useAddTodo";
import { useGetTodo } from "../../hooks/useGetTodo";

export const TodoList = () => {
  const { addTodo } = useAddTodo();
  const { todoList } = useGetTodo();

  const [description, setDescription] = useState("");
  const [type, setType] = useState("priority");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDescription("");
    addTodo({
      description,
      type,
    });
  };

  return (
    <>
      <div className="todo">
        <div className="container">
          <h1>Todo List </h1>
          <div className="list">
            <h3>Your Tasks</h3>
            <h2>Priority Task</h2>
          </div>
          <div className="summary">
            <div className="priority">
              <h4>Priority</h4>
            </div>
          </div>
          <form className="add-todo" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add Task"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="priority">Priority</label>
            <input
              type="radio"
              id="priority"
              value="priority"
              checked={type === "priority"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="basic">Basic</label>
            <input
              type="radio"
              id="basic"
              value="basic"
              checked={type === "basic"}
              onChange={(e) => setType(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      <div className="added-list">
        <h3>Todo List</h3>
        <ul>
          {todoList.map((todo) => {
            const { description, type } = todo;

            return (
              <li>
                <h4>{description}</h4>
                <p>
                  <label>{type}</label>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
