<?php
/* On regarde quel fichier doit être télécharger */
$telechargement = $_POST["telechargement"];
switch($telechargement)
{
    case "Meowting":
        $fichier = 'assets/Meowting.jar';
        break;
    case "Félinterface":
        $fichier = 'assets/Félinterface.zip';
        break;
    default:
        exit;
}
// Chemin vers le fichier à télécharger

echo($fichier);

// Vérifie que le fichier existe
if (file_exists($fichier)) {
    // Envoie les bons headers
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . basename($fichier) . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($fichier));

    // Nettoie le buffer et envoie le fichier
    flush();
    readfile($fichier);
    exit;
} else {
    echo "Téléchargement impossible.";
}
?>
