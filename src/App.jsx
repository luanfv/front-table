import React , {useState, useEffect} from 'react'

import Header from './components/Header';
import Title from './components/Title'
import Table from './components/Table'

import GlobalStyles from './styles/GlobalStyles';

export default function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("http://localhost:5000/employess");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    const filterName = employees.filter((employe) => employe.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setEmployees(filterName);
  };

  const handleSubmit = () => {
    window.location.reload(); 
  }

  return (
    <>
      <Header />
      <Title 
        desc='Funcionários' 
        input ='Pesquisar' 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
      <Table employees={employees}/>
      <GlobalStyles />
    </>
  );
}
