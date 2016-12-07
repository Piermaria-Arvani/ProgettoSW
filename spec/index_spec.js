/* Test for index.js
* it checks if the server answers with 200 code header
*/

var request = require("request");

var base_url="http://localhost:5000";

describe("Test /", function() {
    it("returns status code 200", function(done) {
        request.get(
            base_url + "/",
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

describe("Test /home", function() {

    var data = {
        username: 'admin',
        password: 'admin'
    };
    //How to init properly ambient of the server?
    it("returns status code 406, because server isn't properly initialized", function (done) {

        request.post(base_url + "/home", data,
            function (err, res, body) {
                expect(res.statusCode).toBe(406);
                done();
            });
    });

    var data1 = {};
    it("returns status code 406 because of empty fields in login", function (done) {
        request.post(base_url + "/home", data1,
            function (err, res, body) {
                expect(res.statusCode).toBe(406);
                done();
            }
        );
    });

    /*
     //How to init properly the body of the request?
    var data2 = {
        id:1
    };
    it("returns status code 200, session existing", function (done) {
        request.post(base_url + "/home", data2,
            function (err, res, body) {
                expect(res.statusCode).toBe(200);
                done();
            }
        );
    });*/

});

describe("Test /profile",function(){

    /*
    //How to init properly the body of the request?

    var data1 = {
        submit:"Torna alla Home",
        id:1
    };
    it("returns status code 200, session existing", function (done) {
        request.post(base_url + "/profile", data1,
            function (err, res, body) {
                expect(res.statusCode).toBe(200);
                done();
            }
        );
    });
    */

    var data2 = {};
    it("returns status code 406, session unexisting", function (done) {
        request.post(base_url + "/profile", data2,
            function (err, res, body) {
                expect(res.statusCode).toBe(406);
                done();
            }
        );
    });

});




