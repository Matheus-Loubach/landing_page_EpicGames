import React from 'react'

const Footer = ({Facebook, Tt, Youtube, IconeEpic}) => {
  return (
    <div>
      
    <section className='footer_container'>
      <div  id='barra' className='footer'>
      <div className='logo_footer'>
      <img src={IconeEpic}></img>
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
      <div >
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
      <p className='epicUnrealIcon'><img src={IconeEpic}/> </p>
      </section>
      </section>
      <footer className='container_final'>
      <h4>© 2022, Epic Games, Inc. Todos os direitos reservados. Epic, Epic Games, o logotipo da Epic Games, Fortnite, o logotipo do Fortnite, Unreal, Unreal Engine, o logotipo do Unreal Engine, Unreal Tournament e o logotipo do Unreal Tournament são marcas comerciais ou registradas da Epic Games, Inc. nos Estados Unidos da América e em outros lugares. Outras marcas e nomes de produtos são marcas registradas de seus respectivos donos. Transações para além dos EUA são feitas através da Epic Games International, S.à r.l.   </h4>
      <p>Developed by: <a href="https://www.linkedin.com/in/matheus-loubach/">Matheus Loubach</a> / Redesigner By: <a href="https://www.linkedin.com/in/elias-coelho-287628178/"> Elias Coelho</a></p>
      </footer>
    </div>
  )
}

export default Footer