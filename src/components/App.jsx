import React from "react";

//components
import Header from "./Header/Header";
import Main from "./Main/Main";

//custom style
import "./App.css";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
};

export default App;
