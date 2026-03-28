{extends file="layouts/documentation.tpl"}

{block name="header"}
    <div class="flex">
        <img src="/assets/logoStage.png" alt="Image du logo de Stage Meritxell">
        <h1 style="margin-left: 10px;">Stage Meritxell</h1>
    </div>
{/block}

{block name="objectifs"}
    <div class="paragraphe">
        <p>
            Lors de ma première année à CY Tech, j'ai effectué un stage d'informatique au sein
            de Meritxell, une entreprise spécialisée dans l'impression et la communication visuelle.
            L'objectif principal de ce stage est de découvrir le fonctionnement d'une structure
            technique tout en contribuant à des projets concrets liés au développement web et aux
            outils internes de gestion.
        </p>
    </div>
{/block}

{block name="description"}
    <div class="paragraphe">
        <h1>Présentation du stage</h1>
        <p>
            Mon stage s'est déroulé sur plusieurs semaines au sein du service informatique de
            Meritxell. J'ai participé à deux projets principaux, chacun apportant une expérience
            différente dans le domaine du développement web et de la maintenance applicative.
        </p>

        <h3>1. Développement d'une application interne confidentielle</h3>
        <p>
            Une partie importante de mon stage a été consacrée à la participation au développement
            d'une application web interne confidentielle, utilisée pour la mise en vente de celle-ci.
            Cette application, conçue pour répondre à des besoins spécifiques, m'a permis de
            travailler sur des problématiques concrètes telles que la gestion de données, la conception
            d'interfaces et la communication entre modules applicatifs. Elle m'a également donné
            l'opportunité de découvrir différents outils utilisés en entreprise comme FileZilla, Mamp
            et Apache
        </p>

        <h3>2. Migration d'un site e-commerce PrestaShop</h3>
        <p>
            J'ai également participé à la migration d'un site e-commerce reposant sur la plateforme
            PrestaShop. Ce projet vise à moderniser l'infrastructure existante et à optimiser les
            performances du site en procédant à une mise à jour majeure de la version 1.7.1 vers 8.0.
            Cette transition a nécessité une attention particulière à la compatibilité des modules, au
            maintien des données de produits et à la stabilité de l'environnement de production.
        </p>

    </div>
{/block}

{block name="details"}
    <div class="paragraphe">
        <h1>Outils et technologies utilisés</h1>
        <ul>
            <li><span class="bleuTexte">PrestaShop</span> — pour la gestion du site e-commerce et sa migration technique.</li>
            <li><span class="bleuTexte">PHP / MySQL</span> — pour les scripts de maintenance et la manipulation de données.</li>
            <li><span class="bleuTexte">HTML / CSS / JavaScript</span> — pour les tests d'affichage et les ajustements front-end.</li>
        </ul>
    </div>
{/block}

{block name="visualisation"}
    <div class="paragraphe">
        <h1>Visualisation</h1>
        <h3>Site interne</h3>
        <p>
            Pour des raisons de confidentialité, aucune capture d'écran de l'application interne ne
            peut être partagée. Néanmoins, cette expérience m'a permis de comprendre le cycle
            complet de développement d'une application : de la conception à la mise en production,
            en passant par les phases de test et de validation.
        </p>
        <h3>Site d'E-Commerce</h3>
        <img src="/assets/maquetteStageMeritxell.jpg" alt="Image de la maquette du site d'E-Commerce" class="maquette">
    </div>
{/block}

{block name="perspective"}
    <div class="paragraphe">
        <h1>Perspectives</h1>
        <p>
            Cette expérience m'a conforté dans mon envie de poursuivre dans le domaine du
            développement web et des systèmes d'information. J'aimerais approfondir mes
            compétences dans la conception d'applications professionnelles et explorer des
            environnements techniques plus complexes, notamment autour des frameworks modernes
            et du déploiement d'applications à plus grande échelle.
        </p>
    </div>
{/block}

{block name="conclusion"}
    <div class="paragraphe">
        <h1>Conclusion</h1>
        <p>
            Ce stage chez Meritxell m'a permis de découvrir le quotidien d'un développeur dans une
            PME et de participer activement à des projets concrets. J'y ai renforcé mes bases en
            développement web, en gestion de projet et en travail en équipe. Cette première
            immersion en milieu professionnel a été une expérience formatrice et motivante pour la
            suite de mon parcours d'ingénieur.
        </p>
    </div>
{/block}
