var page  = require('page');
var empty = require('empty-element');
var template= require('./template');
var title = require('title');

page('/',function(ctx,next){
title('AppGol - Signin');
var main = document.getElementById('main-container');
//main.innerHTML ='<a href="/signup">Entrar</a>';
empty(main).appendChild(template);
});

