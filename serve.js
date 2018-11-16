/*par correr la libreria de serve tenemos que usar el siuiente
comando*/
/*=>npm install --save express*/
//--save incluidar como dependencia en nuestro archivo jsoon
//requiere busca dentro node_module la capeta exprees
var express =require('express');
var app =express();

//le indicamos a node que usaremos pug como renderizador de vistas
app.set('view engine','pug');

//Indicaremos anuestro servidor que la carpeta públic este accessible para todos
//accedioendo a archivos estaticos con exprexx
app.use(express.static('public')); //indicamos a nuestro servidor que sirva el directorio public de manera estaticas , quiere decir
//que todos los usuarios podran acceder

//Gestionando la ruta
app.get('/',function(req,res){

	//res.send('Hola Mundo');
	//console.log('un cliente se a unido');
	//aqui lde decimos que renderise un archivo
	//est index lo busca dentro de la carpeta view
	res.render('index',{title :'AppGol'});
});

app.get('/signup',function(req,res){
	//res.send('Hola Mundo');
	//console.log('un cliente se a unido');
	//aqui lde decimos que renderise un archivo
	//est index lo busca dentro de la carpeta view
	res.render('index',{title :'AppGol - signup'});
})
  

app.get('/signin',function(req,res){
	//res.send('Hola Mundo');
	//console.log('un cliente se a unido');
	//aqui lde decimos que renderise un archivo
	//est index lo busca dentro de la carpeta view
	res.render('index',{title :'AppGol - signin'});
})

app.listen(4000,function(error){
	if (error ) return console.log('error perro'),process.exit(1);
	console.log('escuchaod en el puero 4000');
})


