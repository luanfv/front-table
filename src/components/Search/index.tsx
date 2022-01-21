import {Container} from './style'
import {useState} from 'react'



export const Search = () =>{
  const [search, setSearch] = useState('');


  return (
    <Container>
      <p>Funcionários</p>
      <input 
      type="text" 
      placeholder="Pesquisar"
      onChange={(e)=> setSearch(e.target.value)}
      />
    </Container>
  )
}