import React, { useEffect, useState } from "react";

const App = () => {
  return (
    <React.Fragment>
      <div>
        <input placeholder="input todo" />
        <button>add</button>
      </div>
      <div>
        <p>incomplete todos</p>
        <ul>
          <li>test todo</li>
          <button>completed</button>
          <button>delete</button>

          <li>test todo</li>
          <button>completed</button>
          <button>delete</button>
        </ul>
      </div>
      <div>
        <p>completed todos</p>
        <ul>
          <li>test todo</li>
          <button>back</button>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default App;
