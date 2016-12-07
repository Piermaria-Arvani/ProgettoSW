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
            <div >   
                <div>
                    <label style="font-size: 250%; margin-bottom:10%">Prenota le portate</label>
                </div>
                
                <form method="POST" action="/scegli_piatto" >
                    <input type = "submit" class = "non_prenotato" value = "PRIMI" name = "submit">
                    <input type="hidden" name="id" value="(: id :)">
                    <input type="hidden" name="data" value="(: data :)">
                    <input type = "hidden" name ="pasto" value="(: pasto :)">
                </form>
                
                <form method="POST" action="/scegli_piatto" >
                    <input type ="submit" class="non_prenotato" value = "SECONDI" name = "submit" >
                    <input type="hidden" name="id" value="(: id :)">
                    <input type="hidden" name="data" value="(: data :)">
                    <input type = "hidden" name ="pasto" value="(: pasto :)">
                </form>

                <form method="POST" action="/scegli_piatto" >
                    <input type ="submit" class="non_prenotato" value = "CONTORNI" name = "submit" >
                    <input type="hidden" name="id" value="(: id :)">
                    <input type="hidden" name="data" value="(: data :)">
                    <input type = "hidden" name ="pasto" value="(: pasto :)">
                </form>

                <form method="POST" action="/scegli_piatto" >
                    <input type ="submit" class="non_prenotato" value = "DOLCI" name = "submit">
                    <input type="hidden" name="id" value="(: id :)">
                    <input type="hidden" name="data" value="(: data :)">
                    <input type = "hidden" name ="pasto" value="(: pasto :)">
                </form>
                
                <form method="POST" action="/pranzo_cena">
                    <input type ="submit" class="green_button" value = "CONFERMA" name = "submit" >
                    <input type="hidden" name="id" value="(: id :)">
                    <input type="hidden" name="data" value="(: data :)">
                    <input type = "hidden" name ="pasto" value="(: pasto :)">
                </form>
            </div>  
        </div> 
    </body>
</html>
