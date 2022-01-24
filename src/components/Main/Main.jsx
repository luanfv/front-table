import React from "react";

//components
import MainTitle from "./MainTitle";
import MainTable from "./MainTable";

const Main = (props) => {
  return (
    <main className="main">
      <MainTitle />
      <MainTable />
    </main>
  );
};

export default Main;
