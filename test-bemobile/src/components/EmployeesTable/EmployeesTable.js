import "./EmployeesTable.css";

const EmployeesTable = (props) => {
  const {
    employees,
    // name = "nome",
    // job = "cargo",
    // admissionDate = "Data de admissão",
    // phone = "Telefone",
    // image = "foto",
  } = props;
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
              <td>{employee.admission_date}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}

          {/* <tr>
            <td>
              <img className="employee-image" src={image} alt="EmployeePhoto" />
            </td>
            <td>{name}</td>
            <td>{job}</td>
            <td>{admissionDate}</td>
            <td>{phone}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;
