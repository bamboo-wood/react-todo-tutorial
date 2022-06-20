import React, { useEffect, useState } from "react";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setInCompleteTodos] = useState(["aaaa", "bbbb"]);
  const [completeTodos, setCompleteTodos] = useState(["cccc"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // function to click add button
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  };

  // function to click delete button
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };

  return (
    <React.Fragment>
      <div className="input-area">
        <input
          placeholder="input todo"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">incomplete todos</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>completed</button>
                <button onClick={() => onClickDelete(index)}>delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">completed todos</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
