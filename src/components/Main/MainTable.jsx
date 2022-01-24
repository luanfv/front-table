import React, { useEffect, useState } from "react";

//custom style
import "./css/MainTable.css";
import "./css/MainInputSearch.css";

const MainTable = (props) => {
  const [item, setItem] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const URL = "http://localhost:3000/employess";

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = item.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(item);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
          console.log("Error getting fake data: " + error);
        });
      setItem(result);
    };

    const filterData = async () => {
      const result = await fetch(URL)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
          console.log("Error getting fake data: " + error);
        });
    };

    fetchData();
    filterData();
  }, []);

  return (
    <>
      <form className="main__search">
        <input
          type="text"
          placeholder="Pesquisar"
          onChange={(e) => searchItems(e.target.value)}
        />

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
            fill="#7D7D7D"
          />
        </svg>
      </form>
      <table className="main__table">
        <thead>
          <tr className="main__table-title">
            <th className="main__th-foto">Foto</th>
            <th className="main__th-nome">Nome</th>
            <th className="main__th-cargo">Cargo</th>
            <th className="main__th-admissao">Data de Admissão</th>
            <th className="main__th-telefone">Telefone</th>
          </tr>
        </thead>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <tbody key={item.id}>
                  <tr className="main__table-data">
                    <td className="main__table-data-img">
                      <img
                        src={item.image}
                        alt={`${item.name} developer ${item.job}`}
                      />
                    </td>
                    <td className="main__table-data-nome">{item.name}</td>
                    <td className="main__table-data-cargo">{item.job}</td>
                    <td className="main__table-data-admissao">
                      {item.admission_date}
                    </td>
                    <td className="main__table-data-telefone">{item.phone}</td>
                  </tr>
                </tbody>
              );
            })
          : item.map((item) => {
              return (
                <tbody key={item.id}>
                  <tr className="main__table-data">
                    <td className="main__table-data-img">
                      <img
                        src={item.image}
                        alt={`${item.name} developer ${item.job}`}
                      />
                    </td>
                    <td className="main__table-data-nome">{item.name}</td>
                    <td className="main__table-data-cargo">{item.job}</td>
                    <td className="main__table-data-admissao">
                      {item.admission_date}
                    </td>
                    <td className="main__table-data-telefone">{item.phone}</td>
                  </tr>
                </tbody>
              );
            })}
      </table>
    </>
  );
};

export default MainTable;
