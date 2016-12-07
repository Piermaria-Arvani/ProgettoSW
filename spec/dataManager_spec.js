/* Test for dataManager.js
* it checks if the functions in the library behave correctly
*/


var dataManager = require('../dataManager.js');

var users=[];
var profiles=[];
var qnas=[];
var medicines=[];
var allergies=[];
var flags=[false,false,false,false]


dataManager.init(users,profiles,qnas,medicines,allergies,1,"utente_prova","password");
qnas.push(new dataManager.QnA(1,"Domanda2","Risposta2"));


describe("Test Costruttori ", function() {
    it("new User", function () {
        var expected=JSON.stringify({
            id: 1,
            username: "utente_prova",
            password: "password"
        });
        expect(JSON.stringify(users[0])).toEqual(expected);
        if (JSON.stringify(users[0]) == expected) {
            flags[0] = true;
        }
    });
    it("new Profile ", function () {
        var expected=JSON.stringify({
                id: 1,
                h : "0",
                w : "0"
        });
        expect(JSON.stringify(profiles[0])).toEqual(expected);
        if (JSON.stringify(profiles[0]) == expected){
                flags[1] = true;
        }
    });
    it("new Medicines ", function () {
        var expected=JSON.stringify({
            id: 1,
            medicine_array: ["", "", "", "", "", ""]
        });
        expect(JSON.stringify(medicines[0])).toEqual(expected);
        if (JSON.stringify(medicines[0]) == expected) {
            flags[2] = true;
        }
    });
    it("new Allergies ", function () {
        var expected=JSON.stringify({
            id: 1,
            allergie_array: ["", "", "", "", ""]
        });
        expect(JSON.stringify(allergies[0])).toEqual(expected);
        if (JSON.stringify(allergies[0]) == expected) {
            flags[3] = true;
        }
    });
    it("new empty QnA ", function() {
        expect(JSON.stringify(new dataManager.QnA(1,"Domanda1","")))
            .toEqual(JSON.stringify({
                id:1,
                q:"Domanda1",
                a:"in attesa di risposta"
            }));
    });
    it("new answered QnA ", function() {
        expect(JSON.stringify(qnas[0]))
            .toEqual(JSON.stringify({
                id:1,
                q:"Domanda2",
                a:"Risposta2"
            }));
    });
});


describe("Init", function() {
    it("new User", function () {
        expect(flags).toEqual([true,true,true,true]);
    });
});

describe("Find", function() {
    it("UserID from Username and Password", function () {
        expect(dataManager.findUserID(users,"utente_prova","password")).toBe(1);
    });
    it("Username from ID", function () {
        expect(dataManager.findUsername(users,1)).toBe("utente_prova");
    });
    it("Username from ID not existing", function () {
        expect(dataManager.findUsername(users,134)).toBe("");
    });
    it("Heigth from ID", function () {
        expect(dataManager.findH(profiles,1)).toBe("0");
    });
    it("Weigth from ID", function () {
        expect(dataManager.findW(profiles,1)).toBe("0");
    });
    it("QnAs from ID", function () {
        expect(dataManager.findQnas(qnas,1)).toEqual([new dataManager.QnA(1,"Domanda2","Risposta2")]);
    });
});


describe("Update", function() {
    it("Profile", function () {
        dataManager.updateProfile(profiles,1,180,75);
        var expected=JSON.stringify({
            id: 1,
            h : 180,
            w : 75
        });
        expect(JSON.stringify(profiles[0])).toEqual(expected);
    });
    it("Medicines", function () {
        dataManager.updateMeds(medicines,1,[2,4]);
        var expected=JSON.stringify({
            id: 1,
            medicine_array: ["", "", "selected", "", "selected", ""]
        });
        expect(JSON.stringify(medicines[0])).toEqual(expected);
    });
    it("Allergies", function () {
        dataManager.updateAller(allergies,1,[0,2,3]);
        var expected=JSON.stringify({
            id: 1,
            allergie_array: ["selected", "", "selected","selected", ""]
        });
        expect(JSON.stringify(allergies[0])).toEqual(expected);
    });
});





