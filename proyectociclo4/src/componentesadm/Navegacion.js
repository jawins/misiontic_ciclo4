import React, { Component } from 'react'
import { Link } from  'react-router-dom'
export default class Navegacion extends Component {
  render() {
    return (
        
       
      <header>
			<nav class="navbar navbar-light bg-primary">
				<h2 class="titulo">Menús <a id="titulo">{ } </a></h2>
			

				
			</nav>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
				  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				  </button>
				  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
					<a className="navbar-brand" href="#"></a>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="inicio">Inicio</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="tablero">Favoritos</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="crearUsuarios">Crear Usuario</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="detalleMenu">Detalle Menu</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="/">Salir</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
				
				  </div>
				</div>
			  </nav>
		</header>
       
       

    )
  }
}

