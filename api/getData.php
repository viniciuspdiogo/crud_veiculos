<?php

include "../connect/connect.php";
header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');

try {
    $sql = 'SELECT * FROM crud_vehicle.vehicle';

    $result = $connection->query($sql)->fetchAll(PDO::FETCH_ASSOC);

    $array = [];
    foreach ($result as $row) {
        array_push($array, $row);
    }
   
    echo json_encode($array);
    
} catch (PDOException $th) {

    $array = ["error" => "Erro ao executar query: ". $e->getMessage()];

    echo json_encode($array);
}
