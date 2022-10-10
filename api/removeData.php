<?php

include "../connect/connect.php";
header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');

try {
    
    $id = intval(filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT));
    
    if(is_int($id)){
        
        $sql = $connection->prepare('delete from vehicle where id_vehicle = :id');
        $sql->bindParam(':id', $id);

        if($sql->execute()){
            $array = array('response' => 'Deletado com sucesso!');
        }else{
            $array = array('response' => 'Erro ao deletar: '.$sql->errorInfo());
        }

        echo json_encode($array);
    }else{
        $array = array('response' => 'Valor Inválido');
        echo json_encode($array);
    }
} catch (PDOException $e) {
    $array = array('response' => 'Erro ao deletar: '.$e->getMessage());
    echo json_encode($array);
}
catch (Exception $e) {
    $array = array('response' => 'Erro ao deletar: '.$e->getMessage());
    echo json_encode($array);
}
