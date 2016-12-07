<!DOCTYPE html>

<html>
    <head>
        <meta charset ="utf-8">
        <title> Login </title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <link href="/styles/style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
         <div class="container col-md-6 col-md-offset-2 mydiv" style = "text-align: center">

            <br>
            <h2>Accedi con le credenziali fornite</h2>
            <label style="color: red; font-weight: bold">(:message:)</label><br><br>

            <form method="post" action="/home">
                <label class="label1">Nome</label><br>
                <input type="text" class="input1" name="username" value="(:username:)"><br>
                <label class="label1">Password</label><br>
                <input type="password" class="input1" name="password" value="(:password:)"><br>
                <input type="submit" class="green_button" value="Accedi" name="submit"><br>
            </form>

        </div>
    </body>
</html>