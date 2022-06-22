import React, { useEffect, useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>Up to 5 TODOs can be registered</p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </React.Fragment>
  );
};

export default App;
