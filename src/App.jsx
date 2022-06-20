import React, { useEffect, useState } from "react";

const App = () => {
  const [incompleteTodos, setInCompleteTodos] = useState(["aaaa", "bbbb"]);
  const [completeTodos, setCompleteTodos] = useState(["cccc"]);

  return (
    <React.Fragment>
      <div className="input-area">
        <input placeholder="input todo" />
        <button>add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">incomplete todos</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>completed</button>
                <button>delete</button>
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
