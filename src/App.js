import './App.css';
import './assets/css/main.css';
import React, { useEffect } from 'react';
import 'jquery-ui-dist/jquery-ui.min.js';
import img2 from './images/pic02.jpg'


function App() {

	
  return (
	<body class="is-preload">

			<div id="header">

				<div class="top">

						<div id="logo">
							{/* <span class="image avatar48"><img src="./images/avatar.jpg" alt="" /></span> */}
							<h1 id="title">Matías Parada</h1>
							<p>Junior full stack developer</p>
						</div>

						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>
								<li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a></li>
								<li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>
							</ul>
						</nav>

				</div>

				<div class="bottom">

						<ul class="icons">
							<li><a href="https://github.com/KrosTled" class="icon brands fa-github"><span class="label">Github</span></a></li>
						</ul>

				</div>

			</div>

			<div id="main">

					<section id="top" class="one dark cover">
						<div class="container">

							<header>
								<h2 class="alt">Hola, yo soy <strong>Matias Parada</strong>, un desarrollador web full stak junior.</h2>
								<p>Tengo poca experiencia en el area<br />
								pero me gusta estar al tanto de las tecnologias actuales.</p>
							</header>

							<footer>
								<a href="#portfolio" class="button scrolly">Portafolio</a>
							</footer>

						</div>
					</section>

					<section id="portfolio" class="two">
						<div class="container">

							<header>
								<h2>Portafolio</h2>
							</header>

							<p>Siendo nuevo en el desarrollo web, cuento con pocos proyectos pero cada uno demuestra que he avanzado y mi dispocicion
								por seguir aprendiendo.</p>

							<div class="row">
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="https://github.com/KrosTled/Landing-Page" class="image fit"><img src="img2" alt="" />
										<header>
											<h3>Landing Page</h3>
										</header>
										</a>
										
									</article>
									<article class="item">
										<a href="https://github.com/KrosTled/Proyecto4AppRestaurante" class="image fit"><img src="/images/pic03.jpg" alt="" />

										<header>
											<h3>App Restaurante</h3>
										</header>
										</a>
										
									</article>
								</div>
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="https://github.com/KrosTled/CRUD-Proyecto2" class="image fit"><img src="images/pic04.jpg" alt="" />
										<header>
											<h3>Proyecto CRUD</h3>
										</header>
										</a>
										
									</article>
									<article class="item">
										<a href="https://github.com/KrosTled/Proy-5" class="image fit"><img src="images/pic05.jpg" alt="" />
										<header>
											<h3>App e-commerce</h3>
										</header>
										</a>
									</article>
								</div>
								<div class="col-4 col-12-mobile">
									<article class="item">
										<a href="https://github.com/KrosTled/Proyecto3Dashboard" class="image fit"><img src="images/pic06.jpg" alt="" />
										<header>
											<h3>Dashboard</h3>
										</header>
										</a>
									</article>
								</div>
							</div>

						</div>
					</section>

					<section id="about" class="three">
						<div class="container">

							<header>
								<h2>Sobre mi</h2>
							</header>

							<a href="#" class="image featured"><img src="images/pic08.jpg" alt="" /></a>

							<p>Me llamo Matías Parada, actualmente me encuentro estudiando
							Ingeniería Civil en Informática e Innovación Tecnológica
							en la Universidad Del Desarrollo, cuento con distitos cursos de Udemy y coursera,
							y realize un bootcamp de desarrollo web full stack que incie a mediados el año 2022 y finalize a mediados de marzo del año 2023.
							</p>
						</div>
					</section>

			</div>

			<div id="footer">

					<ul class="copyright">
						<li>&copy; Matias Parada. All rights reserved.</li><li>Mail: Maig.pabu@gmail.com</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>

			</div>

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
  );
}

export default App;
