/*Methods for Contructor of data types, and for getting/setting the values of those objects
 */

//Nomi delle medicine e allergie
var medicine = ["Statine","Anticoagulanti","Antibiotici","Antistaminici","Fans","Benzodiazepine"];
var allergie = ["Lattosio","Glutine","Uova","Legumi","Noci"];

//Costruttori
function User(id,username,password){
    this.id=id;
    this.username=username;
    this.password=password;
}
function Profile(id,h,w){
    this.id=id;
    this.h=h;
    this.w=w;
}
function Medicines(id){
    this.id = id;
    this.medicine_array=[];
    for(var i=0;i<medicine.length;i++) {
        (this.medicine_array).push("");
    }
}
function Allergies(id){
    this.id = id;
    this.allergie_array=[];
    for(var i=0;i<allergie.length;i++) {
        (this.allergie_array).push("");
    }
}
function QnA(id,q,a){
    this.id=id;
    this.q=q;
    if(a==""){
        this.a="in attesa di risposta";
    } else {
        this.a = a;
    }
}


//Funzione di inizializzazione delle strutture dati, chiamata all'avvio del server
function init(users,profiles,qnas,medicines,allergies,id,username,password){
    users.push(new User(id,username,password));
    profiles.push(new Profile(id,"0","0"));
    medicines.push(new Medicines(id));
    allergies.push(new Allergies(id));
}

//returns the id for the login couple, an empty string if login is invalid
function findUserID(users,username,password) {
    id = "";
    for (var i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            id = users[i].id;
        }
    }
    return id;
}

//returns the usenrname for the user with the defined id
function findUsername(users,id) {
    username = "";
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            username = users[i].username;
        }
    }
    return username;
}

function findH(profiles,id) {
    h=0;
    for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id==id) {
            h = profiles[i].h;
        }
    }
    return h;
}

function findW(profiles,id) {
    w=0;
    for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id==id) {
            w = profiles[i].w;
        }
    }
    return w;
}

//returns all QNAs with the expected ID
function findQnas(qnas,id){
    var qnas_current=[];
    for (var i = qnas.length-1; i >=0; i--) {
        if (qnas[i].id == id) {
            qnas_current.push(qnas[i]);
        }
    }
    return qnas_current;
}

//updates height and weigth for the user with the specified id
function updateProfile(profiles,id,h,w){
    for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id==id) {
            if(!isNaN(h)) {
                profiles[i].h = parseFloat(h);
            }else{
                profiles[i].h=0;
            }
            if(!isNaN(w)) {
                profiles[i].w = parseFloat(w);
            }else{
                profiles[i].w=0;
            }
        }
    }
}

//updates the medicines datastructure for the user with the specified id
function updateMeds(medicines,id,current_medicines){
    for(var i=0;i<medicines.length;i++){
        if(medicines[i].id=id){

            for(var j=0;j<medicines[i].medicine_array.length;j++){
                medicines[i].medicine_array[j]="";
            }
            if(typeof current_medicines!='undefined') {
                for (var j = 0; j < current_medicines.length; j++) {
                    medicines[i].medicine_array[current_medicines[j]] = "selected";
                }
            }

        }
    }
}

//updates the allergies datastructure for the user with the specified id
function updateAller(allergies,id,current_allergies){
    for(var i=0;i<allergies.length;i++){
        if(allergies[i].id=id){

            for(var j=0;j<allergies[i].allergie_array.length;j++){
                allergies[i].allergie_array[j]="";
            }
            if(typeof current_allergies!='undefined') {
                for (var j = 0; j < current_allergies.length; j++) {
                    allergies[i].allergie_array[current_allergies[j]] = "selected";
                }
            }

        }
    }
}

//returns the complex object formed by index, name and "selected" or "" that will be used in the array binding for the medicines
function bind_medicine (medicine_id,id){
    var bind_return=[];
    for(var j=0;j<medicine_id.length;j++) {
        if (medicine_id[j].id == id) {
            for (var i = 0; i < medicine.length; i++) {
                bind_return.push({num: i, sel: medicine_id[j].medicine_array[i], name: medicine[i]});
            }
        }
    }
    return bind_return;
}

//returns the complex object formed by index, name and "selected" or "" that will be used in the array binding for the allergies
function bind_allergie (allergie_id,id){
    var bind_return=[]
    for(var j=0;j<allergie_id.length;j++) {
        if (allergie_id[j].id == id) {
            for (var i = 0; i < allergie.length; i++) {
                bind_return.push({num: i, sel: allergie_id[j].allergie_array[i], name: allergie[i]});
            }
        }
    }
    return bind_return;
}


//Exports
exports.init = init;
exports.User = User;
exports.Profile = Profile;
exports.QnA = QnA;
exports.Medicines = Medicines;
exports.Allergies = Allergies;
exports.findQnas = findQnas;
exports.bind_medicine = bind_medicine;
exports.updateMeds = updateMeds;
exports.updateAller = updateAller;
exports.bind_allergie = bind_allergie;
exports.findUserID = findUserID;
exports.findUsername = findUsername;
exports.updateProfile = updateProfile;
exports.findH = findH;
exports.findW = findW;