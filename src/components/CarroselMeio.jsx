import React from 'react'
import imagem4 from '../assents/Capa_jogos/image4.png';
import imagem8 from '../assents/Capa_jogos/image 8.png';
import imagem7 from '../assents/Capa_jogos/image 7.png';
import imagem6 from '../assents/Capa_jogos/image 6.png';
import imagem5 from '../assents/Capa_jogos/image 5.png';
import imagem9 from '../assents/Capa_jogos/image 9.png';

import Carousel from 'better-react-carousel';

const CarroselMeio = ({novo}) => {
  return (
    <div>
       <section className='meio'>
      <div className='container_meio'>
      <h1>Jogos em promoção</h1>
      <p className='opac' style={{borderBottom: '3px solid #2681FF'}} >Novos lançamentos</p>
      <p className='opac'>Mais vendidos</p>
      <p id='ofertas'>Descubra mais ofertas</p>
      </div>
     </section>

     <section className='carros'>
     <Carousel cols={6} rows={1} gap={2} loop={1000}>
   
     <Carousel.Item> <div className='detalhes_promo'><img width="176px" height="235.05px" src={imagem4} alt='a'/><p className='descricao_promo'>Return... <p className='novoEpic'>{novo}</p></p><span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div> </Carousel.Item>
      <Carousel.Item><div className='detalhes_promo'><img width="176px" height="235.05px" src={imagem8}/><p className='descricao_promo'>Century <p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div></Carousel.Item>
      <Carousel.Item><div className='detalhes_promo'><img width="176px" height="235.05px" src={imagem9}/><p className='descricao_promo'>Eve on... <p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div></Carousel.Item>
      <Carousel.Item> <div className='detalhes_promo'><img width="176px" height="235.05px"  src={imagem7}/><p className='descricao_promo'>Judas <p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div> </Carousel.Item>
      <Carousel.Item><div className='detalhes_promo'><img width="176px" height="235.05px"  src={imagem6}/><p className='descricao_promo'>Retr..<p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div></Carousel.Item>
      <Carousel.Item><div className='detalhes_promo'><img width="176px" height="235.05px"  src={imagem5}/><p className='descricao_promo'>Chern... <p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div></Carousel.Item>
      <Carousel.Item> <div className='detalhes_promo'><img width="176px" height="235.05px" src={imagem4} alt='a'/><p className='descricao_promo'>Return...<p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div> </Carousel.Item>
      <Carousel.Item><div className='detalhes_promo'><img width="176px" height="235.05px" src={imagem8}/><p className='descricao_promo'>Century <p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div></Carousel.Item>
      <Carousel.Item><div className='detalhes_promo'><img width="176px" height="235.05px" src={imagem9}/><p className='descricao_promo'>Eve on... <p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div></Carousel.Item>
      <Carousel.Item> <div className='detalhes_promo'><img width="176px" height="235.05px"  src={imagem7}/><p className='descricao_promo'>Judas<p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div> </Carousel.Item>
      <Carousel.Item><div className='detalhes_promo'><img width="176px" height="235.05px"  src={imagem6}/><p className='descricao_promo'>Retr...<p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div></Carousel.Item>
      <Carousel.Item><div className='detalhes_promo'><img width="176px" height="235.05px"  src={imagem5}/><p className='descricao_promo'>Chern...<p className='novoEpic'>{novo}</p></p> <span className='promo'>R$ 5,99</span> <labe>R$ 3,99</labe> </div></Carousel.Item>
      </Carousel>
     </section>
    </div>
  )
}

export default CarroselMeio