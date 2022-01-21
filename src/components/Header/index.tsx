import Logo from '../../assets/images/Logo.svg';
import {Container} from './style'



export const Header = () =>{
  return(
    <Container>
      <img src={Logo}/> 
    </Container>
  )
}