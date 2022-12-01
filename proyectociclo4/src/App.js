
import './App.css';
import InicioSesion from './componentes/InicioSesion';
import Tablero from "./componentes/Tablero"
import Inicio from './componentes/Inicio';
import CrearUsuarios from './componentes/CrearUsuarios';
import DetalleMenu from './componentes/DetalleMenu';

import TableroAdm from "./componentesadm/Tablero"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
   
     <Router>
        <Routes>
          <Route path="/" element={<InicioSesion/>}></Route>
          <Route path="tablero" element={<Tablero/>}>
            <Route path="inicio" element={<Inicio/>}></Route>
            <Route path="crearUsuarios" element={<CrearUsuarios/>}></Route>
            <Route path="detalleMenu" element={<DetalleMenu/>}></Route>
          </Route>
          <Route path="tableroAmd" element={<TableroAdm/>}>
            <Route path="inicio" element={<Inicio/>}></Route>
            <Route path="crearUsuarios" element={<CrearUsuarios/>}></Route>
            <Route path="detalleMenu" element={<DetalleMenu/>}></Route>
          </Route>
        </Routes>
     </Router>
   
  );
}

export default App;
