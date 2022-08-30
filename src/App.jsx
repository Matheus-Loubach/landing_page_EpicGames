
import HeaderPC from './components/HeaderPC';
import CarroselMeio from './components/CarroselMeio';
import BoxNoticias from './components/BoxNoticias';
import Catalogo from './components/Catalogo';
import Footer from './components/Footer';



//CSS
import './ComponentsCSS/HeaderPC.css';
import './ComponentsCSS/CarroselMeio.css';
import './ComponentsCSS/BoxNoticias.css';
import './ComponentsCSS/CatalogoCSS.css';
import './ComponentsCSS/Footer.css';


//Icones
import Facebook from './assents/icone/Vector1.png';
import Tt from './assents/icone/Vector2.png';
import Youtube from './assents/icone/Vector3.png';
import imagem24 from './assents/icone/image 24.png';


const novo = 'NOVO NA EPIC';
function App(){
  return (
    <div>
      <HeaderPC/>
      <CarroselMeio  novo={novo}/>
      <BoxNoticias/>
      <Catalogo novo={novo}/>
      <Footer Facebook={Facebook} Tt={Tt} Youtube={Youtube} IconeEpic={imagem24}/>     
    </div>
  );
}

export default App;
