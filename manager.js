/*
* @author Piermaria Arvani
*/
//lista dei primi disponibili
var primi =[
            new Piatto ("Pasta al pomodoro", "./foto/spaghetti-al-pomodoro.jpg", "primo"),
            new Piatto ("Canederli", "./foto/canederli.jpg", "primo"),
            new Piatto ("Minestrina", "./foto/minestrina.jpg", "primo" ),
            new Piatto ("Brodo di verdura", "./foto/brodo-verdure.jpg", "primo" )
];

//lista dei secondi disponibili
var secondi =[
            new Piatto ("Pollo lesso", "./foto/pollo-lesso.jpg", "secondo"),
            new Piatto ("Affettato", "./foto/affettati.jpg", "secondo"),
            new Piatto ("Formaggio", "./foto/formaggi.jpg", "secondo" ),
            new Piatto ("Tonno all'olio", "./foto/tonno.jpg", "secondo" )
];

//lista dei contorni disponibili
var contorni =[
            new Piatto ("Patate bollite", "./foto/patate-bollite.jpg", "contorno"),
            new Piatto ("Carote al tegame", "./foto/carote.jpg", "contorno"),
            new Piatto ("Spinaci", "./foto/spinaci.jpg", "contorno" ),
            new Piatto ("Verdura fresca", "./foto/verdura.jpg", "contorno" )
];

//lista dei dolci disponibili
var dolci =[
            new Piatto ("Frutta di stagione", "./foto/macedonia.jpg", "dolci"),
            new Piatto ("Mousse di frutta ", "./foto/mouse.jpg", "dolci"),
            new Piatto ("Panna cotta", "./foto/panna-cotta.jpg", "dolci" ),
            new Piatto ("Crostata", "./foto/crostata.jpg", "dolci" )
];

var nome_giorni = ['Domenica', 'Lunedi', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
var piattiOrdinati = [];
var ordine = [];

//  piatto con un nome, un url a una foto e un attributo che indica che tipo di piatto si tratta (primo, seconodo, contorno o dolce)
function Piatto (nome, foto, tipo) {
	this.nome = nome;
	this.foto = foto;
    this.tipo = tipo;
}

/* piatto ordinato
* @param nome del piatto ordinato 
* @param tipo  indica che tipo di piatto si tratta  (primo, seconodo, contorno o dolce) 
* @param pasto indica se è stato ordinato per pranzo o cena
* @param ID di chi lo ha ordinato
* @param data per cui è sato ordinato
*/
function piattoOrdinato (nome, tipo, pasto, id , data){
    this.nome = nome;
    this.tipo = tipo;
    this.pasto = pasto;
    this.id = id;
    this.data = data;
}

/* 
* ordine definitivo
*/
function Ordine (id, data, pasto, primo, secondo, contorno, dolce){
    this.id = id;
    this.data = data;
    this.pasto = pasto;
    this.primo = primo;
    this.secondo = secondo;
    this.contorno = contorno;
    this.dolce = dolce;
}


/*inserisce un piatto ordinato in piattiOrdinati 
* @param index posizione nel html del piatto selezionato
* @param index posizione nel html del piatto selezionato
* @param tipo  indica che tipo di piatto si tratta  (primo, seconodo, contorno o dolce) 
* @param pasto indica se è stato ordinato per pranzo o cena
* @param ID di chi lo ha ordinato
* @param data per cui è sato ordinato
*/
function ordinaPiatto (index, tipo, pasto, id , data){
    var nuovoPiatto = new piattoOrdinato ("","","","", "", "");
    var cambiato = false;
    switch(tipo){
        case 'primo':       nuovoPiatto = new piattoOrdinato (primi [index].nome, tipo, pasto, id , data );
                            break;
        case 'secondo':     nuovoPiatto = new piattoOrdinato (secondi [index].nome, tipo, pasto, id , data );
                            break;
        case 'contorno':    nuovoPiatto = new piattoOrdinato (contorni [index].nome, tipo, pasto, id , data );
                            break;
        case 'dolce':       nuovoPiatto = new piattoOrdinato (dolci [index].nome, tipo, pasto, id , data );
                            break;
        default:            break;
    }
    for(var i = 0; i < piattiOrdinati.length; i++){
        if(piattiOrdinati[i].tipo == nuovoPiatto.tipo && piattiOrdinati[i].id == id && piattiOrdinati[i].pasto == pasto){
            piattiOrdinati[i].nome = nuovoPiatto.nome;
            cambiato = true;
        }
    }
    if(!cambiato)
        piattiOrdinati.push(nuovoPiatto);
}

/* crea ordine definitivo cercando tra i vari piatti ordinati 
* @param pasto indica se è stato ordinato per pranzo o cena
* @param ID di chi lo ha ordinato
* @param data per cui è sato ordinato
*/
function inserisciOrdine(data, id, pasto){
    var primo, secondo, contorno, dolce;
    var trovato = false; // indica se esiste già un ordine per quella data, quel pasto, quell'id 
    var presente = false; // indica se c'è almeno un piatto ordinato per quel pasto
  	var i;
    for(i = 0; i < piattiOrdinati.length; i++){
        if ( piattiOrdinati[i].id == id && piattiOrdinati[i].pasto == pasto && piattiOrdinati[i].data == data ){
            switch(piattiOrdinati[i].tipo){
                case 'primo':       primo = piattiOrdinati[i].nome;
                                    presente = true;
                                    break;
                case 'secondo':     secondo = piattiOrdinati[i].nome;
                                    presente = true;
                                    break;
                case 'contorno':    contorno = piattiOrdinati [i].nome;
                                    presente = true;
                                    break;
                case 'dolce':       dolce = piattiOrdinati[i].nome;
                                    presente = true;
                                    break;
                default:            break;
            }
        }
    }
    if (presente){
        var temp =new Ordine(id, data, pasto, primo, secondo, contorno, dolce);

        for(i = 0; i < ordine.length; i++){
            if(temp.data == ordine[i].data && temp.pasto == ordine[i].pasto && temp.id == ordine[i].id){
                trovato = true;
                ordine [i].primo = temp.primo;
                ordine [i].secondo = temp.secondo;
                ordine [i].contorno = temp.contorno;
                ordine [i].dolce = temp.dolce;
            }
        }

        if (!trovato){
            ordine.push(temp);
        }
    }
}


function followingDay (day, n){
    var date = new Date(day);
    date.setDate(day.getDate()+n);
    return date;
}

/* crea la lista dei giorni da visualizzare */
function getNextDays( id, today , n){
    var giorni = [];
    var stringa;
    giorni.push({
        id:id,
        nome: nome_giorni[today.getDay()],
        day: today.getDate(),
        month: today.getMonth()+1,
        year: today.getYear(),
        class: "non_prenotato"
    });
    stringa = giorni[0].nome + " " + giorni[0].day + "/" + giorni[0].month;
    giorni[0].class = (!controllaOrdinazioni(id,stringa))? "non_prenotato" : "prenotato";
    
    for(var i = 1; i < n; i++){
        var date = followingDay(today,i);
        
        giorni.push({
            id:id,
            nome: nome_giorni[date.getDay()],
            day: date.getDate(),
            month: date.getMonth()+1,
            year: date.getYear(),
            class: "non_prenotato"
        });
        stringa = giorni[i].nome + " " + giorni[i].day + "/" + giorni[i].month;
        giorni[i].class = (!controllaOrdinazioni(id, stringa))? "non_prenotato" : "prenotato";
    }
    
    return giorni;
}

/*controlla se per un giorno vi sono si a l'ordine del pranzo che della cena */
function controllaOrdinazioni (id , today ) {
    var pranzo_ordinato = false;
    var cena_ordinata =  false;
    for(var i = 0; i < ordine.length; i++){
        if(today == ordine[i].data && id == ordine[i].id){
            if(ordine[i].pasto == "PRANZO"){
                pranzo_ordinato = true;
            }else if(ordine[i].pasto == "CENA"){
                cena_ordinata = true;
            }
        }
    }
    return (pranzo_ordinato && cena_ordinata);
}

function controllaPasti(id, data, flag){
    var pasto;
    if (flag == 0){
        pasto = 'PRANZO';
        for(var i = 0; i < ordine.length; i++){
            if(data == ordine[i].data && id == ordine[i].id && ordine[i].pasto == pasto){
                return true;
            }
        }
    }else{
        pasto = 'CENA';
        for(var i = 0; i < ordine.length; i++){
            if(data == ordine[i].data && id == ordine[i].id && ordine[i].pasto == pasto){
                return true;
            }
        }
    }
    return false;
}
/*controlla se per quel pranzo ci sono ordinazioni e assegna il tipo di bottone corretto */
function controllaPranzo(id, data){
    return (!controllaPasti (id, data, 0))? "non_prenotato": "prenotato";
}
/*controlla se per quella cena ci sono ordinazioni */
function controllaCena(id, data){
    return (!controllaPasti (id, data, 1))? "non_prenotato": "prenotato";
}

function getPrimi (){
    return primi;
}
function getSecondi (){
    return secondi;
}
function getContorni (){
    return contorni;
}
function getDolci (){
    return dolci;
}

function getPiattiOrdinati(){
    return piattiOrdinati;
}
function getOrdine(){
    return ordine;
}




exports.ordinaPiatto = ordinaPiatto;
exports.getPrimi = getPrimi;
exports.getSecondi = getSecondi;
exports.getContorni = getContorni;
exports.getDolci = getDolci;
exports.getPiattiOrdinati = getPiattiOrdinati;
exports.getOrdine = getOrdine;
exports.inserisciOrdine = inserisciOrdine;
exports.getNextDays = getNextDays;
exports.controllaPranzo = controllaPranzo;
exports.controllaCena = controllaCena;

