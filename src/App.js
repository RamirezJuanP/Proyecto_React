import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

  function App() {
    return (
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a mi primer proyecto con React... Por favor voler mas tarde, esta en evolución" />
      </div>
    );
  }

export default App;
