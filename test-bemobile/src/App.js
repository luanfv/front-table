import "./App.css";
import EmployeesTable from "./components/EmployeesTable/EmployeesTable";
import getEmployees from "./services/employees";
import { useState, useEffect } from "react";

function App() {
  const [employees, seteEmployees] = useState([]);
  useEffect(() => {
    const request = async () => {
      const data = await getEmployees();
      seteEmployees(data);
    };
    request();
  }, []);
  return (
    <div>
      <EmployeesTable employees={employees} />
    </div>
  );
}

export default App;
