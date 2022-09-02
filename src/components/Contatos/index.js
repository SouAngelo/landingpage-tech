import './Contato.css'



export default function Contatos(){
    return(
        <section className='section-contatos'>
            <h1>Contatos</h1>
            <div className='redes'>
                <p>Nos siga nas redes sociais e fique por dentro de todas as novidades.</p>
                <div className='icons'>
                     <i className="fa-brands fa-instagram"></i>
                     <i className="fa-brands fa-twitter"></i>
                     <i className="fa-brands fa-facebook"></i>
                     <i className="fa-brands fa-whatsapp"></i>
                </div>
            </div>
        </section>
    )
}