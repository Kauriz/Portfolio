<?php
    error_reporting(E_ALL);
ini_set('display_errors', 1);
    require_once "../../../config.php";

    // On récupère l'id de la tache et l'id du tag
    $idTag = $_POST["id_tag"];
    $idTag = (int)$idTag; 

    $idTache = $_POST["id_tache"];
    $idTache = (int)$idTache;

    // On regarde si le tag n'est pas déjà relier à la tache

    $stmt = $mysqli->prepare("SELECT COUNT(*) FROM Tag_Tache WHERE id_tache = ? AND id_tag = ?");
    $stmt->bind_param("ii", $idTache, $idTag);
    $stmt->execute();

    $stmt->bind_result($count);
    $stmt->fetch();
    $stmt->free_result();

    if($count > 0)
    {
        // Si le tag est déjà lié on fait rien
        $stmt->close();
        header("Location: /user/E-Chat/index.php");
        exit;
    }
    $stmt->close();

    // On vérifie que la tache existe

    $stmt = $mysqli->prepare("SELECT COUNT(*) FROM Tache WHERE id = ?");
    $stmt->bind_param("i", $idTache);
    $stmt->execute();

    $stmt->bind_result($count);
    $stmt->fetch();
    $stmt->free_result();

    if($count == 0)
    {
        // Si la tache n'existe pas 
        $stmt->close();
        echo("Erreur lors de l'association du tag à la tache, la tache n'existe pas, idTache = " . $idTache);
        exit;
    }

    $stmt->close();

    // On vérifie que le tag existe

    $stmt = $mysqli->prepare("SELECT COUNT(*) FROM Tag WHERE id = ?");
    $stmt->bind_param("i", $idTag);
    $stmt->execute();

    $stmt->bind_result($count);
    $stmt->fetch();
    $stmt->free_result();

    if($count == 0)
    {
        // Si la tache n'existe pas 
        $stmt->close();
        echo("Erreur lors de l'association du tag à la tache, le tag n'existe pas");
        exit;
    }

    // On rajoute dans la BDD le tag à la tache
    $stmt = $mysqli->prepare("INSERT INTO Tag_Tache (id_tache,id_tag) VALUES (?,?)");
    $stmt->bind_param("ii", $idTache, $idTag);
    $stmt->execute();
    $stmt->close();

    // On redirige vers l'accueil
    header("Location: /user/E-Chat/index.php");
    exit;
?>