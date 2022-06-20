import React, { useEffect, useState } from "react";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setInCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

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

  // function to click complete button
  const onClickComplete = (index) => {
    const newInComepleteTodos = [...incompleteTodos];
    newInComepleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setInCompleteTodos(newInComepleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // function to click back button
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInComepleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newInComepleteTodos);
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
                <button onClick={() => onClickComplete(index)}>
                  completed
                </button>
                <button onClick={() => onClickDelete(index)}>delete</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">completed todos</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
