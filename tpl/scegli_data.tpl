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
        <div class="container col-md-6 col-md-offset-3 mydiv" style = "text-align: center">
            <div>   
                <div>
                    <label style="font-size: 250%; margin-bottom:5%">Scegli una data</label>
                </div>
                
                (: giorni ~
                    <div>
                        <form method="POST" action="/pranzo_cena" > 
                            <input type="hidden" name="id" value="[:id:]">
                            <input type="hidden" name="year" value="[: year :]">
                            <input type="hidden" name="month" value="[: month :]">
                            <input type="hidden" name="day" value="[:day:]">
                             <input type ="submit" class= "[:class:]"  value = "[: nome :] [: day :]/[: month :]" name = "submit" >
                        </form>
                    </div>
                :)
            </div>  
            <form method="post" action="/home">
                <br><br>
                <input type="hidden" name="id" value="(:id:)">&nbsp;&nbsp;
                <input type="submit" class="green_button" name="submit" value="Torna alla Home" >
            </form>
        </div> 
    </body>
</html>

