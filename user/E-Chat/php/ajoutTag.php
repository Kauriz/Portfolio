<?php
    require_once "../../../config.php";
    $nomTag = $_POST["nom"];

    // On vérifie si le tag n'existe pas déjà

    $check = true;
    $stmt = $mysqli->prepare("SELECT nom FROM Tag");
    $stmt->execute();
    $result = $stmt->get_result();
    $tags = $result->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    foreach($tags as $tag)
    {
        if ($tag["nom"] == $nomTag)
        {
            $check = false;
        }
    }

    if ($check)
    {
        // Vérifie si un fichier a été uploadé
        if (isset($_FILES["image"]) && $_FILES["image"]["error"])
        {
            // Infos du fichier
            $nomFichier = $_FILES['image']['name'];
            $tailleFichier = $_FILES['image']['size'];
            $tmpFichier = $_FILES['image']['tmp_name'];

            // On le met dans le dossier d'upload du site
            $destination = "/upload/images" . basename($nomFichier);

            if (!move_uploaded_file($tmpFichier, $destination)) 
            {
                echo "Erreur lors de l'upload.";
            }
        }
        else
        {
            $destination = "/user/E-Chat/images/tagImageDefaut.png";
        }

        // On ajoute dans la base de donner le tag
        $stmt = $mysqli->prepare("INSERT INTO Tag (nom, pathImg) VALUES (?,?)");
        $stmt->bind_param("ss", $nomTag, $destination);
        $stmt->execute();
        $stmt->close();
    }
    header("Location: /user/E-Chat/index.php");
    exit;
?>