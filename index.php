<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Loja Full Stack Eletro</title>
    <link rel="icon" href="./public/img/logotitle.svg">

    <link rel="stylesheet" href="./public/css/estilo.css">
    <link rel="stylesheet" href="./public/css/global.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <!-- Menu -->
    <?php 
        include_once('menu.html');
    ?>
    
    <div class="container-fluid">

        <br> <br>

        <main>
            <h2 class="bem_vindo">Seja Bem Vindo(a)!</h2> <br> <br>
            <p>Aqui em nossa loja <u>programadores tem desconto</u> nos produtos para sua casa!</p>
        </main>

        <br> <br> <br> <br>
        <br> <br> <br> <br>
        <!-- Rodapé-->
        <?php
            include_once('rodape.html');    
        ?>
    </div>





    <script async src="./public/js/script.js"></script>
    <script defer src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
    </script>
    <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
    </script>

</body>

</html>