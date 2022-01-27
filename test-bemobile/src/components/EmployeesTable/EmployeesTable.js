import "./EmployeesTable.css";
import {
  formatCellphone,
  formatAdmissionDate,
} from "../../helpers/formatHelpers";
const EmployeesTable = (props) => {
  const { employees } = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table-header">
            <th>FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th>TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee) => (
            <tr>
              <td>
                <img
                  className="employee-image"
                  src={employee.image}
                  alt="EmployeePhoto"
                />
              </td>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{formatAdmissionDate(employee.admission_date)}</td>
              <td>{formatCellphone(employee.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;
