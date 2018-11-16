var page  = require('page');
var empty = require('empty-element');
var template= require('./template');
var title =require('title');
page('/signup',function(ctx,next){
	title('AppGol - Signup');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
//main.innerHTML='signup<a href="/">home</a>';

})
