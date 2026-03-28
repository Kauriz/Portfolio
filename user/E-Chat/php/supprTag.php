<?php
    require_once "../../../config.php";

    if (isset($_POST["nom"]) && !empty($_POST["nom"])) 
    {
        $nomTag = $_POST["nom"];

        $stmt = $mysqli->prepare("DELETE FROM Tag WHERE nom = ?");
        $stmt->bind_param("s", $nomTag);
        $stmt->execute();
        $stmt->close();
    }
    header("Location: /user/E-Chat/index.php");
    exit;
?>