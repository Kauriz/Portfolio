<?php
require_once "../../../config.php";

// Renvoyer du JSON au lieu de rediriger
header('Content-Type: application/json');

if (isset($_POST["id"])) {
    $idTache = $_POST["id"];
    
    // On récupère l'état actuel de la tache
    $stmt = $mysqli->prepare("SELECT etat FROM Tache WHERE id = ?");
    $stmt->bind_param("i", $idTache);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();
    
    if ($row = $result->fetch_assoc()) {
        $etat = $row['etat'];
        
        switch ($etat) {
            case "a faire":
                $nouvelEtat = "en cours";
                break;
            case "en cours":
                $nouvelEtat = "fait";
                break;
            case "fait":
                $nouvelEtat = "a faire";
                break;
            default:
                echo json_encode(['success' => false, 'message' => 'État non reconnu']);
                exit;
        }
        
        $stmt = $mysqli->prepare("UPDATE Tache SET etat = ? WHERE id = ?");
        $stmt->bind_param("si", $nouvelEtat, $idTache);
        $stmt->execute();
        $stmt->close();
        
        // PLUS DE REDIRECTION !
        echo json_encode(['success' => true, 'nouvel_etat' => $nouvelEtat]);
        exit;
    }
}

echo json_encode(['success' => false, 'message' => 'ID de tache manquant']);
?>