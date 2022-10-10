<?php

include "../connect/connect.php";
header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');


try {

    $model = $_POST['model'];
    $carbrand_name = $_POST['carbrand_name'];
    $year_manufacture = intval(filter_var($_POST['year_manufacture'], FILTER_SANITIZE_NUMBER_INT));
    $year_model = intval(filter_var($_POST['year_model'], FILTER_SANITIZE_NUMBER_INT));
    $category = $_POST['category'];

    $sql = $connection->prepare('INSERT INTO vehicle (model, carbrand_name, year_manufacture, year_model, category) 
    values (:model, :carbrand_name, :year_manufacture, :year_model, :category)');

    $sql->bindParam(':model', $model);
    $sql->bindParam(':carbrand_name', $carbrand_name);
    $sql->bindParam(':year_manufacture', $year_manufacture);
    $sql->bindParam(':year_model', $year_model);
    $sql->bindParam(':category', $category);

    $sql->execute();


    $array = ["success" => "Gravado com Sucesso"];

    echo json_encode($array);
    
} catch (Exception $e) {

    $array = ["error" => "Erro ao gravar: " . $e->getMessage()];

    echo json_encode($array);

} catch (PDOException $e) {

    $array = ["error" => "Erro ao gravar: " . $e->getMessage()];

    echo json_encode($array);
}
