<?php
/* Smarty version 5.5.1, created on 2025-10-29 08:57:22
  from 'file:docEChat.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_6901d6f250c1c4_31775295',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'f25c6f88915e414781dafac46657b1bcbfa9325a' => 
    array (
      0 => 'docEChat.tpl',
      1 => 1761727433,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_6901d6f250c1c4_31775295 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, true);
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_7215037356901d6f24e8bf1_30293937', "header");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_1284371256901d6f2502058_80178321', "objectifs");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_10184729466901d6f2505db0_23654171', "description");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_7347056766901d6f2507be3_57224051', "details");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_20189398706901d6f2508d75_74584250', "visualisation");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_20322676836901d6f2509fc1_74581796', "perspective");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_12661266406901d6f250b075_23911269', "conclusion");
$_smarty_tpl->getInheritance()->endChild($_smarty_tpl, "layouts/documentation.tpl", $_smarty_current_dir);
}
/* {block "header"} */
class Block_7215037356901d6f24e8bf1_30293937 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="flex">
        <img src="/assets/logoEChat.png" alt="Image du logo E-Chat">
        <h1 style="margin-left: 10px;">E-Chat</h1>
    </div>
<?php
}
}
/* {/block "header"} */
/* {block "objectifs"} */
class Block_1284371256901d6f2502058_80178321 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <p>
            L'idée de ce projet m'est venue face à un constat simple: aucune <span class="bleuTexte">application de gestion</span> de
            tâches ne répondait réellement à mes besoins. Celles que j'ai testées étaient soit
            incomplètes pour mon usage personnel, soit fermées et non open source, ce qui limitait
            leur personnalisation. J'ai donc décidé de créer <span class="bleuTexte">ma propre solution</span>, adaptée à mes attentes
            et librement modifiable.
        </p>
    </div>
<?php
}
}
/* {/block "objectifs"} */
/* {block "description"} */
class Block_10184729466901d6f2505db0_23654171 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Description</h1>
    <div class="paragraphe">
        <p>
            L'application se décompose actuellement en plusieurs pages : l'accueil, le profil, le
            document, le planning et les objectifs
        </p>
        <h3>Accueil</h3>
        <p>
            L'<span class="bleuTexte">accueil</span> est une page qui se décompose en deux parties. D'abord la partie principale où
            l'on peut voir l'ensemble des tâches avec comme informations le nom, les différents tags,
            la date limite et l'état (à faire, en cours ou fait). Puis il y a la partie gauche qui contient
            l'ensemble des tags, avec la possibilité d'en créer ou d'en supprimer.
    </p>
    <h3>Profil</h3>
    <p>
        Le <span class="bleuTexte">profil</span> a pour but de retranscrire l'ensemble des informations personnelles de
        l'utilisateur, ses statistiques et ses paramètres. Elle permet aussi de changer ces
        informations en cliquant dessus.
    </p>
    <h3>Documents</h3>
    <p>
        La section <span class="bleuTexte">documents</span> permet de centraliser et d'organiser les fichiers stockés dans
        l'application. Elle se compose d'un menu latéral représentant l'arborescence des dossiers,
        et d'un espace principal contenant une barre de recherche ainsi qu'une liste des fichiers
        présents dans le dossier sélectionné.
    </p>
    <h3>Planning</h3>
    <p>
        La page <span class="bleuTexte">planning</span> offre une vue d'ensemble des tâches planifiées par l'utilisateur. Chaque
        tâche est affichée de manière interactive et peut être consultée en détail par simple clic.
    </p>
    <h3>Objectifs</h3>
    <p>
        Enfin, la page objectifs sert de rappel personnalisé, permettant à l'utilisateur de garder en
        tête ses <span class="bleuTexte">objectifs personnels</span> et de suivre leur progression.
    </p>

    <div class="note">
        <div class="flex">
            <img src="/assets/info.png" alt="Image d'info" style="width: 40px;">
            <h3> Info </h3>
        </div>
        <p> L'application étant encore en cours de développement, certaines fonctionalité ne sont pas encore présentes.
        </p>
    </div>
</div>
<?php
}
}
/* {/block "description"} */
/* {block "details"} */
class Block_7347056766901d6f2507be3_57224051 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

<h1>Outils utilisé</h1>

<div class="paragraphe">
    <p>
        Backend : PHP, MYSQL<br>
        Frontend : Smarty, HTML, CSS, Javascript<br>
        Maquette : Figma
    </p>
</div>
<?php
}
}
/* {/block "details"} */
/* {block "visualisation"} */
class Block_20189398706901d6f2508d75_74584250 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

<h1>Maquette</h1>
<div class="paragraphe">
    <p>Voici la maquette de l'application</p>
    <br>
    <img src="/assets/MaquetteEChat.png" alt="Image de la maquette de l'application E-Chat" class="maquette">
</div>
<?php
}
}
/* {/block "visualisation"} */
/* {block "perspective"} */
class Block_20322676836901d6f2509fc1_74581796 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

<h1>Perspectives d'évolution</h1>
<div class="paragraphe">
    <p>
        Un objectif futur serait d'<span class="bleuTexte">aider à l'apprentissage</span> en intégrant des tâches de type "rappel",
        programmées pour apparaître à des intervalles croissants (1 jour, 3 jours, 1 semaine, 3
        semaines, etc.). Ce système favoriserait la mémorisation par répétition espacée.
    </p>
    <p>
        Il serait également possible de <span class="bleuTexte">lier un document</span> à une ou plusieurs tâches, afin de
        centraliser les ressources associées et d'en faciliter le suivi.
    </p>
</div>
<?php
}
}
/* {/block "perspective"} */
/* {block "conclusion"} */
class Block_12661266406901d6f250b075_23911269 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

<h1>Conclusion</h1>
<div class="paragraphe">
    <p>
        Le développement d'<span class="bleuTexte">E-Chat</span> m'a permis d'approfondir mes compétences en <span class="bleuTexte">PHP,
        MySQL et Smarty</span>, tout en appliquant une approche structurée à la conception d'une
        application web.
        Ce projet illustre ma capacité à <span class="bleuTexte">modéliser</span> une base de données relationnelle, à <span class="bleuTexte">créer</span> une
        interface intuitive et à assurer l'interaction entre l'utilisateur et les données via des
        formulaires dynamiques.
    </p>
</div>
<?php
}
}
/* {/block "conclusion"} */
}
