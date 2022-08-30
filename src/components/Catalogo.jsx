
import '../ComponentsCSS/CatalogoCSS.css'

import imagem13 from '../assents/Capa_jogos/image 13.png';
import imagem14 from '../assents/Capa_jogos/image 14.png';
import imagem15 from '../assents/Capa_jogos/image 15.png';
import imagem18 from '../assents/Capa_jogos/image 18.png';
import imagem19 from '../assents/Capa_jogos/image 19.png';
import imagem20 from '../assents/Capa_jogos/image 20.png';
import imagem21 from '../assents/imagem21.png';



const Catalogo = ({novo}) => {
  return (
    <div>

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
<p class="subTitulo">Retreat</p>
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

    <section id='background2'>
      <div>
      <h3>Explore nosso catalogo</h3>
      <p>Pesquise por gênero, características, preço e muito mais para encontrar seu próximo jogo favorito.</p>
      <button>SAIBA MAIS ➤ </button>
      </div>
      <div>
      <img src={imagem21} alt="" />
      </div>
    </section>
    </div>
  )
}

export default Catalogo