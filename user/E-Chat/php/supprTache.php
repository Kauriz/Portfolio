<?php

    require_once "../../../config.php";

    // On récupère l'id de la tache à supprimer
    $id = $_POST["id"];
    $id = (int)$id; 

    // On supprime les liens entre la tache à supprimer et ses tags
    $stmt = $mysqli->prepare("DELETE FROM Tag_Tache WHERE id_tache = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();

    // On supprime la tache
    $stmt = $mysqli->prepare("DELETE FROM Tache WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();

    // On redirige vers l'accueil
    header("Location: /user/E-Chat/index.php");
    exit;
?>