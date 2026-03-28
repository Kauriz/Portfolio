<?php

    require_once "../../config.php";

    // On définit le chemin vers la racine du projet
    $path = "/user/E-Chat";

    // Définition du menu en PHP
    $menu = [
        ["Logo" => "Logo E-chat", "Lien" => $path . "/images/logoEChat.png"],
        ["Titre" => "E-chat"],
        ["Nom" => "Accueil", "Lien" => "index.php"],
        ["Nom" => "Profil", "Lien" => "profil.php"],
        ["Nom" => "Document", "Lien" => "document.php"],
        ["Nom" => "Planning", "Lien" => "planning.php"],
        ["Nom" => "Objectif", "Lien" => "objectif.php"]
    ];

    //Selecteur de la page à afficher

    switch($pageActuelle) {
        case "Accueil":
            require_once "accueil.php";
            break;
        case "Profil":
            require_once "profil.php";
            break;
        case "Document":
            require_once "document.php";
            break;
        case "Planning":
            require_once "planning.php";
            break;
        case "Objectif":
            require_once "objectif.php";
            break;    
        default:
            require_once "accueil.php";
            break;
    }

    //On transmet les données à Smarty

    $smarty->assign("menu", $menu);
    $smarty->assign("pageTemplate", $pageTemplate); // à définir dans le fichier php de la page actuelle
    $smarty->assign("title", "E-Chat");

    // On affiche avec le bon layout

    $smarty->display("accueilE-Chat.tpl");
?>