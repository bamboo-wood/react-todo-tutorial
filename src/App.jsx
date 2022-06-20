import React, { useEffect, useState } from "react";

const App = () => {
  return (
    <React.Fragment>
      <div className="input-area">
        <input placeholder="input todo" />
        <button>add</button>
      </div>
      <div className="incomplete-area">
        <p className="title">incomplete todos</p>
        <ul>
          <div className="list-row">
            <li>test todo</li>
            <button>completed</button>
            <button>delete</button>
          </div>
          <div className="list-row">
            <li>test todo</li>
            <button>completed</button>
            <button>delete</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">completed todos</p>
        <ul>
          <div className="list-row">
            <li>test todo</li>
            <button>back</button>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
