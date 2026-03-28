<?php

// Accès hébèrgement https://dash.infinityfree.com/accounts/if0_39801560/domains/lebellab.ct.ws


// Setup SMARTY
require_once __DIR__ . "/libs/smarty/libs/Smarty.class.php";

use Smarty;

$smarty = new \Smarty\Smarty();

// Définir les dossiers de travail
$smarty->setTemplateDir(__DIR__ . '/templates/');
$smarty->setCompileDir(__DIR__ . '/templates_c/');
$smarty->setCacheDir(__DIR__ . '/cache/');

// Config Base de donnée

$db_host = "localhost";
$db_user = "root";
$db_password = "cytech0001";
$db_name = "SiteAxel";

// On test la connexion

$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

if(!$mysqli)
{
    die("Connexion à la base de donnée échouée : " . mysqli_connect_error());
}

// Page de base que l'on affiche 
$pageActuelle = "Accueil";

?>
