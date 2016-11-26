/* TODO meglio fare degli oggetti con nome e indirizzo della foto */

//var primi = [ "Pasta al pomodoro","Canederli", "Minestrina", "Brodo di verdura"];

var primi =[
            new Piatto ("Pasta al pomodoro", "./foto/spaghetti-al-pomodoro.jpg" ),
            new Piatto ("Canederli", "./foto/canederli.jpg" ),
            new Piatto ("Minestrina", "./foto/minestrina.jpg" ),
            new Piatto ("Brodo di verdura", "./foto/brodo-verdure.jpg" )
];
var ordine = [];

function Piatto (nome, foto) {
	this.nome = nome;
	this.foto = foto;
}


function ordinaPiatto (index){
    var piattoOrdinato = primi [index];
    ordine.push(piattoOrdinato);
}

function getPrimi (){
    return primi;
}

function getOrdine (){
    return ordine;
}

exports.ordinaPiatto = ordinaPiatto;
exports.getPrimi = getPrimi;
exports.getOrdine = getOrdine;

