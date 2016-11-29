

//var primi = [ "Pasta al pomodoro","Canederli", "Minestrina", "Brodo di verdura"];

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

function Ordine (id, data, pasto, primo, secondo, contorno, dolce){
    this.id = id;
    this.data = data;
    this.pasto = pasto;
    this.primo = primo;
    this.secondo = secondo;
    this.contorno = contorno;
    this.dolce = dolce;
}

function inserisciOrdine(data){
    var primo, secondo, contorno, dolce;
    var id = piattiOrdinati[0].id;
    var pasto = piattiOrdinati[0].pasto;
    var trovato = false;
    for(var i = 0; i < piattiOrdinati.length; i++){
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

// crea un nuovo piatto con un nome, un url a una foto e un attributo che indica che tipo di piatto è (primo, seconodo, contorno o dolce)
function Piatto (nome, foto, tipo) {
	this.nome = nome;
	this.foto = foto;
    this.tipo = tipo;
}

/*crea un nuovo ordine con ID di chi lo ha ordinato, il nome del piatto ordinato e un attributo che indica che tipo di piatto è (primo, seconodo, contorno o    dolce) */
function piattoOrdinato (id, nome, tipo,pasto){
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.pasto = pasto;
}


function ordinaPiatto (id, index, tipo,pasto){
    var nuovoPiatto = new piattoOrdinato ("","","","");
    var cambiato = false;
    switch(tipo){
        case 'primo':       nuovoPiatto = new piattoOrdinato (id, primi [index].nome, tipo, pasto );
                            break;
        case 'secondo':     nuovoPiatto = new piattoOrdinato (id, secondi [index].nome, tipo, pasto );
                            break;
        case 'contorno':    nuovoPiatto = new piattoOrdinato (id, contorni [index].nome, tipo, pasto );
                            break;
        case 'dolce':       nuovoPiatto = new piattoOrdinato (id, dolci [index].nome, tipo, pasto );
                            break;
    }
    for(var i = 0; i < piattiOrdinati.length; i++){
        if(piattiOrdinati[i].tipo == nuovoPiatto.tipo){
            piattiOrdinati[i].nome = nuovoPiatto.nome;
            cambiato = true;
        }
    }
    if(!cambiato)
        piattiOrdinati.push(nuovoPiatto);
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

