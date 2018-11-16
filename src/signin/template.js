var yo 	  = require('yo-yo');
var landing =require('../landing');
var signinForm=yo`<div class="col s12 m7">
						<div class="signup-box">
							<div class="row">
								<h1 class="platzigram">App Gol</h1>
								<form action="" class="signup-form">
									
									<div class="section">
										<a class="btn btn-fb hide-on-small-only">Iniciar session con facebook</a>
										<a class="btn btn-fb hide-on-med-and-up">
										<i class="fab fa-facebook-square"></i>
										Iniciar session</a>
									</div>
									<div class="divider"></div>
									<div class="section">
										<input type="text" name="username" placeholder="Nombre de Usuario">
										<input type="password" name="password" placeholder="Contraseña">
										<button class="btn waves-effect waves-light btn-signup" type="submit">Inicia Session</button>
									</div>
								</form>
							</div>
							<div class="row">
								<div class="login-box">
									No Tienes una Cuenta? <a href="/signup">Registrate</a>
								</div>
							</div>
						</div>
					</div>`;

module.exports=landing(signinForm);