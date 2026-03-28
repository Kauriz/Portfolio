function ouvrir(objet){
    const elem = document.getElementById(objet);
    const current = window.getComputedStyle(elem).display;

    if (current == "none")
    {
        document.getElementById(objet).style.display = "block";
    }
    else
    {
        document.getElementById(objet).style.display = "none";
    }
}

function ouvrirTagPopup(idTache) {
    // remplir le champ hidden
    const inputs = document.getElementsByClassName("id_tache_popup");
    
    for (const input of inputs) {
        input.value = idTache;
    } 
    
    // ouvrir le popup
    ouvrir('listeTag');
    
}

function changerEtatTache(bouton) {
    // EMPÊCHER la soumission du formulaire
    event.preventDefault();
    
    let img = bouton.querySelector("img");
    let form = bouton.closest("form");
    let idTache = form.querySelector("input[name='id']").value;
    
    // Déterminer le nouvel état
    let nouvelEtat;
    if (img.src.includes("rondRouge.png")) {
        nouvelEtat = "en cours";
        img.src = "/user/E-Chat/images/rondOrange.png";
        img.alt = "Image tache en cours";
    } else if (img.src.includes("rondOrange.png")) {
        nouvelEtat = "fait";
        img.src = "/user/E-Chat/images/rondVert.png";
        img.alt = "Image tache fait";
    } else if (img.src.includes("rondVert.png")) {
        nouvelEtat = "a faire";
        img.src = "/user/E-Chat/images/rondRouge.png";
        img.alt = "Image tache à faire";
    } else {
        console.log("Erreur lors du changement d'état de la tache côté js");
        return;
    }
    
    // Envoyer la requête AJAX
    const formData = new FormData();
    formData.append('id', idTache);
    formData.append('nouvel_etat', nouvelEtat);
    
    fetch('/user/E-Chat/php/changerEtat.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (!data.success) {
            console.error('Erreur:', data.message);
            // Revenir à l'image précédente en cas d'erreur
            location.reload();
        }
    })
    .catch(error => {
        console.error('Erreur de connexion:', error);
        location.reload();
    });
}

