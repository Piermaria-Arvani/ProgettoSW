<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <link href="/styles/style.css" rel="stylesheet" type="text/css">
        <title>Ordina il tuo pasto</title>
    </head>
    <body>
        <div class="container col-md-6 col-md-offset-3" style = "text-align: center">
            <div class="jumbotron">   
                <div>
                    <label style="font-size: 250%">Prenota le portate</label>
                </div>
                
                <form method="POST" action="http://127.0.0.1:1337/scegli_piatto" >
                    <input type = "submit" class = "btn btn-default" value = "PRIMI" name = "submit" id="bottone">
                    <input type = "hidden" name ="pasto" value="(:pasto:)">
                </form>
                
                <form method="POST" action="http://127.0.0.1:1337/scegli_piatto" >
                    <input type ="submit" class="btn btn-default" value = "SECONDI" name = "submit" id="bottone">
                    <input type = "hidden" name ="pasto" value="(:pasto:)">
                </form>

                <form method="POST" action="http://127.0.0.1:1337/scegli_piatto" >
                    <input type ="submit" class="btn btn-default" value = "CONTORNI" name = "submit" id="bottone">
                    <input type = "hidden" name ="pasto" value="(:pasto:)">
                </form>

                <form method="POST" action="http://127.0.0.1:1337/scegli_piatto" >
                    <input type ="submit" class="btn btn-default" value = "DOLCI" name = "submit" id="bottone">
                    <input type = "hidden" name ="pasto" value="(:pasto:)">
                </form>
                
                <form method="POST" action="http://127.0.0.1:1337/pranzo_cena">
                    <input type ="submit" class="btn btn-default" value = "CONFERMA" name = "submit" id="bottone_conferma" >
                </form>
            </div>  
        </div> 
    </body>
</html>
