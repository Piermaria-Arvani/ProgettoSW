<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/redmond/jquery-ui.css">
        <link href="/styles/style.css" rel="stylesheet" type="text/css">
        <title>Ordina il piatto</title>
    </head>
    <body>
        
        <div class="container col-md-6 col-md-offset-3" style = "text-align: center">
            <div class="jumbotron" style = "">
            <div>
                <label style="font-size: 250%">Oggi ti consigliamo</label>
                <br>
            </div>

            <form method="POST" method="POST" action="/scegli_portata" > 
                <input type="hidden" name="tipo" value="(: tipo :)">
                <input type = "hidden" name ="pasto" value="(: pasto :)">
                <input type="hidden" name="id" value="(: id :)">
                <input type="hidden" name="data" value="(: data :)">
                <div style="background-color: burlywood ">
                    <img src="(: piatto1 ~ [: foto :] :)" alt="(: piatto1 ~ [: nome :] :)"><br>
                    <label style="font-size: 200%;">(: piatto1 ~ [: nome :] :)</label>
                    <input type="radio" name="piatto" value="1" style="height: 25px; width: 25px;"> 
                </div>
                
                <br>
                
                <div>
                <label style="font-size: 250%"> Oppure puoi scegliere tra:</label>
                </div>
                
                <br>
                
                <div style="background-color: burlywood ">
                    <img src="(: piatto2 ~ [: foto :] :)" alt="(: piatto2 ~ [: nome :] :)"><br>
                    <label style="font-size: 200%;">(: piatto2 ~ [: nome :] :)</label>
                    <input type="radio" name="piatto" value="2" style="height: 25px; width: 25px;"> 
                </div>
                
                <br>
                
                <div style="background-color: burlywood ">
                    <img src="(: piatto3 ~ [: foto :] :)" alt="(: piatto3 ~ [: nome :] :)" ><br>
                    <label style="font-size: 200%;">(: piatto3 ~ [: nome :] :)</label>
                    <input type="radio" name="piatto" value="3" style="height: 25px; width: 25px;"> 
                </div>
                
                <br>
                
                <div style="background-color: burlywood ">
                    <img src="(: piatto4 ~ [: foto :] :)" alt="(: piatto4 ~ [: nome :] :)"><br>
                    <label style="font-size: 200%;">(: piatto4 ~ [: nome :] :)</label>
                    <input type="radio" name="piatto" value="4" style="height: 25px; width: 25px;"> 
                </div>
                
                <br><br>
                
                <input type ="submit" class="btn btn-default" value ="CONFERMA" name = "submit" id="bottone_conferma" >
            </form>
       </div> 
        </div>
    </body>
</html>
