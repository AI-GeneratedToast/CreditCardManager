import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Nav/Navbar';
import Home from './Components/Lister/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AjouterCarte from './Components/AjouterCarte/AjouterCarte';
import SupprimerParNumero from './Components/SupprimerCarte/SupprimerParNumero';
import SupprimerParClient from './Components/SupprimerCarte/SupprimerParClient';
import Modifier from './Components/ModifierCarte/Modifier';
import ListeParCategorie from './Components/Lister/ListeParCategorie';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/ajoutercarte" element={<AjouterCarte/>}/>
          <Route exact path="/supprimerParNumero" element={<SupprimerParNumero/>}/>
          <Route exact path="/supprimerParClient" element={<SupprimerParClient/>}/>
          <Route exact path="/modifier/:id" element={<Modifier/>}/>
          <Route exact path="/listerParCat/:cat" element={<ListeParCategorie/>}/>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
