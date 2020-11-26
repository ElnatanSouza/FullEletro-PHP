<?php

require "./Models/Comentario.php";

header("Access-Control_Allow_Origin:*");
header("Content-type: application/json");

$comentarios = Comentario::getAll();

echo json_encode($comentarios);
