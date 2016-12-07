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
        <div class="container col-md-6 col-md-offset-3 mydiv" style = "text-align: center">
            <div style = "">
                <div>
                    <label style="font-size: 200%">Oggi ti consigliamo</label>
                    <br>
                </div>

                <form method="POST" method="POST" action="/scegli_portata"> 
                    <div class="container col-md-12 " style="background-color: burlywood ">
                        <input type="hidden" name="tipo" value="(: tipo :)">
                        <input type = "hidden" name ="pasto" value="(: pasto :)">
                        <input type="hidden" name="id" value="(: id :)">
                        <input type="hidden" name="data" value="(: data :)">
                        <div class="container col-md-6 " >
                            <img src="(: piatto1 ~ [: foto :] :)" alt="(: piatto1 ~ [: nome :] :)">
                        </div>
                        <div class="container col-md-6 " >
                            <label class="label1" style="padding-top:25%">(: piatto1 ~ [: nome :] :)</label>
                            <input type="radio" name="piatto" value="1" style="height: 25px; width: 25px;"> 
                        </div>
                    </div>

                    <label style="font-size: 180%; padding:2% 0%"> Oppure puoi scegliere tra:</label>

                    <div class="container col-md-12 " style="background-color: burlywood; margin-top:2%  ">
                        <div class="container col-md-6 " >
                            <img src="(: piatto2 ~ [: foto :] :)" alt="(: piatto2 ~ [: nome :] :)">
                        </div>
                        <div class="container col-md-6 " >
                            <label class="label1" style="padding-top:25%">(: piatto2 ~ [: nome :] :)</label>
                            <input type="radio" name="piatto" value="2" style="height: 25px; width: 25px;"> 
                        </div>
                    </div>

                    <div class="container col-md-12 " style="background-color: burlywood; margin-top:2%  ">
                        <div class="container col-md-6 " >
                            <img src="(: piatto3 ~ [: foto :] :)" alt="(: piatto3 ~ [: nome :] :)" >
                        </div>
                        <div class="container col-md-6 " >
                            <label class="label1" style="padding-top:25%">(: piatto3 ~ [: nome :] :)</label>
                            <input type="radio" name="piatto" value="3" style="height: 25px; width: 25px;"> 
                        </div>
                    </div>

                    <div class="container col-md-12 " style="background-color: burlywood; margin-top:2% ">
                        <div class="container col-md-6 " >
                            <img src="(: piatto4 ~ [: foto :] :)" alt="(: piatto4 ~ [: nome :] :)">
                        </div>
                        <div class="container col-md-6 " >
                            <label class="label1" style="padding-top:25%">(: piatto4 ~ [: nome :] :)</label>
                            <input type="radio" name="piatto" value="4" style="height: 25px; width: 25px;"> 
                        </div>
                    </div>

                    <input type ="submit" class="green_button" value ="CONFERMA" name = "submit" style="margin-top: 5%"  >
                </form>
            </div> 
        </div>
    </body>
</html>
