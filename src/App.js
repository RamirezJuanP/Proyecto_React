import './App.css';
import NavBar from './Components/NavBar/NavBar';
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
            <Route path="/" element={<Home/>} />
            <Route path='/contactanos' element={<Contactanos />} />
            <Route path="/catalogo/:categoryId" element={<ItemListContainer />}/>
          </Routes>
      </BrowserRouter>
    );
  }

export default App;
