import Header from '../components/Header/index'
import Main from '../components/Main/index'
import Sobre from '../components/Sobre/index'
import Produtos from '../components/Produtos/index'
import Avaliacao from '../components/Avaliacao/index'
import Contatos from '../components/Contatos/index'
import Footer from '../components/Footer/index'

export default function PagesFull(){
    return(
        <>
         <Header/>
         <Main/>
         <Sobre/>
         <Produtos/>
         <Avaliacao/>
         <Contatos/>
         <Footer/>
        </>
    )
}