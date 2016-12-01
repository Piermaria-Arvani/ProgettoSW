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
                    <label style="font-size: 250%">Scegli una data</label>
                </div>
                
                (: giorni ~
                    <div>
                        <form method="POST" action="/pranzo_cena" > 
                            <input type="hidden" name="id" value="2">
                            <input type="hidden" name="year" value="[: year :]">
                            <input type="hidden" name="month" value="[: month :]">
                            <input type="hidden" name="day" value="[:day:]">
                             <input type ="submit" class="btn btn-default" value = "[: nome :] [: day :]/[: month :]" name = "submit" id="bottone">
                        </form>
                    </div>
                :)
            </div>  
        </div> 
    </body>
</html>

