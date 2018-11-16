var yo 	  = require('yo-yo');
var landing =require('../landing');
var signupForm=yo`<div class="col s12 m7">
						<div class="signup-box">
							<div class="row">
								<h1 class="platzigram">App Gol</h1>
								<form action="" class="signup-form">
									<h2>Rguistrate para ver las fotos de tus amigo estudiando</h2>
									<div class="section">
										<a class="btn btn-fb hide-on-small-only">Iniciar session con facebook</a>
										<a class="btn btn-fb hide-on-med-and-up"> 
										<i class="fab fa-facebook-square"></i>
										Iniciar session</a>
									</div>
									<div class="divider"></div>
									<div class="section">
										<input type="email" name="email" placeholder="Correo Electronico">
										<input type="text" name="name" placeholder="Combre Completo">
										<input type="text" name="username" placeholder="Nombre de Usuario">
										<input type="password" name="password" placeholder="Contraseña">
										<button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
									</div>
								</form>
							</div>
							<div class="row">
								<div class="login-box">
									Tienes una Cuenta? <a href="/signin">Entrar</a>
								</div>
							</div>
						</div>
					</div>`;

module.exports=landing(signupForm);