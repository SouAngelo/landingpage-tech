import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalogo from './page/index'
import PagesFull from './page/pagesFull'


export default function RoutesApp(){
    return(
     <BrowserRouter>
     
     <Routes>
         <Route path='/' element={<PagesFull/>}/>
         <Route path='/catalogo' element={<Catalogo/>}/>
     </Routes>
        
     </BrowserRouter>
    )
}