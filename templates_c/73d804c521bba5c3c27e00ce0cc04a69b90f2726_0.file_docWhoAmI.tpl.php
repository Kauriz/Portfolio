<?php
/* Smarty version 5.5.1, created on 2025-10-14 08:18:08
  from 'file:docWhoAmI.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68ee0740e8cd34_07443726',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '73d804c521bba5c3c27e00ce0cc04a69b90f2726' => 
    array (
      0 => 'docWhoAmI.tpl',
      1 => 1760429886,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_68ee0740e8cd34_07443726 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, true);
?>




<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_81095487768ee0740e875c5_92542928', "header");
?>

<!-- Bloc contenant le contexte et les objectifs (pourquoi ce projet) -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_146927171768ee0740e887c5_35892150', "objectifs");
?>

<!-- Bloc contenant en détail la description du projet -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_206145751768ee0740e89499_23851622', "description");
?>

<!-- Bloc contenant les outils utilisé pour le projet -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_148762058368ee0740e8a1d4_95462468', "details");
?>

<!-- Bloc contenant des images finales prévus -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_31585495568ee0740e8ad70_85813042', "visualisation");
?>

<!-- Bloc contenant les perspectives futurs de l'application -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_169188228768ee0740e8b8f3_73848284', "perspective");
?>

<!-- Bloc contenant ce que j'ai appris grâce au projet et l'interet du projet -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_14452333768ee0740e8c448_97445175', "conclusion");
$_smarty_tpl->getInheritance()->endChild($_smarty_tpl, "layouts/documentation.tpl", $_smarty_current_dir);
}
/* {block "header"} */
class Block_81095487768ee0740e875c5_92542928 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="flex">
        <img src="/assets/whoami.png" alt="Image de whoami">
        <h1 style="margin-left: 10px;">WhoAmI</h1>
    </div>
<?php
}
}
/* {/block "header"} */
/* {block "objectifs"} */
class Block_146927171768ee0740e887c5_35892150 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Ma formation</h1>
    <div class="paragraphe">
        <h3>Baccalauréat binational</h3>
        <p>
            J’ai eu l’opportunité d’intégrer le lycée Jeanne Hachette à Beauvais après avoir été retenu pour la section Bachibac, 
            une filière littéraire sélective qui offre la double délivrance du baccalauréat français et du bachillerato espagnol. 
            Ce parcours exigeant m’a permis de suivre des enseignements approfondis en histoire et en littérature espagnoles, 
            dispensés en langue originale. Ces années m’ont profondément enrichi sur le plan culturel. Elles ont élargi mon 
            horizon, affiné mon esprit critique et renforcé mon ouverture d’esprit, en me confrontant à des perspectives nouvelles 
            et à des références littéraires variées.
        </p>
        <p>
            Parallèlement, j’ai poursuivi un parcours à dominante scientifique en choisissant les spécialités Physique-Chimie et Mathématiques dès la première, 
            puis en terminale. Ces disciplines m’ont permis de renforcer ma logique et mes capacités de raisonnement, tout en consolidant mes bases 
            pour la suite de mes études en ingénierie.<br>En complément, j’ai également suivi la spécialité Musique en classe de première, une expérience 
            enrichissante qui a stimulé ma sensibilité artistique et ma créativité.
        </p>
        <h3>Classe préparatoire aux grandes écoles</h3>
        <p>
            Après l'obtention de mon double bac, j'ai eu l'opportunité d'intégrer une classe préparatoire aux grande écoles (CPGE)
            à Louis Thuillier (Amiens). Un établissement où j'ai pu étudier durant 2 ans en MP2I puis en MPI. C'est une filière scientifique axée vers 
            l'informatique. Ce fut pour moi un réel pas vers ce domaine où j'ai eu l'occasion de découvrir mes premiers langages de programmation comme le C
            et le Ocaml. J'ai aussi pu y apprendre énormement d'informatique théorique. 
        </p>
        <p>
            Au-delà des connaissances acquises durant ces deux années, j’ai surtout renforcé ma rigueur, mon aisance à l'oral, ma capacité de concentration 
            et développé un véritable goût pour le travail approfondi et structuré.
        </p>
        <h3>Cycle ingénieur</h3>
        <p>
            Les concours aux grandes écoles m'ont permis d'intégrer CYTech, une école d'informatique. C'est un lieu où j'ai eu l'occasion d'approfondir mes 
            connaissances globales en informatique. Ce lieu offre aussi une vie associative où je participe activement en tant que secrétaire du BDA et 
            responsable de la Gazette de l'école.
        </p>
    </div>
<?php
}
}
/* {/block "objectifs"} */
/* {block "description"} */
class Block_206145751768ee0740e89499_23851622 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Mon expérience professionnelle</h1>
    <div class="paragraphe">
        <h3>Stage à Meritxell</h3>
        <p>
            J'ai eu l'occasion d'effectué un stage en développement web d'une durée de 2 mois du 16 Juin 2025 au 16 Août 2025 pendant lequel on m'a confié 
            deux taches distinctes. La première consistait à la correction de bugs et au développement d'une application confidentielle. Ma deuxième tache 
            avait pour but de migrer un site d'e-commerce créer avec Prestashop. 
        </p>
        <h3>Stage à Saverglass</h3>
        <p>
            Lors de mon stage d’observation de 3ᵉ en 2019, j’ai eu l’opportunité de découvrir le fonctionnement de l’entreprise Saverglass, spécialisée dans 
            la fabrication de bouteilles en verre haut de gamme. Ce stage m’a permis de comprendre le fonctionnement d’un environnement industriel, 
            d’observer les différentes étapes de production et de découvrir la coordination entre les services techniques et administratifs. 
            Cette première expérience professionnelle m’a aidé à mieux cerner le monde de l’entreprise et à confirmer mon intérêt pour les domaines techniques et scientifiques.
        </p>
        <h3>Emploi dans une chaîne de restauration</h3> 
        <p>
            J’ai également travaillé au sein d’une chaîne de restauration rapide, une expérience formatrice qui m’a permis de développer mon sens de l’organisation, 
            ma rigueur et ma réactivité. Travailler en équipe dans un environnement dynamique m’a appris à gérer la pression, à maintenir une bonne communication 
            et à assurer la satisfaction client.
        </p>

    </div>
<?php
}
}
/* {/block "description"} */
/* {block "details"} */
class Block_148762058368ee0740e8a1d4_95462468 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

<?php
}
}
/* {/block "details"} */
/* {block "visualisation"} */
class Block_31585495568ee0740e8ad70_85813042 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

<?php
}
}
/* {/block "visualisation"} */
/* {block "perspective"} */
class Block_169188228768ee0740e8b8f3_73848284 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

<?php
}
}
/* {/block "perspective"} */
/* {block "conclusion"} */
class Block_14452333768ee0740e8c448_97445175 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

<?php
}
}
/* {/block "conclusion"} */
}
