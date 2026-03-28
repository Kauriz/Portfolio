const BASE = import.meta.env.BASE_URL
export const projects = {
  projet1: {
    title: 'E-Chat',
    shortDescription:
      "Application web de gestion de tâches permettant d'organiser, suivre et centraliser des projets.",
    position: [-5.5, 3, -34.9],
    image: BASE + "textures/logoEChat.png",
    versions: [
      {
        label: 'v1',
        title: 'E-Chat',
        shortDescription:
          "Application web de gestion de tâches permettant d'organiser, suivre et centraliser des projets.",
        objectives: `
      L'idée de ce projet m'est venue face à un constat simple: aucune application de gestion de
      tâches ne répondait réellement à mes besoins. Celles que j'ai testées étaient soit
      incomplètes pour mon usage personnel, soit fermées et non open source, ce qui limitait
      leur personnalisation. J'ai donc décidé de créer ma propre solution, adaptée à mes attentes
      et librement modifiable.
    `,
        description: `
      L'application se décompose actuellement en plusieurs pages : l'accueil, le profil, le
      document, le planning et les objectifs

      Accueil :
        L'accueil est une page qui se décompose en deux parties. D'abord la partie principale où
        l'on peut voir l'ensemble des tâches avec comme informations le nom, les différents tags,
        la date limite et l'état (à faire, en cours ou fait). Puis il y a la partie gauche qui contient
        l'ensemble des tags, avec la possibilité d'en créer ou d'en supprimer.

      Profil :
        Le profil a pour but de retranscrire l'ensemble des informations personnelles de
        l'utilisateur, ses statistiques et ses paramètres. Elle permet aussi de changer ces
        informations en cliquant dessus.

      Documents :
        La section documents permet de centraliser et d'organiser les fichiers stockés dans
        l'application. Elle se compose d'un menu latéral représentant l'arborescence des dossiers,
        et d'un espace principal contenant une barre de recherche ainsi qu'une liste des fichiers
        présents dans le dossier sélectionné.

      Planning :
        La page planning offre une vue d'ensemble des tâches planifiées par l'utilisateur. Chaque
        tâche est affichée de manière interactive et peut être consultée en détail par simple clic.

      Objectifs :
        Enfin, la page objectifs sert de rappel personnalisé, permettant à l'utilisateur de garder en
        tête ses objectifs personnels et de suivre leur progression.
    `,
        tools: `
      Backend : PHP, MySQL
      Frontend : Smarty, HTML, CSS, JavaScript
      Maquette : Figma
    `,
        perspectives: `
      Un objectif futur serait d'aider à l'apprentissage en intégrant des tâches de type "rappel",
      programmées pour apparaître à des intervalles croissants (1 jour, 3 jours, 1 semaine, 3
      semaines, etc.). Ce système favoriserait la mémorisation par répétition espacée.
        Il serait également possible de lier un document à une ou plusieurs tâches, afin de
        centraliser les ressources associées et d'en faciliter le suivi.
    `,
        conclusion: `
      Le développement d'E-Chat m'a permis d'approfondir mes compétences en PHP,
      MySQL et Smarty, tout en appliquant une approche structurée à la conception d'une
      application web.
      Ce projet illustre ma capacité à modéliser une base de données relationnelle, à créer une
      interface intuitive et à assurer l'interaction entre l'utilisateur et les données via des
      formulaires dynamiques.
    `,
        previsualisation: BASE + "textures/maquetteEChat.png",
        github: "https://github.com/Kauriz/EChat",
      }
    ]
  },

  projet2: {
    title: 'Meowting',
    shortDescription:
      "Application Java permettant de prendre des notes et de générer des comptes rendus de réunion structurés.",
    position: [5.5, 3, -34.9],
    image: BASE + "textures/logoMeowting.png",
    versions: [
      {
        label: 'v1',
        title: 'Meowting',
        shortDescription:
          "Application Java permettant de prendre des notes et de générer des comptes rendus de réunion structurés.",
        objectives: `
      Ce projet est né car je suis devenu le secrétaire du BDA (Bureau des Arts) lors de l'année
      scolaire 2025/2026. C'est une association étudiante présente dans l'école CYTech. Cette
      application Java a donc pour but de faciliter mon travail de secrétaire dans l'association.
      Elle permet de prendre note et de créer facilement des comptes rendus de réunion.
    `,
        description: `
      Cette application se résume sur une page contenant une entête et un ensemble de blocs.
      Cet ensemble permet d'afficher plusieurs blocs simultanément, offrant ainsi une prise de
      notes claire, rapide et structurée de la réunion. Elle y contient aussi du markdown pour
      personnaliser son compte rendu.

      Entête :
        L'entête permet de définir le titre de la réunion et les personnes présentes. Elle y intègre
        aussi le bouton de création du PDF, le bouton d'ajout de bloc et le bouton de suppression
        de bloc.

      Blocs :
        Dans l'application, chaque bloc représente un paragraphe du compte rendu. Il est composé
        de deux champs de texte, l'un pour le titre, l'autre pour le contenu.
    `,
        tools: `
      Environnement :
      - Eclipse IDE for Java Developers

      Langage :
      - Java 21.0.7

      Bibliothèques :
      - JavaFX (interface graphique)
      - iTextPDF (génération de PDF)
    `,
        perspectives: `
      La prochaine étape du développement serait d'offrir à l'utilisateur la possibilité de 
      réorganiser librement les différents blocs. Un enrichissement du 
      support Markdown déjà en place constituerait également un atout. 
      Enfin, il serait pertinent de proposer l'application aux autres associations de l'école.
    `,
        conclusion: `
      Pensée pour les étudiants, les associations, Meowting transforme la prise de notes en un
      véritable levier de collaboration. C'est plus qu'un outil : c'est un facilitateur d'échanges,
      un catalyseur d'idées, et un allié dans chaque projet.
    `,
        previsualisation: BASE + "textures/maquetteMeowting.png",
        github: "https://github.com/Kauriz/Meowting",
      }
    ]
  },

  projet3: {
    title: 'Félinterface',
    shortDescription:
      "Application en C utilisant SDL permettant de créer une interface graphique interactive et dynamique.",
    position: [9.9, 3, -30.5],
    image: BASE + "textures/logoFélinterface.png",
    versions: [
      {
        label: 'v1',
        title: 'Félinterface',
        shortDescription:
          "Application en C utilisant SDL permettant de créer une interface graphique interactive et dynamique.",
        objectives: `
      Ce projet avait pour objectif principal la découverte de la bibliothèque SDL, dans le but
      d'acquérir une première expérience concrète en programmation graphique avec le langage
      C. Il a permis de concevoir une interface interactive et d'obtenir un rendu visuel
      opérationnel, marquant une étape importante dans l'apprentissage du développement.
    `,
        description: `
      L'application repose sur deux contrôles principaux : un bouton permettant d'ajouter
      dynamiquement de nouveaux éléments à l'interface, et un autre destiné à les supprimer.
      Chaque bouton ajouté est associé à un événement qui, lorsqu'il est activé, affiche la
      valeur 1 dans le terminal, illustrant la gestion des interactions utilisateur.
      Lors de la création d'un bouton, plusieurs paramètres peuvent être définis directement via
      le terminal, tels que la couleur, la taille, le texte affiché ou encore le style de fond. La
      position du bouton, quant à elle, est déterminée par un clic sur la fenêtre, offrant
      une interaction graphique intuitive.
    `,
        tools: `
      Backend : L'application repose sur un fichier texte utilisé comme support de persistance. Ce fichier est chargé au 
      démarrage de l'application et mis à jour lors de sa fermeture. Il contient l'état de l'interface, notamment la liste 
      des boutons présents, ce qui permet de conserver les modifications effectuées entre deux sessions d'utilisation.
      Frontend : L'interface graphique est développée à l'aide de la bibliothèque SDL, permettant la création d'une fenêtre 
      interactive et la gestion des événements utilisateur en temps réel.
    `,
        perspectives: `
    - Ajouter des animations au survol des boutons
    - Améliorer l'interactivité visuelle
    - Supprimer l'utilisation du terminal pour la création des boutons
    `,
        conclusion: `
      Ce projet constitue une introduction efficace au développement d'interfaces graphiques
      en langage C, en s'appuyant sur des mécanismes simples mais engageants. Il allie rigueur
      technique et interactivité, tout en favorisant une exploration ludique des concepts
      fondamentaux de la programmation événementielle.
    `,
        previsualisation: BASE + "textures/maquetteFelinterface.png",
        github: "https://github.com/Kauriz/F-linterface",
      }
    ]
  },

  projet4: {
    title: 'Portfolio',
    shortDescription:
      "Site personnel interactif permettant de présenter mes projets sous forme de musée 3D.",
    position: [9.9, 3, -19.5],
    image: BASE + "textures/logoPortfolio.png",

    versions: [
      {
        label: 'v1',
        title: 'Portfolio',

        shortDescription:
          "Site personnel interactif permettant de présenter mes projets sous forme de musée 3D.",

        objectives: `
          Ce site a pour ambition de présenter mes projets de façon claire et interactive, tout en me
          permettant de développer continuellement mes compétences en web. Il constitue à la fois
          un espace personnel d'expérimentation et une vitrine professionnelle, conçue pour
          refléter mon univers technique et créatif. C'est un projet évolutif, que je souhaite enrichir
          et perfectionner tout au long de ma vie. 
      `,

        description: `
          Le site s'organise autour d'une page principale conçue pour être à la fois intuitive et
          dynamique. Il prend la forme d'un tableau de liège interactif, sur lequel sont épinglés
          différents post-its. Ces derniers restent néanmoins structurés autour de grands thèmes tels
          que Mes projets, Mes loisirs, Mes expériences et Profil. Chaque section peut être explorée
          plus en détail grâce à un zoom accessible par simple clic sur la zone correspondante.

          Chaque post-it représente un projet, une fonctionnalité ou une section du site. Ce choix
          d'organisation a été fait pour permettre une évolution progressive du contenu, au fil des
          réalisations, tout en garantissant une structure modulable et adaptable.
      `,

        tools: `
          Technologies utilisées :
          - PHP
          - HTML
          - CSS
          - JavaScript
          - Smarty

          Approche :
          - Utilisation de Smarty pour structurer les vues
          - Aucun CMS utilisé
          - Architecture modulaire inspirée d'un projet de migration PrestaShop
      `,

        perspectives: `
          À terme, l'objectif est d'enrichir le site par l'intégration de diverses animations et
          de fonctionnalités interactives, afin d'offrir une expérience plus vivante et immersive.
          J'envisage également d'améliorer la présentation des documentations pour les rendre plus
          claires, attractives et en parfaite cohérence avec l'identité visuelle du site. Enfin, l'ajout
          d'un jeu est aussi prévu, afin d'apporter une touche ludique et originale.
      `,

        conclusion: `
          Avec ce site, j'ai voulu créer bien plus qu'un simple portfolio : un espace vivant,
          modulable et à mon image, où chaque projet trouve sa place et peut évoluer librement. À
          travers cette interface intuitive et dynamique, je mets en valeur mes compétences
          techniques tout en cultivant une approche créative et personnelle du web. Ce tableau de
          liège numérique est pensé comme un terrain d'expérimentation, un support de narration,
          et une vitrine professionnelle en constante évolution.
          `,

        previsualisation: BASE + "textures/maquettePortfolio.png",

        github: "https://github.com/Kauriz/Portfolio",
        
      },
      {
        label: 'v2',
        title: 'Portfolio',
        shortDescription: "Site personnel interactif permettant de présenter mes projets sous forme de musée 3D.",
        objectives: `
          Ce site a pour ambition de présenter mes projets de façon claire et interactive, tout en me
          permettant de développer continuellement mes compétences en web. Il constitue à la fois
          un espace personnel d'expérimentation et une vitrine professionnelle.
        `,
        description: `
          Cette nouvelle version du site permet une plus grande liberté artistique. C'est un espace 3d complétement 
          modulable. Il contient un ensemble de pièces qui ont chacune des oeuvres représentant des projets. Il 
          offre aussi la possibilité d'intéragir avec les éléments pour pouvoir afficher des informations.
        `,
        tools: `
          Technologies utilisées :
          - React
          - Three.js / React Three Fiber
          - React Three Drei
        `,
        perspectives: `
          À terme, l'objectif est d'enrichir le musée avec de nouvelles salles, animations
          et interactions.
        `,
        conclusion: `
          Ce portfolio 3D est pensé comme un terrain d'expérimentation, un support de narration,
          et une vitrine professionnelle en constante évolution.
        `,

        github: "https://github.com/Kauriz/Portfolio",

      }
    ]
  },

  projet5: {
    title: 'Code Life',
    shortDescription: `
    CodeLife est un jeu de société numérique inspiré du jeu "Smile Life". Construisez 
    votre carrière, fondez une famille, achetez des biens et gérez les aléas de la vie 
    professionnelle tout en accumulant des smiles pour gagner la partie !`,
    position: [-9.9, 3, -25],
    image: BASE + "textures/logoCodeLife.png",
    versions: [
      {
        label: 'v1',
        title: 'Code Life',
        shortDescription: `
    CodeLife est un jeu de société numérique inspiré du jeu "Smile Life". Construisez 
    votre carrière, fondez une famille, achetez des biens et gérez les aléas de la vie 
    professionnelle tout en accumulant des smiles pour gagner la partie !`,
        objectives: `
    Ce projet est issue d'une initiative scolaire. Il avait pour objectif de déveloper notre capacité 
    à travailler en équipe et apprendre à developper une application web en utilisant l'architecture
    JEE (SpringBoot)
    `,
        description: `
      Système multijoueur de 2 à 6 joueurs avec 11 types de cartes (Enfant, Mariage, 
      Flirt, Salaire, Études, Métier, Malus, Spécial, Médaille, Acquisition, Animal). Les règles 
      s'appuient sur l'état civil, le métier et les études de chaque joueur. Certaines cartes confèrent 
      des immunités (maladie, accident, divorce) ou des pouvoirs permanents (flirts illimités, voyages 
      gratuits), tandis que les cartes Malus peuvent être ciblées sur les adversaires.

      Les joueurs peuvent sauvegarder et quitter une partie en cours, la reprendre plus tard ou 
      l'abandonner. Un historique des parties est disponible par utilisateur. La fin de partie est 
      détectée automatiquement à la pioche vide, avec calcul du gagnant et classement final.

      L'interface est construite avec Bootstrap 5, avec des notifications visuelles de succès et d'erreur.`,
        tools:`
      Backend

          Java 21 - Langage de programmation
          Spring Boot 3.5.8 - Framework principal
          Spring Data JPA - Gestion de la persistance avec Hibernate
          H2 Database - Base de données embarquée

      Frontend

          HTML5 - Structure des pages
          CSS3 - Styles personnalisés
          Bootstrap 5.3.3 - Framework CSS responsive
          JavaScript - Interactions dynamiques
          Thymeleaf - Moteur de templates côté serveur

      Outils

          Maven - Gestion des dépendances
          Git - Versioning du code
    `,
        perspectives: `
    Nous aimerions permettre aux joueurs de s'affronter en ligne depuis plusieurs appareils, et 
    implémenter l'intégralité des cartes du jeu de société original.
    `,
        conclusion: `
    CodeLife a été une expérience enrichissante, autant sur le plan technique qu'humain. En 
    reproduisant un jeu de société complet avec ses règles complexes, nous avons appris à 
    structurer une application web robuste en équipe, à l'aide de Spring Boot et Thymeleaf. 
    Ce projet nous a donné une solide base en architecture JEE et en gestion de projet collaboratif.
    `,
        previsualisation: BASE + "textures/maquetteCodeLife.png",
        github: "https://github.com/Les-chats-rotis/codeLife",
      }
    ]
  },

  projet6: {
    title: 'Stage Meritxell',
    shortDescription:
      "Stage en entreprise axé sur le développement web, la maintenance applicative et la migration d'un site e-commerce.",
    position: [-4.95, 3, -48.5],
    image: BASE + "textures/logoStage.png",
    objectives: `
    Lors de ma première année à CY Tech, j'ai effectué un stage d'informatique au sein
    de Meritxell, une entreprise spécialisée dans l'impression et la communication visuelle.
    L'objectif principal de ce stage est de découvrir le fonctionnement d'une structure
    technique tout en contribuant à des projets concrets liés au développement web et aux
    outils internes de gestion.
    `,
    description: `
    Présentation du stage

    Mon stage s'est déroulé sur plusieurs semaines au sein du service informatique de
    Meritxell. J'ai participé à deux projets principaux, chacun apportant une expérience
    différente dans le domaine du développement web et de la maintenance applicative.

    1. Développement d'une application interne confidentielle

    Une partie importante de mon stage a été consacrée à la participation au développement
    d'une application web interne confidentielle, utilisée pour la mise en vente de celle-ci.
    Cette application, conçue pour répondre à des besoins spécifiques, m'a permis de
    travailler sur des problématiques concrètes telles que la gestion de données, la conception
    d'interfaces et la communication entre modules applicatifs. Elle m'a également donné
    l'opportunité de découvrir différents outils utilisés en entreprise comme FileZilla, Mamp
    et Apache

    2. Migration d'un site e-commerce PrestaShop

    J'ai également participé à la migration d'un site e-commerce reposant sur la plateforme
    PrestaShop. Ce projet vise à moderniser l'infrastructure existante et à optimiser les
    performances du site en procédant à une mise à jour majeure de la version 1.7.1 vers 8.0.
    Cette transition a nécessité une attention particulière à la compatibilité des modules, au
    maintien des données de produits et à la stabilité de l'environnement de production.
    `,
    tools: `
    PrestaShop — pour la gestion du site e-commerce et sa migration technique.
    PHP / MySQL — pour les scripts de maintenance et la manipulation de données.
    HTML / CSS / JavaScript — pour les tests d'affichage et les ajustements front-end.
    `,
    perspectives: `
    Cette expérience m'a conforté dans mon envie de poursuivre dans le domaine du
    développement web et des systèmes d'information. J'aimerais approfondir mes
    compétences dans la conception d'applications professionnelles et explorer des
    environnements techniques plus complexes, notamment autour des frameworks modernes
    et du déploiement d'applications à plus grande échelle.
    `,
    conclusion: `
    Ce stage chez Meritxell m'a permis de découvrir le quotidien d'un développeur dans une
    PME et de participer activement à des projets concrets. J'y ai renforcé mes bases en
    développement web, en gestion de projet et en travail en équipe. Cette première
    immersion en milieu professionnel a été une expérience formatrice et motivante pour la
    suite de mon parcours d'ingénieur.
    `,
    previsualisation: BASE + "textures/maquetteStageMeritxell.jpg",
  },

  projet7: {
    title: 'Tutorat',
    shortDescription:
      "Expérience d'accompagnement d'élèves visant à renforcer leurs compétences en mathématiques et en physique.",
    position: [4.95, 3, -51.5],
    image: BASE + "textures/logoTutorat.png",
    objectives: `
    CYTech propose une entraide mutuelle au sein de l'école, telle que le tutorat. C'est avec
    engouement que je me suis investi dans ce rôle dès mon arrivée en classe supérieure.
    L'objectif de ce tutorat est d'aider 3 ou 4 élèves de la même promotion, en étayant les
    cours, en approfondissant des notions théoriques et en soutenant les élèves à persévérer.
    Autonome dans cette fonction, j'ai organisé les cours en m'adaptant aux interrogations
    des élèves, afin qu'ils gagnent en confiance et en compétence.
    `,
    description: `
    Parcours

    Pendant une année, j'ai eu l'opportunité d'accompagner trois élèves en difficulté en
    mathématiques et en physique. Mon objectif principal a toujours été de comprendre les
    freins et les obstacles qu'ils rencontraient dans leurs apprentissages. J'ai cherché à
    partager mon expérience au travers d'astuces et de conseils, qu'ils soient
    mnémotechniques, psychologiques ou pédagogiques, en simplifiant les concepts
    complexes grâce à des exemples concrets et à des approches variées. Je pense ainsi avoir
    créé un environnement d'apprentissage bienveillant, où chaque élève peut progresser à
    son rythme et reprendre confiance en ses capacités. 

    L'année suivante, deux de mes élèves m'ont sollicité pour poursuivre l'accompagnement.
    J'ai ainsi prolongé cette activité avec quatre élèves.

    Cette expérience m'a naturellement conduit à affiner mes compétences en communication
    et en pédagogie. J'ai appris à écouter activement, à adapter mes explications en fonction
    des réactions des élèves, et à concevoir des séances à la fois structurées, efficaces et
    motivantes.
    `,
    tools: `
    Méthodologie d'accompagnement

    Organisation :
    Afin de répondre aux disponibilités du plus grand nombre, j'envoie en fin de semaine un
    sondage à chaque élève, leur permettant de choisir le jour lui convenant le mieux. Quel
    que soit le jour, l'horaire est toujours fixé à 17H45.

    Le nombre de séances pouvait varier selon mes disponibilités, de une à trois fois par semaine.

    Déroulement :
    Lors de chaque séance, deux formats sont possibles : soit les élèves ont des demandes
    spécifiques, comme des explications de cours ou la correction d'exercices, soit la séance
    est consacrée à la réalisation d'exercices pour renforcer les notions étudiées.
    `,
    perspectives: `
    Ouverture et aspirations

    Cette expérience de tutorat m'a permis de découvrir le plaisir de transmettre et
    d'accompagner les autres dans leur progression. Au fil des séances, j'ai pris conscience de
    l'importance de la pédagogie dans la transmission de l'apport théorique. Grâce à des
    explications claires et une méthodologie adaptée, je pense avoir soutenu ces élèves à
    surmonter leurs difficultés. 

    Pour les années à venir, cette dimension humaine et formatrice m'a donné envie, d'aller
    plus loin dans cette voie et, pourquoi pas, d'enseigner à mon tour. J'aimerais pouvoir
    continuer à partager mes connaissances dans un cadre plus large, en combinant rigueur
    scientifique et approche bienveillante.
    `,
    conclusion: `
    Le tutorat a été une expérience particulièrement enrichissante, tant sur le plan humain que
    pédagogique. Il m'a permis de développer des compétences essentielles comme : l'écoute
    active, l'adaptation, la communication claire et la gestion d'un groupe. Au-delà de l'aide
    apportée aux élèves, cette expérience m'a appris à structurer mes connaissances et à les
    transmettre avec bienveillance. Elle a renforcé ma conviction que l'apprentissage passe
    avant tout par la compréhension, la confiance, la collaboration et la coopération.
    `
  },

  projet8: {
    title: 'Mail',
    mail: "axel.lebel2004@gmail.com",
    position: [-25, 7, -16],
  },

  projet9: {
    title: 'Linkedin',
    linkedin: "linkedin.com/in/axel-lebel",
    position: [-29, 7, -16],
  },

  projet10: {
    title: 'Echec',
    description: "Coming soon",
    position: [-21, 3, -25],
  },

  projet11: {
    title: 'Musique',
    description: "Coming soon",
    position: [-25, 3, -34],
  },

  projet12: {
    tuto: [
      { key: "Z", direction: "up" },
      { key: "Q", direction: "left" },
      { key: "S", direction: "down" },
      { key: "D", direction: "right" },
      { key: "Shift", direction: "sprint" },
      { key: "E", direction: "interact" },
    ],
    position: [0, 3, 0],
  }
}