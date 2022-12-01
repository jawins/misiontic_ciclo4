import React, { Component } from 'react'
import { Link, Navigate } from  'react-router-dom'
import {iniciaSesion} from '../Servicios/IniciaSesionService';
export default class InicioSesion extends Component {
	state={
		status:false,
		succes:false,
		usuario:"",
		clave:"",
	};
	
	enInicioSesion=(e)=>
	{
		alert("hola");
		e.preventDefault();
		iniciaSesion(this.state.usuario,this.setState.clave).then((res)=>{
			if(res){
				this.state({
				...this.state,
				status:true,
				succes:true,
			});
			}else{
				this.state({
					...this.state,
					status:false,
					succes:false,
				});

			}
			
		});
	};
  render() {
	if(this.state.succes===true)
	{
		return <Navigate to="tablero/inicio"/>
	}
    return (
      <div>
        <section id="section-form">
				
                
				<form onSubmit={this.enInicioSesion}>
					
					
					<label for="input_email" class="form-label">Direccion de correo electronico*: </label>
					<input
						id="input_email"
						class="form-control"
						type="email"
						placeholder="pepito@gmail.com"
						required
					/>
					
					
					<label for="Contraseña" class="form-label">
						Contraseña*:
					</label>
					<input
						id="contrseña"
						class="form-control"
						type="password"
						required
					/>
					
					
					<div class="container-center">
						
						<button class="btn btn-primary" type="submit">Inicia Sesion</button>
						
					</div>
				</form>
			</section>
      </div>
    )
  }
}
