/** Author: Davide Belli
 * Server running as Node.js
 * Funzioni e strutture dati per manipolare gli Employees
 * dovrebbero essere in un file esterno, ma non ho trovato alcun modo per includere
 * librerie .js da un altro file .js
 */

var express = require('express');
var util = require('util');
var bind = require('bind');
var bodyParser = require('body-parser');
var dataManager = require('./dataManager.js');
var manager = require('./manager.js');
var bindManager = require('./bindManager.js');


/**
 * Inizializzazione del server sulla porta 5000,
 * Mappatura dei file script.js e style.css
 */
var app = express();


app.use('/foto', express.static(__dirname + '/foto/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', (process.env.PORT || 1337));
app.use('/scripts/',express.static(__dirname + '/script'));
app.use('/styles/',express.static(__dirname + '/css'),function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
});
var headers = {};
headers["Access-Control-Allow-Origin"] = "*";
headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
headers["Access-Control-Allow-Credentials"] = false;
headers["Access-Control-Max-Age"] = '86400';
headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
headers["Content-Type"] = "text/html";


/**
 * Inizializzazione delle strutture dati per Utenti, Profili, QnAs, Medicine, Allergie
 */
var users=[];
var profiles=[];
var qnas=[];
var medicines=[];
var allergies=[];

dataManager.init(users,profiles,qnas,medicines,allergies,1,"admin","admin");


/**
 * @brief risorsa che ritorna la pagina Supporto, dove contattare un medico e vedere le risposte
 * @param int id: l'id che identifica la sessione attiva per il corrispondente utente
 * @param string text: Il contenuto della TextArea in cui inserire una nuova domanda
 * @return Una pagina da cui inviare domande e leggere domande e
 * o un reindirizzamento al login se l'accesso alla pagina è avvenuto in maniera improria
 */
app.use('/support', function(request, response) {
    if(request.body && typeof request.body!== 'undefined' && typeof request.body.submit!== 'undefined') {

        var id = request.body.id;
        // Sottometti una nuova domanda al supporto
        if (request.body.submit == "INVIA") {
            var text = request.body.testo;
            if(text!=="") {
                qnas.push(new dataManager.QnA(id, text, ""));
            }
        }
        bindManager.bindSupport(response,headers,id,new dataManager.findQnas(qnas,id));

    //in caso di accesso improprio alla pagina, reindirizza al login con un messaggio di errore
    } else {
        bindManager.bindLogin(response,headers,"La sessione è terminata accedendo al Supporto Medico",406);
    }
});

/**
 * @brief risorsa che ritorna la pagina Profilo, dove settare i propri valori fisici o da cui accedere al supporto medico
 * @param int id: l'id che identifica la sessione attiva per il corrispondente utente
 * @return Una pagina da cui settare peso, altezza, medicine assunte e allergie/intolleranze possedute;
 * link da cui accedere alla pagina di supporto medico
 */
app.use('/profile', function(request, response) {
    if(request.body && typeof request.body!== 'undefined' && typeof request.body.submit!== 'undefined') {

        // caso in cui dalla home accedo al profilo
        if(request.body.submit=="Profilo"){
            var id = request.body.id;
            var h = 0;
            var w = 0;

            //retrieve dalla struttura dati profiles di altezza e peso
            h=dataManager.findH(profiles,id);
            w=dataManager.findW(profiles,id);
            bindManager.bindProfile(response,headers,id,h,w,new dataManager.bind_medicine(medicines,id),new dataManager.bind_allergie(allergies,id));
        }
    //in caso di accesso improprio alla pagina, reindirizza al login con un messaggio di errore
    } else {
        bindManager.bindLogin(response,headers,"La sessione è terminata accedendo al Profilo",406);
    }
});

/**
 * @brief risorsa che ritorna la pagina Home
 * @return Una pagina da cui accedere al profilo o iniziare a prenotare i pasti, accessibile dopo il login, dopo la modifica profilo o dopo esser usciti dal supporto medico
 */
app.use('/home', function(request, response) {
    if(request.body && typeof request.body!== 'undefined' && typeof request.body.submit!== 'undefined') {
        var id= "";
        var username= "";
        if(request.body.submit=="Accedi"){
            /**
             * @brief Caso in cui abbia eseguito l'azione di accesso
             * @param int id: l'id che identifica la sessione attiva per il corrispondente utente
             * @param int username: identificativo con cui l'utente accede e che viene utilizzato nel  titolo della home
             * @param int password: password relativa all'username usato per il login
             * @return pagina Home, se l'accesso ha avuto successo, pagina di login con notifica di accesso fallito altrimenti
             */

            username = request.body.username;
            var password = request.body.password;
            id = dataManager.findUserID(users,username,password);
            if(id!="") {
                bindManager.bindHome(response,headers,id,username);
            } else {
                bindManager.bindLogin(response,headers,"Login Fallito!",200);
            }
        } else if (request.body.submit=="SALVA"){
            /**
             * @brief ritorna la Home dopo aver salvato i dati dal proprio profilo
             * @param int id: l'id che identifica la sessione attiva per il corrispondente utente
             * @param int h: altezza dell'utente
             * @param int w: peso dell'utente
             * @param current_medicines: struttura dati contenente per ogni medicina il proprio indice, nome e se è assunta dal paziente
             * @param current_allergies: struttura dati contenente per ogni allergia il proprio indice, nome e se è avuta dal paziente
             * @return La home, da cui poter accedere di nuovo al profilo o alla prenotazione pasti
             */

            id = request.body.id;
            var h = request.body.height;
            var w = request.body.weight;

            //aggiorno le strutture dati allergies, medicines, profiles secondo i dati salvati dall'utente
            var current_medicines = request.body.medicine;
            var current_allergies = request.body.allergie;
            dataManager.updateMeds(medicines,id,current_medicines);
            dataManager.updateAller(allergies,id,current_allergies);
            dataManager.updateProfile(profiles,id,h,w);

            username = dataManager.findUsername(users,id);
            bindManager.bindHome(response,headers,id,username);

        } else if (request.body.submit=="Torna alla Home"){
            /**
             * @brief ritorna la Home dal supporto medico
             * @param int id: l'id che identifica la sessione attiva per il corrispondente utente
             * @return La home, da cui poter accedere al profilo o alla prenotazione pasti
             */

            id = request.body.id;
            username = dataManager.findUsername(users,id);
            bindManager.bindHome(response,headers,id,username);
        }
    //in caso di accesso improprio alla pagina, reindirizza al login con un messaggio di errore
    } else {
        bindManager.bindLogin(response,headers,"La sessione è terminata accedendo alla home",406);
    }
});





//Pier
app.use('/scegli_piatto', function(request, response){var piatto1;
    var piatto2;
    var piatto3;
    var piatto4;
    var tipo;
    var pasto = request.body.pasto;
    var data = request.body.data;
    var id = request.body.id;


    switch(request.body.submit){
        case 'PRIMI':       var primi = manager.getPrimi();
            piatto1 = primi [0];
            piatto2 = primi [1];
            piatto3 = primi [2];
            piatto4 = primi [3];
            tipo = 'primo';
            break;

        case 'SECONDI':     var secondi = manager.getSecondi();
            piatto1 = secondi [0];
            piatto2 = secondi [1];
            piatto3 = secondi [2];
            piatto4 = secondi [3];
            tipo = 'secondo';
            break;

        case 'CONTORNI':    var contorni = manager.getContorni();
            piatto1 = contorni [0];
            piatto2 = contorni [1];
            piatto3 = contorni [2];
            piatto4 = contorni [3];
            tipo = 'contorno';
            break;

        case 'DOLCI':       var dolci = manager.getDolci();
            piatto1 = dolci [0];
            piatto2 = dolci [1];
            piatto3 = dolci [2];
            piatto4 = dolci [3];
            tipo = 'dolce';
            break;
        default: break;
    }

    //bind to template
    bind.toFile('tpl/scegli_piatto.tpl', {piatto1, piatto2, piatto3, piatto4, tipo, pasto, data, id}  ,
        function(d){
            response.writeHead(200, headers);
            response.end(d);
        }
    );
});



/*
 *  mostra le varie portate e fa accedere alle sezioni specifiche
 */
app.use('/scegli_portata', function(request, response){
    var pasto;
    var id = request.body.id;
    var data = request.body.data;
    if(request.body.submit == 'PRANZO' || request.body.submit == 'CENA'){
        pasto = request.body.submit ;
    }else{
        pasto = request.body.pasto ;
    }

    if ( typeof request.body !== 'undefined' && request.body && request.body.piatto){
        if(request.body.submit == 'CONFERMA'){
            manager.ordinaPiatto (((request.body.piatto) -1), request.body.tipo, pasto, id , data);
        }
    }

    //bind to template
    bind.toFile('tpl/scegli_portata.tpl', {id, data, pasto},
        function(d){
            response.writeHead(200, headers);
            response.end(d);
        }
    );
});



/*
 *  mostra la scelta tra pranzo e cena
 */
app.use('/pranzo_cena', function(request, response){
    var id = request.body.id;
    var pasto = request.body.pasto;
    var data;

    if(request.body.submit == 'CONFERMA'){
        data = request.body.data;
        manager.inserisciOrdine(data, id, pasto);
        console.log(manager.getOrdine());
    }
    else{
        data = request.body.submit;
    }

    var pranzo = manager.controllaPranzo(id, data);
    var cena = manager.controllaCena(id, data);

    //bind to template
    bind.toFile('tpl/pranzo_cena.tpl', {id, data, pranzo, cena}  ,
        function(d){
            response.writeHead(200, headers);
            response.end(d);
        }
    );
});

/*
 *  mostra sei giorni a partire dal giorno stesso,
 *   i bottoni dei giorni risultano verdi se entrambi gli ordini per quella giornata sono stati completati
 */
app.use('/scegli_data', function(request, response){
    var id = request.body.id;
    var giorni = manager.getNextDays(id, new Date(), 6);


    //bind to template
    bind.toFile('tpl/scegli_data.tpl', {giorni:giorni}  ,
        function(d){
            response.writeHead(200, headers);
            response.end(d);
        }
    );
});








/**
 * @brief di default, la pagina iniziale è quella del login
 * @return La Pagina del login, da cui inserire username e password per effettuare l'accesso
 */
app.use('/', function(request, response) {
    bindManager.bindLogin(response,headers,"",200);
});

//Server in ascolto sulla porta specificata
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

