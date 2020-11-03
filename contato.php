<?php
include_once('conexaosql.php');
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contato - Full Stack Eletro</title>
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

        <center>
            <p class="faleConos"> Fale Conosco </p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src="./public/img/whats.png" alt="Logo WhatsApp" title="Imagem WhatsApp" width="6%">
                            (11)
                            98887-9788 | | (11) 95293-5270
                        </td>
                        <td>
                            <img src="./public/img/email.png" alt="Logo Email" title="Imagem Email" width="6%">
                            contato@fullstackeletro.com.br || vendas@fullstackeletro.com
                        </td>
                    </tr>
                </tbody>
            </table>
        </center>

        <br> <br> <br>
        <form method="post" action="#">
            <h4 class="contato">
                Nome Completo: <br>
                <input id="fale_form" class="nome" type="text" name="nome" placeholder="Digite aqui seu nome">
                <br> Email:
                <br>
                <input id="fale_form" class="email" type="email" name="email" placeholder="Digite aqui seu email">
                <br>
            </h4>
            <h4 class="mensagem">
                Mensagem: <br>
                <textarea id="fale_form" class="textarea" name="msg" placeholder="Digite sua mensagem aqui"></textarea> <br>

                <input id="fale_botao" class="botao" type="submit" value="Enviar"> <br>
            </h4>

        </form>
        <br>
        <hr>

        <?php
    $sql = "select * from comentarios";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while($rows = $result->fetch_assoc()) {
            echo "Data: ", $rows['dia']; 
            echo "<br>";
            echo "Nome: ", $rows['nome']; 
            echo "<br>";
            echo "Mensagem: ", $rows['msg']; 
            echo "<br>";
            echo "<hr>";
        }
    }
    else {
        echo "Nenhum comentário ainda!";
    }

    ?>

        <br> <br> <br> <br>
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