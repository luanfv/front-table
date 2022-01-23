import React, { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export default function CtxApp({ children }) {
  const [funcionarios, setFuncionarios] = useState([]);
  return (
    <Context.Provider value={{ funcionarios, setFuncionarios }}>
      {children}
    </Context.Provider>
  );
}

export { Context, CtxApp };
