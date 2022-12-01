import React, { Component } from 'react'

export default class Inicio extends Component {
  render() {
    return (
      <main>
		
			<section id="section-carousel">
				<div
					id="carouselExampleFade"
					class="carousel slide carousel-fade"
					data-bs-ride="carousel"
				>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img
								src="./images/img1.jpg"
								class="d-block w-100"
								alt="Planeta tierra"
								height="400"
							/>
						</div>
						<div class="carousel-item">
							<img
								src="./images/img2.png"
								class="d-block w-100"
								alt="Montañas"
								height="400"
							/>
						</div>
						<div class="carousel-item">
							<img
								src="./images/img3.jfif"
								class="d-block w-100"
								alt="Planeta marte"
								height="400"
							/>
						</div>
					</div>
					<button
						class="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button
						class="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
			</section>
			
			<div id="cont-table">
				
			</div>
			<div class="container">

				<div id="contenedor" class="row row-cols-1 row-cols-sm-2">
				 
					<div class="col">
						<div class="card shadow-sm">
							<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
								<title>Placeholder</title>
								<rect width="100%" height="100%" fill="#55595c"></rect>
								<image href="images/menu1.jpg" height="225" width="100%"/>
							</svg>
			
							<div class="card-body">
									<p class="card-text">Titulo"</p>
									<p class="card-text">Categoria</p>
									<p class="card-text">Descripcion</p>
									<div class="d-flex justify-content-between align-items-center">
									<div class="btn-group">
										<button type="button" class="btn btn-sm btn-outline-secondary"><a href="detalle_menu.html"> View</a></button>
										<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
									</div>
									<small class="text-muted">9 mins</small>
								</div>
							</div>
						</div>
				  </div>
				  <div class="col">
						<div class="card shadow-sm">
							<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
								<title>Placeholder</title>
								<rect width="100%" height="100%" fill="#55595c"></rect>
								<image href="images/menu2.jpg" height="225" width="100%"/>
							</svg>
							<div class="card-body">
								<p class="card-text">Titulo</p>
								<p class="card-text">Categoria</p>
								<p class="card-text">Descripcion</p>
								<div class="d-flex justify-content-between align-items-center">
									<div class="btn-group">
									
										<button type="button" class="btn btn-sm btn-outline-secondary"><a href="detalle_menu.html"> View</a></button>
										<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
									</div>
									<small class="text-muted">9 mins</small>
								</div>
							</div>
						</div>
				  </div>
				  <div class="col">
					<div class="card shadow-sm">
					  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#55595c"></rect>
						
						
						<image href="images/menu3.jpg" height="225" width="100%"/>
						
					</svg>
		  
					  <div class="card-body">
						<p class="card-text">Titulo</p>
                        <p class="card-text">Categoria</p>
						<p class="card-text">Descripcion</p>
						<div class="d-flex justify-content-between align-items-center">
						  <div class="btn-group">
						
							<button type="button" class="btn btn-sm btn-outline-secondary"><a href="detalle_menu.html"> View</a></button>
							<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
						  </div>
						  <small class="text-muted">9 mins</small>
						</div>
					  </div>
					</div>
				  </div>
		  
				  <div class="col">
					<div class="card shadow-sm">
					  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#55595c"></rect>
						
						
						<image href="images/menu4.jpg" height="225" width="100%"/>
						
					</svg>
		  
					  <div class="card-body">
						<p class="card-text">Titulo</p>
                        <p class="card-text">Categoria</p>
						<p class="card-text">Descripcion</p>
						<div class="d-flex justify-content-between align-items-center">
						  <div class="btn-group">
						
							<button type="button" class="btn btn-sm btn-outline-secondary"><a href="detalle_menu.html"> View</a></button>
							<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
						  </div>
						  <small class="text-muted">9 mins</small>
						</div>
					  </div>
					</div>
				  </div>

				  
		  
				  
				</div>
			  </div>

			
			<div id="cont-btn-crear-usuario">
				<button class="btn btn-primary">Crear usuario</button>
			</div>
		</main>
    )
  }
}
