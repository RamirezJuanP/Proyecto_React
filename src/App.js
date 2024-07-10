import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Cart/Cart';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Home from './Components/Home/Home';
import Contactanos from "./Components/Contactanos/Contactanos"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


  function App() {
    return (
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contactanos' element={<Contactanos />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path="/productos-categoria/:categoryId" element={<ItemListContainer />}/>
            <Route path='/cart' element={<Cart/>} />
          </Routes>
      </BrowserRouter>
    );
  }

export default App;
