import {Container, Card} from './style'

import {useSearch} from '../../hooks/useSearch'

export const DataTable = () =>{
  const {peoples} = useSearch();

  const PhoneFormat = (phone:string) =>{
    let array = phone.split('');
    array.splice(9,0, '-');
    array.splice(0,0, '+');
    array.splice(3,0,' ');
    array.splice(4,0,'(');
    array.splice(7,0,') ');

    array.join('')
    return array;

  }
  return(
    <Container>
      <div>
         <p className="--icon">Foto</p>
          <p className="--name">Nome</p>
          <p className="--job">Cargo</p>
          <p className="--date">Data de admissão</p>
          <p className="--phone">Telefone</p>
      </div>
        {peoples.map(itens =>{
        return(
      <Card key={itens.id}>
        <img className="--item-icon" src={itens.image}/>
         <p className="--item-name">{itens.name}</p>
         <p className="--item-job">{itens.job}</p>
         <p className="--item-date">{new Intl.DateTimeFormat('pt-BR')
         .format(new Date (itens.admission_date))}</p>
         <p className="--item-phone">{PhoneFormat(itens.phone)}</p>
     </Card>  
      )})}
      
    </Container>
  )
}