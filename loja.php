<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Nossas Lojas - Full Stack Eletro</title>
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

        <p class="nossasLojas"> Nossas Lojas</p>

        <br> <br>

        <table class="lojas table text-center my-0" cellpadding="20">
            <tr>
                <td>
                    <h3> São Paulo </h3> <br>
                    <p>Avenida Pixiguinha, 3297, São Paulo - SP</p>
                    <p> Brás - Cep: 05198-350 </p>
                    <p> (11) 2558-9875 </p>
                </td>
                <td>
                    <h3> Rio de Janeiro </h3> <br>
                    <p> Avenida Bossa Nova, 2207, Rio de Janeiro - RJ </p>
                    <p> Tijuca - Cep: 0753-015 </p>
                    <p> (21) 3859-9812 </p>
                </td>
                <td>
                    <h3> Minas Gerais </h3> <br>
                    <p> Travessa Queijo Fino, 168, Minas Gerais - MG </p>
                    <p> Lagoa - Cep: 0438-066 </p>
                    <p> (31) 4621-6712 </p>
                </td>
            </tr>
        </table>
        <br> <br> <br>
        <hr>

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