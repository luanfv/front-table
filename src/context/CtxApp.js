import React, { useState } from "react";
import { createContext } from "react";

const Context = createContext();

export default function CtxApp({ children }) {
  const [funcionarios, setFuncionarios] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [limite] = useState(8);

  return (
    <Context.Provider
      value={{ funcionarios, setFuncionarios, pagina, setPagina, limite }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, CtxApp };
