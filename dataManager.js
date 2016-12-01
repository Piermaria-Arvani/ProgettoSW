var primi =[
            new Piatto ("Pasta al pomodoro", "./foto/spaghetti-al-pomodoro.jpg", "primo"),
            new Piatto ("Canederli", "./foto/canederli.jpg", "primo"),
            new Piatto ("Minestrina", "./foto/minestrina.jpg", "primo" ),
            new Piatto ("Brodo di verdura", "./foto/brodo-verdure.jpg", "primo" )
];

var secondi =[
            new Piatto ("Pollo lesso", "./foto/pollo-lesso.jpg", "secondo"),
            new Piatto ("Affettato", "./foto/affettati.jpg", "secondo"),
            new Piatto ("Formaggio", "./foto/formaggi.jpg", "secondo" ),
            new Piatto ("Tonno all'olio", "./foto/tonno.jpg", "secondo" )
];

var contorni =[
            new Piatto ("Patate bollite", "./foto/patate-bollite.jpg", "contorno"),
            new Piatto ("Carote al tegame", "./foto/carote.jpg", "contorno"),
            new Piatto ("Spinaci", "./foto/spinaci.jpg", "contorno" ),
            new Piatto ("Verdura fresca", "./foto/verdura.jpg", "contorno" )
];

var dolci =[
            new Piatto ("Frutta di stagione", "./foto/macedonia.jpg", "dolci"),
            new Piatto ("Mousse di frutta ", "./foto/mouse.jpg", "dolci"),
            new Piatto ("Panna cotta", "./foto/panna-cotta.jpg", "dolci" ),
            new Piatto ("Crostata", "./foto/crostata.jpg", "dolci" )
];

var piattiOrdinati = [];
var ordine = [];

//  piatto con un nome, un url a una foto e un attributo che indica che tipo di piatto è (primo, seconodo, contorno o dolce)
function Piatto (nome, foto, tipo) {
	this.nome = nome;
	this.foto = foto;
    this.tipo = tipo;
}

/*piatt0 ordinato con ID di chi lo ha ordinato, la data per cui è sato ordinato, il nome del piatto ordinato e un attributo che indica che tipo di piatto è (primo, seconodo, contorno o    dolce) */
function piattoOrdinato (nome, tipo, pasto, id , data){
    this.nome = nome;
    this.tipo = tipo;
    this.pasto = pasto;
    this.id = id;
    this.data = data;
}

/* ordine definitivo  */
function Ordine (id, data, pasto, primo, secondo, contorno, dolce){
    this.id = id;
    this.data = data;
    this.pasto = pasto;
    this.primo = primo;
    this.secondo = secondo;
    this.contorno = contorno;
    this.dolce = dolce;
}


/*inserisce un piatto ordinato in piattiOrdinati */
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
    }
    for(var i = 0; i < piattiOrdinati.length; i++){
        if(piattiOrdinati[i].tipo == nuovoPiatto.tipo && piattiOrdinati[i].id == id){
            piattiOrdinati[i].nome = nuovoPiatto.nome;
            cambiato = true;
        }
    }
    if(!cambiato)
        piattiOrdinati.push(nuovoPiatto);
}

/* crea ordine definitivo cercando tra i vari piatti ordinati */
function inserisciOrdine(data, id){
    var primo, secondo, contorno, dolce;
    var pasto = piattiOrdinati[0].pasto;
    var trovato = false;
    
    for(var i = 0; i < piattiOrdinati.length; i++){
        if ( piattiOrdinati[i].id == id){
            switch(piattiOrdinati[i].tipo){
                case 'primo':       primo = piattiOrdinati[i].nome;
                                    break;
                case 'secondo':     secondo = piattiOrdinati[i].nome;
                                    break;
                case 'contorno':    contorno = piattiOrdinati [i].nome;
                                    break;
                case 'dolce':       dolce = piattiOrdinati[i].nome;
                                    break;
                default:            break;
            }
        }
    }
    
    var temp =new Ordine(id, data, pasto, primo, secondo, contorno, dolce);
    
    for(var i = 0; i < ordine.length; i++){
        if(temp.data == ordine[i].data && temp.pasto == ordine[i].pasto && temp.id == ordine[i].id){
            trovato = true;
            ordine [i].primo = temp.primo;
            ordine [i].secondo = temp.secondo;
            ordine [i].contorno = temp.contorno;
            ordine [i].dolce = temp.dolce;
        }
    }
    
    if (!trovato)
        ordine.push(temp);
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


var nome_giorni = ['Domenica', 'Lunedi','Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

function followingDay (day, n){
    var date = new Date(day);
    date.setDate(day.getDate()+n);
    return date;
}

function getNextDays( user_id, today , n){
    var giorni = [];
    
    giorni.push({
        nome: nome_giorni[today.getDay()],
        day: today.getDate(),
        month: today.getMonth()+1,
        year: today.getYear(),
        //class: (getOrders(user_id,today)== null)? "btn-default" : "btn-success"  colora il bottone
    });
    
    for(var i = 1; i < n; i++){
        var date = followingDay(today,i);
        
        giorni.push({
        nome: nome_giorni[date.getDay()],
        day: date.getDate(),
        month: date.getMonth()+1,
        year: date.getYear(),
        //class: (getOrders(user_id,today)== null)? "btn-default" : "btn-success"  colora il bottone
    });
    }
    
    return giorni;
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

