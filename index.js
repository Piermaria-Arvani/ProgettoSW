//general lib
var express = require('express');
//parse URL
var url = require('url');
//inspect variables
var util = require('util');
//instantiate express
var app = express(); 
//templates
var bind = require('bind');
//gestione dei dati
var data = require('./dataManager.js');

var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

//set port
app.set('port', (process.env.PORT || 1337));
//download scripts
app.use('/scripts', express.static(__dirname+'/scripts/'));
app.use('/foto', express.static(__dirname + '/foto/'));
app.use('/styles/',express.static(__dirname + '/styles'));


//mostra i piatti disponibili per una determinata tipologia (primi,secondi..) e ne fa scegliere uno.
app.use('/scegli_piatto', function(request, response){
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //accetta richieste sia da node.js che da javascript
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    headers["Content-Type"] = "text/html";
    var id;
    var piatto1;
    var piatto2;
    var piatto3;
    var piatto4;
    var tipo;
    var pasto = request.body.pasto;
    switch(request.body.submit){
        case 'PRIMI':       var primi = data.getPrimi();
                            piatto1 = primi [0];
                            piatto2 = primi [1];
                            piatto3 = primi [2];
                            piatto4 = primi [3];
                            tipo = 'primo';
                            break;
        
        case 'SECONDI':     var secondi = data.getSecondi();
                            piatto1 = secondi [0];
                            piatto2 = secondi [1];
                            piatto3 = secondi [2];
                            piatto4 = secondi [3];
                            tipo = 'secondo';
                            break;
        
        case 'CONTORNI':    var contorni = data.getContorni();
                            piatto1 = contorni [0];
                            piatto2 = contorni [1];
                            piatto3 = contorni [2];
                            piatto4 = contorni [3];
                            tipo = 'contorno';   
                            break;
        
        case 'DOLCI':       var dolci = data.getDolci();
                            piatto1 = dolci [0];
                            piatto2 = dolci [1];
                            piatto3 = dolci [2];
                            piatto4 = dolci [3];
                            tipo = 'dolce';
                            break;
        default: break;
    }
    
    //bind to template
    bind.toFile('tpl/scegli_piatto.tpl', {piatto1, piatto2, piatto3, piatto4, tipo, pasto}  , 
        function(d){
            response.writeHead(200, headers);
            response.end(d);
        }
    );
});



//mostra le portate e fa accederdere alle varie sezioni specifiche
app.use('/scegli_portata', function(request, response){
	var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //accetta richieste sia da node.js che da javascript
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    headers["Content-Type"] = "text/html";
    var pasto;
    
    if(request.body.submit == 'PRANZO' || request.body.submit == 'CENA'){
        var pasto = request.body.submit ;
    }
    
    if(request.body.submit == 'CONFERMA'){
        data.ordinaPiatto ( request.body.id, ((request.body.piatto) -1), request.body.tipo, request.body.pasto);
        //console.log(data.getPiattiOrdinati());
    }
    
    //bind to template
	bind.toFile('tpl/scegli_portata.tpl', {pasto}  , 
		function(d){
			response.writeHead(200, headers);
			response.end(d);
		}
	);
});


//fa scegliere tra pranzo e cena
app.use('/', function(request, response){
	var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //accetta richieste sia da node.js che da javascript
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    headers["Content-Type"] = "text/html";
    
    if(request.body.submit == 'CONFERMA'){
        data.inserisciOrdine("29/11/16");
        console.log(data.getOrdine());
    }
    
    //bind to template
	bind.toFile('tpl/pranzo_cena.tpl', {}  , 
		function(d){
			response.writeHead(200, headers);
			response.end(d);
		}
	);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});