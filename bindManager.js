/*Methods for Binding pages with given parameters
 */

var bind = require('bind');

//Binding Login page, specifying an error (406) code or OK (200) code
function bindLogin(response,headers,m,code){
    bind.toFile('tpl/login.tpl',
        {
            message: m,
            username: "",
            password: ""
        },
        function (data) {
            response.writeHead(code, headers);
            response.end(data);
        }
    );
}

//Binding Profile page
function bindProfile(response,headers,id,h,w,meds,alls){
    bind.toFile('tpl/profile.tpl',
        {
            id: id,
            height: h,
            weight: w,
            med: meds,
            all: alls,
        },
        function(data)
        {
            response.writeHead(200, headers);
            response.end(data);
        }
    );
}

//Binding Support Page
function bindSupport(response,headers,id,qnas){
    bind.toFile('tpl/support.tpl',
        {
            id: id,
            qnas: qnas
        },
        function(data)
        {
            response.writeHead(200, headers);
            response.end(data);
        }
    );
}

//Binding Home Page
function bindHome(response,headers,id,username){
    bind.toFile('tpl/home.tpl',
        {
            id: id,
            username: username
        },
        function(data)
        {
            response.writeHead(200, headers);
            response.end(data);
        }
    );
}


exports.bindLogin = bindLogin;
exports.bindHome = bindHome;
exports.bindProfile = bindProfile;
exports.bindSupport = bindSupport;