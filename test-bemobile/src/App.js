import "./App.css";
import EmployeesTable from "./components/EmployeesTable/EmployeesTable";
import BemobileHeader from "./components/BemobileHeader/BemobileHeader";
import getEmployees from "./services/employees";
import { useState, useEffect } from "react";
import { formatCellphone, formatAdmissionDate } from "./helpers/formatHelpers";

function App() {
  const [employees, seteEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  useEffect(() => {
    const request = async () => {
      const data = await getEmployees();
      seteEmployees(data);
    };
    request();
  }, []);
  useEffect(() => {
    const lowerFilter = filter.toLowerCase();
    setFilteredEmployees(
      employees.filter(
        (employee) =>
          (lowerFilter && employee.name.toLowerCase().includes(lowerFilter)) ||
          employee.job.toLowerCase().includes(lowerFilter) ||
          formatAdmissionDate(employee.admission_date).includes(filter) ||
          formatCellphone(employee.phone).includes(filter) //Ensure the search in all properties and in lower and Up Case
      )
    );
  }, [filter]);

  return (
    <>
      <div className="employess">
        <BemobileHeader />
        <div className="flex">
          <h1 className="employess-title">Funcionários </h1>
          <input
            className="employess-search"
            onChange={(event) => setFilter(event.target.value)}
            type="text"
            placeholder="Pesquisar"
          />
        </div>

        <EmployeesTable
          employees={filter !== "" ? filteredEmployees : employees}
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
