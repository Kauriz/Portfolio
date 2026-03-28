<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);   

require_once "config.php";

// Vérifier que les données sont envoyées
if(!isset($_POST["mdp"])) {
    header("Location: /index.php?erreur=donnees_manquantes");
    exit;
}


$password = $_POST["mdp"];


// Vérifier le mot de passe
if($password == "22507972") {
    // Connexion réussie - créer la session
    $_SESSION["user_nom"] = "Moi";
    header("Location: /index.php");
    exit;
} else {
    // Mot de passe incorrect
    header("Location: /index.php?erreur=identifiants_incorrects");
    exit;
}
?>