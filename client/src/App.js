import React, { Fragment } from "react";
import "./App.css";

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment className="App">
      <div className="container bg-light">
        <InputTodo />
        <ListTodos />
        
      </div>
    </Fragment>
  );
}

export default App;
