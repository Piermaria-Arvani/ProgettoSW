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
                <form method="POST" action="/scegli_portata" >
                    <input type="hidden" name="id" value="(: id :)">
                    <input type="hidden" name="data" value="(: data :)">
                    <input type="submit" class="(: pranzo :)" value = "PRANZO" name = "submit">
                </form>
                <form method="POST" action="/scegli_portata" >
                    <input type="hidden" name="id" value="(: id :)">
                    <input type="hidden" name="data" value="(: data :)">
                    <input type="submit" class="(: cena :)" value = "CENA" name = "submit">
                </form>
                
                <form method="POST" action="/scegli_data">
                    <input type ="submit" class="btn btn-default" value = "CONFERMA" name = "submit" id="bottone_conferma">
                    <input type="hidden" name="id" value="(: id :)">
                </form>
            </div>  
        </div> 
    </body>
</html>
