<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "fulleletro";

    // Criando conexão com o BD!
    $conn = mysqli_connect($servername, $username, $password, $database);

    // Verificando a conexão
    if (!$conn){
        die("A conexão com o Banco de Dados falhou: " . mysqli_connect_error());
    }
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Produtos - Full Stack Eletro</title>
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

        <!-- Aba de categorias -->
        <aside class="categorias">
            <p class="paragrafoCateg"> Categorias </p>
            <br>
            <ul class="lista">
                <li onclick="exibirTodos()"> Todos (12) </li>
                <li onclick="exibir('geladeira')"> Geladeiras (3) </li>
                <li onclick="exibir('fogao')"> Fogões (2) </li>
                <li onclick="exibir('microondas')"> Microondas (3) </li>
                <li onclick="exibir('lavaRoupa')"> Lavadoura de roupa (2) </li>
                <li onclick="exibir('lavaLouca')"> Lava-louças (2) </li>
            </ul>
        </aside>

        <?php
    $sql = "select * from produtos";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($rows = $result->fetch_assoc()) {
    ?>
        <div class="prod" id="<?php echo $rows['categoria']; ?>">

            <img class="tamanhoprod" src="<?php echo $rows['imagem']; ?>" width="120px" onmouseover="destaque(this)"
                onmouseout="redimensiona(this)" />
            <br />            
            <p> <?php echo $rows['descricao_produto']; ?> </p>
            <br />
            <p class="strike"> R$ <?php echo $rows['preco_real']; ?> </p>
            <br />
            <p class="preco"> R$ <?php echo $rows['preco_desc']; ?> </p>
            <hr />

        </div>

        <?php
        }
    } 
    else {
        echo "Nenhum produto cadastrado";
    }
    ?>
        <br /> <br />
        <hr>

        <br /> <br /> <br /> <br />
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