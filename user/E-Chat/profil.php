<?php
    // Dans ce fichier, on prépare tout ce qui est nécéssaire à l'application 
    $pageTemplate = "profilE-Chat.tpl";

    // On va chercher les différents tags dans la base de donnée

    $stmt = $mysqli->prepare("SELECT * FROM Tag");
    $stmt->execute();
    $result = $stmt->get_result();
    $tags = $result->fetch_all(MYSQLI_ASSOC);
    $stmt->close();

    // On va chercher les différentes taches dans la base de donnée

    $stmt = $mysqli->prepare("SELECT * FROM Tache");
    $stmt->execute();
    $result = $stmt->get_result();
    $taches = $result->fetch_all(MYSQLI_ASSOC);
    $stmt->close();

    //On envoie à Smarty
    $smarty->assign("tags", $tags);
    $smarty->assign("taches", $taches);


?>