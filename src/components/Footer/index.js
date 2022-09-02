import './Footer.css'

export default function Footer(){
    return(
        <footer>
             <nav className='nav'>
                <ul className='menu'>
                    <a href='#'><li>Home</li></a>
                    <a href='#'><li>Sobre</li></a>
                    <a href='#'><li>Produtos</li></a>
                    <a href='#'><li>Avaliações</li></a>
                    <a href='#'><li>Contatos</li></a>
                </ul>
            </nav>
            <p>@2022 Feito por Ângelo Gustavo</p>
        </footer>
    )
}