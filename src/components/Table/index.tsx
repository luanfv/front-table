import {useState, useEffect} from 'react'
import {useSearch} from '../../hooks/useSearch'
import {api} from '../../services/api'

import {Container} from './style'


export const Table = () => {
  const [search, setSearch] = useState('');
  const {peoples, setPeoples, PhoneFormat} = useSearch();


  useEffect(()=>{

    api.get(`/employess?q=${search}`)
    .then(res=> setPeoples(res.data))
    console.log(peoples)
  },[search])


  return(
    <Container>
     <div className="Search">
       <p>Funcionários</p>
       <input
       type="search"
       placeholder="Pesquisar"
       value={search}
       onChange={(e)=>setSearch(e.target.value)}/>
     </div>

     <div className="Table-header">
         <p className="--icon">Foto</p>
          <p className="--name">Nome</p>
          <p className="--job">Cargo</p>
          <p className="--date">Data de admissão</p>
          <p className="--phone">Telefone</p>
     </div>

   {peoples.map(itens =>{
        return(
      <div className="Table-item" key={itens.id}>
        <img className="--item-icon" src={itens.image}/>
         <p className="--item-name">{itens.name}</p>
         <p className="--item-job">{itens.job}</p>
         <p className="--item-date">{new Intl.DateTimeFormat('pt-BR')
         .format(new Date (itens.admission_date))}</p>
         <p className="--item-phone">{PhoneFormat(itens.phone)}</p>
     </div>
      )})}
    </Container>
  )
}
