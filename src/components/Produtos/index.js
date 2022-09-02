import './Produtos.css'
import {useRef} from 'react'
import {Link} from 'react-router-dom'


export default function Produtos(){

    const carousel = useRef(null)

    function backButton(e){
        e.preventDefault()
       
        carousel.current.scrollLeft -= carousel.current.offsetWidth
      }
    
      function nextButton(e){
        e.preventDefault()
       
        carousel.current.scrollLeft += carousel.current.offsetWidth
      }


    return(
        <section className='section-produtos'>
            <h2>Produtos</h2>

            <div className='container-carousel'>
                  <div className='carousel' ref={carousel}>
                         <div className='img'>
                             <img src='https://www.showmetech.com.br/wp-content/uploads//2020/09/o-que-sao-workstations-conheca-o-computador-super-potente-e-suas-diferencas-para-o-pc.png'/>
                             <div className='content-carousel'>
                                 <h1>PC Modelo Model</h1>
                                 <strong>Preço: R$ 2499,00</strong>
                                 <a href='#'>EU QUERO</a>
                             </div>
                         </div>

                         <div className='img'>
                             <img src='https://d1x5sfejm3zc3e.cloudfront.net/wysiwyg/As_7_melhores_formas_de_usar_um_computador_all-in-one_com_touch_screen_4.png'/>
                             <div className='content-carousel'>
                                 <h1>PC Modelo Model</h1>
                                 <strong>Preço: R$ 2899,00</strong>
                                 <a href='#'>EU QUERO</a>
                             </div>
                         </div>

                         <div className='img'>
                             <img src='https://gbarbosa.vtexassets.com/arquivos/ids/175075/62855067d656e48efb8c0c14.png?v=637885008431000000'/>
                             <div className='content-carousel'>
                                 <h1>Notebook Modelo Model</h1>
                                 <strong>Preço: R$ 2999,00</strong>
                                 <a href='#'>EU QUERO</a>
                             </div>
                         </div>

                         <div className='img'>
                             <img src='https://www.lenovo.com/medias/ideapad-gaming.png?context=bWFzdGVyfHJvb3R8MjcxNzcwfGltYWdlL3BuZ3xoNjkvaDJkLzEwOTkwNzg3ODg3MTM0LnBuZ3xiNTFkNGYzMzgxZTBmOTdkMTJkM2JlMDMzNTJiZjJkNjk5ZTE2YTVhMWYzZDkyNGE4N2VmODA1MzFiYmU2ZDBl'/>
                             <div className='content-carousel'>
                                 <h1>Notebook Modelo Model</h1>
                                 <strong>Preço: R$ 3000,00</strong>
                                 <a href='#'>EU QUERO</a>
                             </div>
                         </div>

                         <div className='img'>
                             <img src='https://www.showmetech.com.br/wp-content/uploads/2016/11/liv.png'/>
                             <div className='content-carousel'>
                                 <h1>Fone Modelo Model</h1>
                                 <strong>Preço: R$ 300,00</strong>
                                 <a href='#'>EU QUERO</a>
                             </div>
                         </div>

                         <div className='img'>
                             <img src='https://cdn.shopify.com/s/files/1/0622/2695/6545/products/Captura_de_tela_2022-07-22_153932-removebg-preview_405x.png?v=1658515323'/>
                             <div className='content-carousel'>
                                 <h1>Fone Modelo Model</h1>
                                 <strong>Preço: R$ 180,00</strong>
                                 <a href='#'>EU QUERO</a>
                             </div>
                         </div>

                         <div className='img'>
                             <img src='https://www.kabum.com.br/hotsite/intel/img/processador.png'/>
                             <div className='content-carousel'>
                                 <h1>Processador Core i9</h1>
                                 <strong>Preço: R$ 1500,00</strong>
                                 <a href='#'>EU QUERO</a>
                             </div>
                         </div>

                         <div className='img'>
                             <img src='https://s2.glbimg.com/3tsTqDaHOn9DbOaQ0pQDx6bZV5w=/0x0:695x391/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/1/E/aem0tbRRi0tPeFNWrsSw/ryzen-r5.png'/>
                             <div className='content-carousel'>
                                 <h1>Processador Ryzen 5</h1>
                                 <strong>Preço: R$ 1350,00</strong>
                                 <a href='#'>EU QUERO</a>
                             </div>
                         </div>

                         <div className='img2'>
                           <Link to='/catalogo'>VER TUDO</Link>
                         </div>

                         <div className='arrows'>
                            <i className="fa-solid fa-angle-left" onClick={backButton}></i>
                            <i className="fa-solid fa-angle-right" onClick={nextButton}></i>
                        </div>
                  </div>
            </div>
        </section>
    )
}