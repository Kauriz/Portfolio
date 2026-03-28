<?php
    session_start();
    require_once "config.php";

    if (isset($_SESSION["user_nom"]))
    {
        $smarty->assign("estConnecte", true);
    }
    else
    {
        $smarty->assign("estConnecte", false);
    }
    // On définit le chemin vers la racine du projet
    $path = "/";

    // Définition des panels en PHP
    $panels = [
        [
            'id' => 1,
            'nom' => 'projets',
            'titre' => 'mesProjets.png',
            'top' => '55%',
            'left' => '15%'
        ],
        [
            'id' => 2,
            'nom' => 'profils',
            'titre' => 'profils.png',
            'top' => '15%',
            'left' => '14%'
        ],
        [
            'id' => 3,
            'nom' => 'loisirs',
            'titre' => 'mesLoisirs.png',
            'top' => '55%',
            'left' => '55%'
        ],
        [
            'id' => 4,
            'nom' => 'experiences',
            'titre' => 'mesExperiences.png',
            'top' => '18%',
            'left' => '55%'
        ]
    ];


    // Définition des projets en PHP
    $projets = [
        [
            'id' => 0,
            'nom' => 'E-Chat',
            'logo' => 'logoEChat.png',
            'postit' => 'postitViolet.png',
            'description' => "C'est une application web conçue pour faciliter l’organisation et le suivi de projets.",
            'doc' => 'DocEChat',
            'lien' => '/user/E-Chat',
            'bouton2' => 'En dev.',
            'telechargement' => null,
            'secure' => 'true',
            'top' => '0',
            'left' => 'calc(min(40vw, 200px) + 10%)'
        ],
        [
            'id' => 1,
            'nom' => 'Meowting',
            'logo' => 'logoMeowting.png',
            'postit' => 'postitBleuCiel.png',
            'description' => "C'est une application java conçue pour faciliter la création de compte rendu de réunion.",
            'doc' => 'DocMeowting',
            'lien' => 'telechargement.php',
            'bouton2' => '.jar',
            'telechargement' => 'Meowting',
            'secure' => null,
            'top' => '35%',
            'left' => '90%'
        ],
        [
            'id' => 2,
            'nom' => 'Félinterface',
            'logo' => 'logoFélinterface.png',
            'postit' => 'postitVert.png',
            'description' => "C'est une application C conçue pour découvrir SDL.",
            'doc' => 'DocFélinterface',
            'lien' => 'telechargement.php',
            'bouton2' => '.zip',
            'telechargement' => 'Félinterface',
            'secure' => null,
            'top' => '45%',
            'left' => '4%'
        ],
        [
            'id' => 3,
            'nom' => 'Portfolio',
            'logo' => 'logo.png',
            'postit' => 'postitJaune.png',
            'description' => "C'est un site pour me présenter professionnelement.",
            'doc' => 'DocPortfolio',
            'lien' => null,
            'bouton2' => null,
            'telechargement' => null,
            'secure' => null,
            'top' => '50%',
            'left' => '55%'
        ]
    ];

    // Définition du profil en PHP
    $profils = [
        [
            'id' => 4,
            'nom' => 'WhoAmI',
            'logo' => 'whoami.png',
            'postit' => 'postitRouge.png',
            'description' => "Qui suis-je ?",
            'doc' => "DocWhoAmI",
            'lien' => null,
            'bouton2' => null,
            'telechargement' => null,
            'secure' => null,
            'top' => '40%',
            'left' => '10%'
        ],
        [
            'id' => 5,
            'nom' => 'Contact',
            'logo' => 'contact.png',
            'postit' => 'postitBleu.png',
            'description' => "Vous pouvez me joindre via ces différents médias. Email : axel.lebel2004@gmail.com, Téléphone : 06 10 60 55 66",
            'doc' => null,
            'lien' => null,
            'bouton2' => null,
            'telechargement' => null,
            'secure' => null,
            'top' => '10%',
            'left' => 'calc(min(40vw, 150px) + 30%)'
        ],
        [
            'id' => 6,
            'nom' => 'CV',
            'logo' => 'cv.png',
            'postit' => 'postitViolet.png',
            'description' => "Voici un CV générique.",
            'doc' => null,
            'lien' => "assets/CV.pdf",
            'bouton2' => "Voir",
            'telechargement' => "CV",
            'secure' => null,
            'top' => '50%',
            'left' => '60%'
        ]
    ];

    // Définition des loisirs en PHP
    $loisirs = [
        [
            'id' => 7,
            'nom' => 'BDA',
            'logo' => 'logoBDA.png',
            'postit' => 'postitJaune.png',
            'description' => "Présentation de mon investissement dans l'association BDA.",
            'doc' => 'DocBDA',
            'lien' => null,
            'bouton2' => 'Gazette',
            'telechargement' => null,
            'secure' => null,
            'top' => '50%',
            'left' => '20%'
        ],
        /* [
            'id' => 8,
            'nom' => 'Musique',
            'logo' => 'logoMusique.png',
            'postit' => 'postitBleuCiel.png',
            'description' => null,
            'doc' => null,
            'lien' => null,
            'bouton2' => null,
            'telechargement' => null,
            'secure' => null,
            'top' => '-250px',
            'left' => 'calc(200px + 8vw)'
        ], */
        [
            'id' => 9,
            'nom' => 'Rootme',
            'logo' => 'logoRootMe.png',
            'postit' => 'postitViolet.png',
            'description' => "Présentation de mon compte RootMe",
            'doc' => "DocRootMe",
            'lien' => 'https://www.root-me.org/Axel-913727?lang=fr#c3d0b1a91a7243ceb32c19ee45e12ef9',
            'siteExterne' => true,
            'bouton2' => 'Mon profil',
            'telechargement' => null,
            'secure' => null,
            'top' => '10%',
            'left' => 'calc(min(40vw, 150px) + 20%)'
        ]
    ];

    // Définition des expériences en PHP
    $experiences = [
        [
            'id' => 10,
            'nom' => 'Stage',
            'logo' => 'logoStage.png',
            'postit' => 'postitJaune.png',
            'description' => "Présentation de mon stage à Meritxell",
            'doc' => "DocStageMeritxell",
            'lien' => "/assets/soutenanceMeritxell.pdf",
            'bouton2' => 'Diaporama',
            'telechargement' => "Diaporama",
            'secure' => null,
            'top' => '50%',
            'left' => '10%'
        ],
        [
            'id' => 11,
            'nom' => 'Tutorat',
            'logo' => 'logoTutorat.png',
            'postit' => 'postitBleuCiel.png',
            'description' => "Activités lié à l'enseignement",
            'doc' => "DocTutorat",
            'lien' => null,
            'bouton2' => null,
            'telechargement' => null,
            'secure' => null,
            'top' => '30%',
            'left' => 'calc(175px + 20%)'
        ]
    ];

    // Définition du contenu des panels en PHP
    $contenus = [
    'projets' => $projets,
    'profils' => $profils,
    'loisirs' => $loisirs,
    'experiences' => $experiences
    ];

    // On regarde si on doit afficher une autre page

    if (isset($_POST["pageActuelle"]))
    {
        $pageActuelle = $_POST["pageActuelle"];
        header("Location: index.php?pageActuelle=" . urlencode($pageActuelle));
        exit;
    }

    $pageActuelle = $_GET['pageActuelle'] ?? $_SESSION['pageActuelle'] ?? 'Accueil';

    //Selecteur de la page à afficher

    switch($pageActuelle) {
        case "Accueil":
            $pageTemplate = "accueil.tpl";
            break;
        case "DocEChat":
            $pageTemplate = "docEChat.tpl";
            break;
        case "DocMeowting":
            $pageTemplate = "docMeowting.tpl";
            break;
        case "DocFélinterface":
            $pageTemplate = "docFelinterface.tpl";
            break;
        case "DocPortfolio":
            $pageTemplate = "docPortfolio.tpl";
            break;
        case "DocBDA":
            $pageTemplate = "docBDA.tpl";
            break;
        case "DocWhoAmI":
            $pageTemplate = "docWhoAmI.tpl";
            break;
        case "DocTutorat":
            $pageTemplate = "docTutorat.tpl";
            break;
        case "DocStageMeritxell":
            $pageTemplate = "docStageMeritxell.tpl";
            break;
        case "DocRootMe":
            $pageTemplate = "docRootMe.tpl";
            break;
        default:
            $pageTemplate = "accueil.tpl";
            break;
    }

    //On transmet les données à Smarty

    $smarty->assign("menu", $menu);
    $smarty->assign("pageTemplate", $pageTemplate); 
    $smarty->assign("title", "Portfolio");
    $smarty->assign('panels', $panels);
    $smarty->assign('contenus', $contenus);
    // On affiche avec le bon layout

    $smarty->display($pageTemplate);

?>