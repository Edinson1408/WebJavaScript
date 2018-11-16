var yo = require('yo-yo');

var template =yo`
<nav class="header">
	<div class="nav-wrapper">
		<div class="container">
			<div class="row">
				<div class="col s10 m6 offset-m1">
					<a href="/" class="bramd-logo platzigram">App Gol</a>
				</div>
				<div class="col s2 m5 push-m4">
					<a class="btn btn-large btn-flat dropdown-button" data-target='drop-user'>
					<i class="fas fa-user" aria-hidden="true"></i></a>
					<ul id="drop-user" class="dropdown-content">
						<li><a href="#">Salir</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</nav>`;

module.exports=template;