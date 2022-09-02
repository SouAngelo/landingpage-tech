import  './Header.css'

export default function Header(){


function menu(){
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}

function menuSair (){
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}




    return(
        <header>
            <div className='container-logo'>
                <img src='https://static.rfstat.com/logo-presets/1851/thumbnail_5857be502d18_1x.webp'/>
            </div>

            <nav id='nav'>
            <input type="checkbox" name="" id="check" onClick={menu}/>
                <label for="check" className="btn">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <ul onClick={menuSair} id='menu'>
                    <a href='#'><li>Home</li></a>
                    <a href='#'><li>Sobre</li></a>
                    <a href='#'><li>Produtos</li></a>
                    <a href='#'><li>Avaliações</li></a>
                    <a href='#'><li>Contatos</li></a>
                </ul>
            </nav>
        </header>
    )
}

