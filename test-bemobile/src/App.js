import "./App.css";
import EmployeesTable from "./components/EmployeesTable/EmployeesTable";
import BemobileHeader from "./components/BemobileHeader/BemobileHeader";
import getEmployees from "./services/employees";
import { useState, useEffect } from "react";

function App() {
  const [employees, seteEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    const request = async () => {
      const data = await getEmployees();
      seteEmployees(data);
    };
    request();
  }, []);
  useEffect(() => {
    setFilteredItems(
      employees.filter(
        (employee) =>
          (filter && employee.name.includes(filter)) ||
          employee.job.includes(filter) ||
          employee.admission_date.includes(filter) ||
          employee.phone.includes(filter)
      )
    );
  }, [filter]);
  console.log(filteredItems);
  return (
    <>
      <div className="employess">
        <BemobileHeader />
        <p className="employess-title">Funcionários</p>
        <input
          onChange={(event) => setFilter(event.target.value)}
          type="text"
          placeholder="Pesquisar"
        />
        <EmployeesTable
          employees={filteredItems !== "" ? filteredItems : employees}
        />
      </div>
    </>
  );
}

export default App;

// const lowerBusca = busca.toLowerCase()

// const Filtradas = frutas.filter((frutas) => frutas.toLowerCase().includes(lowerBusca))

// <input
//   type="text"
//   value={busca}
//   onChange={(event) => setBusca(evente.target.value)}
// />;
