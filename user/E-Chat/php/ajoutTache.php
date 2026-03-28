<?php
    require_once "../../../config.php";

    $nomTache   = $_POST["nom"];
    $date_debut = $_POST["date"];
    $duree      = $_POST["duree"];

    // Si alias existe ET n’est pas vide → on l’utilise, sinon NULL
    $alias = !empty($_POST["alias"]) ? $_POST["alias"] : null;

    $stmt = $mysqli->prepare("INSERT INTO Tache (nom, alias, date_debut, duree) VALUES (?,?,?,?)");
    $stmt->bind_param("sssi", $nomTache, $alias, $date_debut, $duree);

    $stmt->execute();
    $stmt->close();

    header("Location: /user/E-Chat/index.php");
    exit;
?>