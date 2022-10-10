<?php

include "../connect/connect.php";
header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');

try {

    

     $id = $_GET['id'];
     

    if(isset($id)){

        
        
        $id_vehicle = intval(filter_var($id, FILTER_SANITIZE_NUMBER_INT));
        $sql = $connection->prepare('SELECT * FROM crud_vehicle.vehicle where vehicle.id_vehicle = :id');
        $sql->bindValue(':id',$id_vehicle);
        $sql->execute();
        $result = $sql->fetchAll(PDO::FETCH_ASSOC);

    }else{

        $sql = 'SELECT * FROM crud_vehicle.vehicle';
        $result = $connection->query($sql)->fetchAll(PDO::FETCH_ASSOC);
        
    }

    $array = array();
    foreach ($result as $row) {
        array_push($array, $row);
    }
    if($result){
        echo json_encode($array);
    }else{

        $array = ['error' => 'Não foi encontrado resultados'];
        echo json_encode($array);
    }
    
    
} catch (PDOException $th) {

    $array = ["error" => "Erro ao executar query: ". $th->getMessage()];

    echo json_encode($array);
}
