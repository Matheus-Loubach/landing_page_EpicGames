import {Container} from './MobileMenuStyles';
import Fechar from '../assents/icone/icons8-xbox-x-50.png'


const MenuMobile = ({menuOn, setMenuOn, logo} ) => {
  return (

    <Container IsVisible={menuOn}>
     <img src={Fechar} onClick={() => setMenuOn(false)}/>
      <nav>
          <ul>
          <li><img src={logo}/></li>
          <li><a href="#">Iniciar Sessão</a></li>  
          <li><a href="#">Store</a></li>
          <li><a href="#">Perguntas Frequentes</a></li>
          <li><a href="#">Ajuda</a></li>   
          <li><a href="#">Unreal Engine </a></li>
          <li><a href="#">Suporte</a></li>
          
          </ul>          
        </nav>    
    </Container>
    
  )
}

export default MenuMobile