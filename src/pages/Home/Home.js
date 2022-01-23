import Funcionarios from "../../components/Funcionarios/Funcionarios";
import Navbar from "../../components/Navbar/Navbar";
import Pesquisa from "../../components/Pesquisa/Pesquisa";
import CtxApp from "../../context/CtxApp";
import "./App.css";

function App() {
  return (
    <>
      <CtxApp>
        <Navbar />
        <main>
          <Pesquisa />
          <Funcionarios />
        </main>
      </CtxApp>
    </>
  );
}

export default App;
