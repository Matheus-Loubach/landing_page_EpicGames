import React from 'react';
import imagem3 from '../assents/Capa_jogos/image 3.png';
import Logo from '../assents/fundo.png';
import '..components/HeaderPC.css'

const HeaderPC = () => {
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
    </div>
  )
}

export default HeaderPC