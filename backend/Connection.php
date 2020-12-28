<?php

class Connection
{
    public static function getDb()
    {
        $conn = new PDO(
            "mysql:host=localhost;dbname=fulleletro;charset=utf8",
            "root",
            ""
        );

        if ($conn) {
            return $conn;
        } else {
            return "<h1>Erro ao realizar a conexão com o Banco de dados!</h1>";
        }
    }
}

    // $servername = "localhost";
    // $username = "root";
    // $password = "";
    // $database = "fulleletro";

    // // Criando conexão com o BD!
    // $conn = mysqli_connect($servername, $username, $password, $database);

    // // Verificando a conexão
    // if (!$conn){
    //     die("A conexão com o Banco de Dados falhou: " . mysqli_connect_error());
    // }

    // if (isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['msg'])) {
    //     $nome = $_POST['nome'];
    //     $email = $_POST['email'];
    //     $msg = $_POST['msg'];

    //     $sql = "insert into comentarios (nome, email, msg) 
    //     values ('$nome', '$email', '$msg')";
    //     $result = $conn->query($sql);
    // }
