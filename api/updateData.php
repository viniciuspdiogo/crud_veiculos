<?php

include "../connect/connect.php";
header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');


try {
    $id = intval(filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT));
    $model = $_POST['model'];
    $carbrand_name = $_POST['carbrand_name'];
    $year_manufacture = intval(filter_var($_POST['year_manufacture'], FILTER_SANITIZE_NUMBER_INT));
    $year_model = intval(filter_var($_POST['year_model'], FILTER_SANITIZE_NUMBER_INT));
    $category = $_POST['category'];

    $sql = $connection->prepare('update vehicle set model = :model, carbrand_name = :carbrand_name, year_manufacture = :year_manufacture, year_model = :year_model, category = :category where id_vehicle = :id');

    $sql->bindParam(':model', $model);
    $sql->bindParam(':carbrand_name', $carbrand_name);
    $sql->bindParam(':year_manufacture', $year_manufacture);
    $sql->bindParam(':year_model', $year_model);
    $sql->bindParam(':category', $category);
    $sql->bindParam(':id', $id);

    $sql->execute();

    header('Location: ../edit.html?id='.$id.'&message=Atualizado com Sucesso');
    exit;
    
} catch (Exception $e) {

    header('Location: ../edit.html?id='.$id.'&message=Erro ao atualizar');
    exit;

} catch (PDOException $e) {

    header('Location: ../edit.html?id='.$id.'&message=Erro ao atualizar');
    exit;
}
