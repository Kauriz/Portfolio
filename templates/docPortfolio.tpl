{extends file="layouts/documentation.tpl"}


{block name="header"}
    <div class="flex">
        <img src="/assets/logo.png" alt="Image du logo Portfolio">
        <h1 style="margin-left: 10px;">Portfolio</h1>
    </div>

{/block}
<!-- Bloc contenant le contexte et les objectifs (pourquoi ce projet) -->
{block name="objectifs"}
    <div class="paragraphe">
        <p>
            Ce site a pour ambition de <span class="bleuTexte">présenter mes projets</span> de façon claire et interactive, tout en me
            permettant de développer continuellement mes compétences en web. Il constitue à la fois
            un espace personnel d'expérimentation et <span class="bleuTexte">une vitrine professionnelle</span>, conçue pour
            refléter <span class="bleuTexte">mon univers technique et créatif</span>. C'est un projet évolutif, que je souhaite enrichir
            et perfectionner tout au long de ma vie.
        </p>
    </div>
{/block}
<!-- Bloc contenant en détail la description du projet -->
{block name="description"}
    <h1>Description</h1>
    <div class="paragraphe">
        <p>
            Le site s'organise autour d'une page principale conçue pour être à la fois intuitive et
            dynamique. Il prend la forme d'un <span class="bleuTexte">tableau de liège interactif</span>, sur lequel sont épinglés
            différents post-its. Ces derniers restent néanmoins structurés autour de grands thèmes tels
            que <span class="italique">Mes projets, Mes loisirs, Mes expériences</span> et <span class="italique">Profil</span>. Chaque section peut être explorée
            plus en détail grâce à un zoom accessible par simple clic sur la zone correspondante.
        </p>
        <p>
            Chaque post-it représente un projet, une fonctionnalité ou une section du site. Ce choix
            d'organisation a été fait pour permettre une <span class="bleuTexte">évolution progressive</span> du contenu, au fil des
            réalisations, tout en garantissant une <span class="bleuTexte">structure modulable et adaptable.</span>
        </p>
    </div>
{/block}
<!-- Bloc contenant les outils utilisé pour le projet -->
{block name="details"}
    <h1>Outils utilisés</h1>
    <div class="paragraphe">
        <p>
            Sur le plan technique, j'ai choisi d'utiliser uniquement <span class="bleuTexte">Smarty</span>, en complément des
            langages fondamentaux du web — PHP, HTML, CSS et JavaScript — afin de structurer
            le site de façon modulaire et évolutive. J'ai découvert cet outil lors d'un stage consacré en
            partie à la migration d'un site développé sous PrestaShop, et j'ai souhaité l'intégrer à ce
            projet afin d'approfondir mon apprentissage.
        </p>
    </div>
    <div class="note">
        <div class="flex">
            <img src="/assets/info.png" alt="Image d'info" style="width: 40px;">
            <h3> Info </h3>
        </div>
        <p> Aucun CMS n'a été utilisé
        </p>
    </div>
{/block}

{block name="visualisation"}
    <h1>Aperçu</h1>
    <div class="paragraphe">
        <p>
            Voici un aperçu de mon portfolio
            <img src="assets/maquettePortfolio.png" alt="Image de la maquette de l'application Félinterface" class="maquette">
        </p>
    </div>
{/block}

<!-- Bloc contenant les perspectives futurs de l'application -->
{block name="perspective"}
    <h1>Perspectives d'évolution</h1>
    <div class="paragraphe">
        <p>
            À terme, l'objectif est d'enrichir le site par l'intégration de <span class="bleuTexte">diverses animations</span> et
            de <span class="bleuTexte">fonctionnalités interactives</span>, afin d'offrir une expérience plus vivante et immersive.
            J'envisage également d'<span class="bleuTexte">améliorer la présentation des documentations</span> pour les rendre plus
            claires, attractives et en parfaite cohérence avec l'identité visuelle du site. Enfin, l'<span class="bleuTexte">ajout
            d'un jeu</span> est aussi prévu, afin d'apporter une touche ludique et originale.
        </p>
    </div>
{/block}
<!-- Bloc contenant ce que j'ai appris grâce au projet et l'interet du projet -->
{block name="conclusion"}
    <h1>Conclusion</h1>
    <div class="paragraphe">
        <p>
            Avec ce site, j'ai voulu créer bien plus qu'un simple portfolio : <span class="bleuTexte">un espace vivant</span>,
            modulable et <span class="bleuTexte">à mon image</span>, où chaque projet trouve sa place et peut évoluer librement. À
            travers cette interface intuitive et dynamique, je mets en valeur mes compétences
            techniques tout en cultivant une approche créative et personnelle du web. Ce tableau de
            liège numérique est pensé comme un <span class="bleuTexte">terrain d'expérimentation</span>, un support de narration,
            et une vitrine professionnelle en constante évolution.
        </p>
    </div>
{/block}