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
//set port
app.set('port', (process.env.PORT || 1337));
//download scripts
app.use('/scripts', express.static(__dirname+'/scripts/'));

app.use('/foto', express.static(__dirname + '/foto/'));

app.use('/', function(request, response){
	var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //accetta richieste sia da node.js che da javascript
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    headers["Content-Type"] = "text/html";
    
    var url_parts = url.parse(request.url, true);
    var getVar = url_parts.query; //aggancio un nuovo attributo
    var dish;
    
    if(getVar.submit == 'CONFERMA'){
        data.ordinaPiatto ( (getVar.piatto) -1);
        console.log(data.getOrdine());
    }
    
    
    var primi = data.getPrimi();
    var piatto1 = primi [0];
    var piatto2 = primi [1];
    var piatto3 = primi [2];
    var piatto4 = primi [3];
    
	//bind to template
	bind.toFile('tpl/home.tpl', {piatto1, piatto2, piatto3, piatto4}  , 
		function(d){
			response.writeHead(200, headers);
			response.end(d);
		}
	);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});