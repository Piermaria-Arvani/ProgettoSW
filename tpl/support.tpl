<!DOCTYPE html>

<html>
    <head>
        <meta charset ="utf-8">
        <title> Contatta un Medico </title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <link href="/styles/style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
         <div class="container col-md-6 col-md-offset-2 mydiv" style = "text-align: center">

            <h3 style="padding-top: 2mm; margin-bottom: 2mm;">Contatta un Medico</h3>

            <form id="submit_form" method="post" action="/support">
                <input type="hidden" name="id" value="(:id:)">
                <textarea name ="testo" rows="5" cols="40" form="submit_form"></textarea><br>
                <input class="green_button" type="submit" style="width:200px;color:white;background-color:green;border:2px solid #336600;" value="INVIA" name="submit"><br>
            </form>

            <h3 style="margin-top: 6mm; margin-bottom: 2mm;">Risposte ai tuoi messaggi</h3>
                (:qnas ~
                <textarea name="question" rows="3" cols="40">[:q:]</textarea><br>
                <textarea name="answer" rows="3" cols="40">[:a:]</textarea>
                :)

            <form method="post" action="/home">
                <input type="hidden" name="id" value="(:id:)">
                <input class="red_button" type="submit" style="width:200px;color:white;background-color:red;border:2px solid #660900;" value="Torna alla Home" name="submit"><br><br>
            </form>

        </div>
    </body>
</html>