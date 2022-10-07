<?php
try {
    $connection = new PDO('mysql:host=localhost;dbname=crud_vehicle', 'root', 'password');
} catch (PDOException $e) {

    echo 'Erro ao se conectar no banco de dados: ' . $e->getMessage();
}
