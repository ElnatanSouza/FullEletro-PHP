<?php

require "./Models/Produto.php";

header("Access-Control_Allow_Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

$produtos = Produto::getAll();

echo json_encode($produtos);
