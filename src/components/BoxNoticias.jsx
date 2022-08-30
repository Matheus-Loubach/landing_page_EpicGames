import React from 'react'
import imagem10 from '../assents/Capa_jogos/image 10.png';
import imagem11 from '../assents/Capa_jogos/image 11.png';
import imagem12 from '../assents/Capa_jogos/image 12.png';


const BoxNoticias = () => {
  return (
    <div>
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

    
    </div>
  )
}

export default BoxNoticias