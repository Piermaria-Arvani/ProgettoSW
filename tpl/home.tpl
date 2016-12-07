<!DOCTYPE html>

<html>
    <head>
        <meta charset ="utf-8">
        <title> Home </title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <link href="/styles/style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="container col-md-6 col-md-offset-2 mydiv" style = "text-align: center">

            <form method="post" action="/profile" style="padding: 5% 0%">
                <label class="label1" style="font-weight: bold">Benvenuto, (:username:)</label>
                <input type="hidden" name="id" value="(:id:)">&nbsp;&nbsp;
                <input type="submit" class="btn btn-default" name="submit" value="Profilo" style="margin-left:10%" >
            </form>

            <form method="post" action="/scegli_data">
                <br><br>
                <input type="hidden" name="id" value="(:id:)">&nbsp;&nbsp;
                <input type="submit" class="btn btn-default" id="prenota_pasti" name="submit" value="Prenota Pasti" >
            </form>
        </div>
    </body>
</html>