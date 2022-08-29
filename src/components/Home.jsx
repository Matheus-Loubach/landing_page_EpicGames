import React from 'react'
import Carousel from 'better-react-carousel'
import Logo from '../assents/fundo.png';
import imagem3 from '../assents/Capa_jogos/image 3.png';
import imagem4 from '../assents/Capa_jogos/image4.png';
import imagem8 from '../assents/Capa_jogos/image 8.png';
import imagem7 from '../assents/Capa_jogos/image 7.png';
import imagem6 from '../assents/Capa_jogos/image 6.png';
import imagem5 from '../assents/Capa_jogos/image 5.png';
import imagem9 from '../assents/Capa_jogos/image 9.png';
import imagem10 from '../assents/Capa_jogos/image 10.png';
import imagem11 from '../assents/Capa_jogos/image 11.png';
import imagem12 from '../assents/Capa_jogos/image 12.png';
import imagem13 from '../assents/Capa_jogos/image 13.png';
import imagem14 from '../assents/Capa_jogos/image 14.png';
import imagem15 from '../assents/Capa_jogos/image 15.png';
import imagem18 from '../assents/Capa_jogos/image 18.png';
import imagem19 from '../assents/Capa_jogos/image 19.png';
import imagem20 from '../assents/Capa_jogos/image 20.png';
import imagem21 from '../assents/imagem21.png';
import Facebook from '../assents/icone/Vector1.png';
import Tt from '../assents/icone/Vector2.png';
import Youtube from '../assents/icone/Vector3.png';
import imagem24 from '../assents/icone/image 24.png';





const novo = 'NOVO NA EPIC';

const Home = () => {
  return (
    <div>
      <header>
        <div id="background"> 
        <div className='container'>
        <img className='logo' src={Logo} alt="logo"/>
        <nav className='menu'>
          <ul>
          <li><a href="#">Store ▽</a>
           <ul className='sub-menu'>
           <li><a href="#">Jogos</a></li>
           <li><a href="#">Lançamentos</a></li>                           
           </ul>
            </li>

           <li><a href="#">Perguntas Frequentes ▽</a>
           <ul className='sub-menu'>
           <li><a href="#">Perguntas</a></li>
           <li><a href="#">Novas</a></li>                           
           </ul>
            </li>

             <li><a href="#">Ajuda ▽</a>
             <ul className='sub-menu'>
           <li><a href="#">Help</a></li>
           <li><a href="#">Atendimento</a></li>                           
           </ul>
            </li>

            <li><a href="#">Unreal Engine </a></li>

            <li><a href="#">Suporte ▽</a>
            <ul className='sub-menu'>
           <li><a href="#">Contato</a></li>                         
           </ul>

          </li>
            <li className='iniciar'><a href="#">Iniciar Sessão</a></li>  
          <li className='baixar'><a href="#">Baixar Epic Games</a></li>
          
          </ul>

        </nav>
        
        </div>

        <div id='capa_war'>
        <img src={imagem3} alt="god of war" />
        <h1>God of War é uma série de jogos eletrônicos de ação e aventura baseada nas mitologias grega e nórdica. Estreando em 2005, a série tornou-se um título emblemático para a marca PlayStation, e Kratos é um dos seus personagens mais populares. </h1>
        </div>
        </div>
      </header>

     <section className='meio'>
      <div className='container_meio'>
      <h1>Jogos em promoção</h1>
      <p className='opac' style={{borderBottom: '1px solid #2681FF'}} >Novos lançamentos</p>
      <p className='opac'>Mais vendidos</p>
      <p className='opac'>Em breve</p>
      <p id='ofertas'>Descubra mais ofertas</p>
      </div>
     </section>

     <section className='carros'>
     <Carousel cols={6} rows={1} gap={6} loop={1000}>
   
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

     <section>
      <article className='not_container'>
        <div className='capa_1'>
         <img src={imagem10} alt="capa noticia" />
         <div className='textDiv1'>
         <label >Liquidação de Corrida da Ubisoft</label>
         <p>Economize até 80% em jogos de corrida, incluindo Riders Republic, The Crew 2 e Steep. Termina em 11 de agosto.</p>
         </div>
        </div>
        <div className='capa_1'>
         <img src={imagem11} alt="capa noticia" />
         <div className='textDiv1'>
         <label >Rocket League</label>
         <p>Pegue as trilhas com o Pacote Ford Bronco Raptor RLE!</p>
         </div>
        </div>
        <div className='capa_1'>
         <img src={imagem12} alt="capa noticia" />
         <div className='textDiv1'>
         <label>Genshin Impact - Versão 2.8</label>
         <p>Esta atualização chega com grandes aventuras, trajes elegantes e histórias intrigantes sobre Shikanoin Heizou e amigos!</p>
         </div>
        </div>
      </article>
     </section>

     <section>
     <article id='barra' className='meio'>
      <div className='container_meio'>
      <h1>Navegue pela Epic</h1>
      <p className='opac'  style={{borderBottom: '1px solid #2681FF'}}>Atualizado recentemente</p>
      <p className='opac'>Mais populares</p>
      <p id='ofertas'>Ainda não conhece a epic?</p>
      </div>
     </article>

<section className='nav_epic'>

<div className='container_nav1'>     

<div className='imagem_jogos'>
<img src={imagem13} alt="jogosNovos"/>
<div className="fundo_texto">
<p className='novoEpic'>{novo}</p>
<p class="subTitulo">Frugon</p>
<p className='promo'>R$ 5,99</p>
<labe>R$ 3,99</labe>
</div>
</div>

<div className='imagem_jogos'>
<img src={imagem14} alt="jogosNovos"/>
<div className="fundo_texto">
<p className='novoEpic'>{novo}</p>
<p class="subTitulo">Judas</p>
<p className='promo'>R$ 5,99</p>
<labe>R$ 3,99</labe>
</div>
</div>

<div className='imagem_jogos'>
<img src={imagem15} alt="jogosNovos"/>
<div className="fundo_texto">
<p className='novoEpic'>{novo}</p>
<p class="subTitulo">GigaBash</p>
<p className='promo'>R$ 5,99</p>
<labe>R$ 3,99</labe>
</div>
</div>
</div>


<div className='container_nav'>     

<div className='imagem_jogos'>
<img src={imagem18} alt="jogosNovos"/>
<div className="fundo_texto">
<p className='novoEpic'>{novo}</p>
<p class="subTitulo">Farcry 6</p>
<p className='promo'>R$ 5,99</p>
<labe>R$ 3,99</labe>
</div>
</div>


<div className='imagem_jogos'>
<img src={imagem19} alt="jogosNovos"/>
<div className="fundo_texto">
<p className='novoEpic'>{novo}</p>
<p class="subTitulo">Retreat To Enen</p>
<p className='promo'>R$ 5,99</p>
<labe>R$ 3,99</labe>
</div>
</div>

<div className='imagem_jogos'>
<img src={imagem20} alt="jogosNovos"/>
<div className="fundo_texto">
<p className='novoEpic'>{novo}</p>
<p class="subTitulo">Aftergrinder</p>
<p className='promo'>R$ 5,99</p>
<labe>R$ 3,99</labe>
</div>
</div>

</div>

</section>
</section>

    <section  id='background2'>
      <div>
      <h3>Explore nosso catalogo</h3>
      <p>Pesquise por gênero, características, preço e muito mais para encontrar seu próximo jogo favorito.</p>
      <button>SAIBA MAIS ➤ </button>
      </div>
      <div>
      <img src={imagem21} alt="" />
      </div>
    </section>

    <footer className='footer_container'>
      <div  id='barra' className='footer'>
      <div className='logo_footer'>
      <img src={Logo}></img>
      </div>
      <div>
      <img src={Facebook}></img>
      </div>
      <div>
      <img src={Tt}></img>
      </div>
      <div>
      <img src={Youtube}></img>
      </div>
      </div>
      <section id='barra' className='dados'>
      <div>
      <p className='tit_footer'>Recursos</p>
      <ul>
        <li>Apoie-um-Criador</li>
        <li>Publicar na Epic Games</li>
        <li>Carreiras</li>
        <li>Empresa</li>
      </ul>
      </div>
      <div>
      <ul>
        <li>Política de Fanart</li>
        <li>UX Research</li>
        <li>EULA da Loja</li>
      </ul>
      </div>
      <div>
      <ul>
        <li>Serviços On-line</li>
        <li>Regras da Comunidader</li>
        <li>Epic Newsroom</li>
      </ul>
      </div>
      <div>     
      <p className='tit_footer'>Feito pela Epic Games</p>
      <ul>
        <li>Battle Breakers</li>
        <li>Fortnite</li>
        <li>Infinity Blade</li>
      </ul>
      </div>
      <div>
      <ul>
        <li>Robo Recall</li>
        <li>Shadow Complex</li>
        <li>Unreal Tournament</li>
      </ul>
      </div>
      <p className='epicUnrealIcon'><img src={imagem24}/> </p>
      </section>
      <p>© 2022, Epic Games, Inc. Todos os direitos reservados. Epic, Epic Games, o logotipo da Epic Games, Fortnite, o logotipo do Fortnite, Unreal, Unreal Engine, o logotipo do Unreal Engine, Unreal Tournament e o logotipo do Unreal Tournament são marcas comerciais ou registradas da Epic Games, Inc. nos Estados Unidos da América e em outros lugares. Outras marcas e nomes de produtos são marcas registradas de seus respectivos donos. Transações para além dos EUA são feitas através da Epic Games International, S.à r.l.   </p>
      <p>Developed by: <a href="https://www.linkedin.com/in/matheus-loubach/">Matheus Loubach</a> / Redesigner By: <a href="https://www.linkedin.com/in/elias-coelho-287628178/"> Elias Coelho</a></p>
     </footer>

</div>
  )
}

export default Home