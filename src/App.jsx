
import HeaderPC from './components/HeaderPC';
import CarroselMeio from './components/CarroselMeio';
import BoxNoticias from './components/BoxNoticias';
import Catalogo from './components/Catalogo';
import Footer from './components/Footer';
import { useState } from 'react';
import MenuMobile from './components/MenuMobile';

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

  const [menuOn, setMenuOn] = useState(false) 

  return (
    <>
      <MenuMobile
       menuOn={menuOn} setMenuOn={setMenuOn}
      />
      <HeaderPC setMenuOn={setMenuOn}/>
      <CarroselMeio  novo={novo}/>
      <BoxNoticias/>
      <Catalogo novo={novo}/>
      <Footer Facebook={Facebook} Tt={Tt} Youtube={Youtube} IconeEpic={imagem24}/>     
    </>
  );
}

export default App;
