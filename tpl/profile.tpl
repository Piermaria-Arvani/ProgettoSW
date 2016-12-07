<!DOCTYPE html>

<html>
    <head>
        <meta charset ="utf-8">
        <title> Profilo </title>
        <link href="/styles/style.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container col-md-6 col-md-offset-2 mydiv" style = "text-align: center">
            <h2 style=" margin: 5% 0%">Profilo</h2>

            <form method="post" action="/home">
                <input type="hidden" name="id" style="text-align: left" value="(:id:)">
                <label class="label1">Altezza (cm)</label><br>
                <input class="input1 inputnum" type="text" name="height" value="(:height:)"><br>
                <label class="label1">Peso (kg)</label><br>
                <input class="input1 inputnum" type="text" name="weight" value="(:weight:)"><br>

                <div class="container col-md-8 col-md-offset-2 " style="padding-top: 5%" >
                    <div class="container col-md-4 col-md-offset-1" >
                        <span class="label1">Medicine assunte </span>
                        <select name="medicine" class="myselect" style="height: 100px"  multiple>
                        (:med ~
                        <option value="[:num:]" [:sel:]>[:name:]</option>
                        :)
                        </select>
                    </div>
                    <div class="container col-md-4 col-md-offset-1" >
                        <span class="label1" >Allergie e Intolleranze</span>
                        <select name="allergie" class="myselect" style="height: 100px" multiple>  
                        (:all ~
                        <option value="[:num:]" [:sel:]>[:name:]</option>
                        :)
                        </select>
                    </div>
                </div>
                <input type="submit" class="green_button" value="SALVA" name="submit">
            </form>

            <form method="post" style="margin: 5% 0%" action="/support">
                <input type="hidden" name="id" value="(:id:)">
                <input type="submit" class="red_button" value="Contatta un Medico" name="submit">
            </form>

        </div>
    </body>
</html>