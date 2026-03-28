<?php
/* Smarty version 5.5.1, created on 2025-10-03 08:12:53
  from 'file:docPortfolio.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68df8585d75b30_49169081',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '9f5ac427c3ed029f0ecb353d1f1bca0effeab7a1' => 
    array (
      0 => 'docPortfolio.tpl',
      1 => 1759479167,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_68df8585d75b30_49169081 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, true);
?>



<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_134806267468df8585d6e2f6_83326752', "header");
?>

<!-- Bloc contenant le contexte et les objectifs (pourquoi ce projet) -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_87861711868df8585d6fc79_94032505', "objectifs");
?>

<!-- Bloc contenant en détail la description du projet -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_34159400068df8585d71970_58520342', "description");
?>

<!-- Bloc contenant les outils utilisé pour le projet -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_207998257968df8585d728c9_13061306', "details");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_159033293168df8585d732b4_34573677', "visualisation");
?>


<!-- Bloc contenant les perspectives futurs de l'application -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_98811067968df8585d73b56_39366686', "perspective");
?>

<!-- Bloc contenant ce que j'ai appris grâce au projet et l'interet du projet -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_201566529768df8585d75059_68221286', "conclusion");
$_smarty_tpl->getInheritance()->endChild($_smarty_tpl, "layouts/documentation.tpl", $_smarty_current_dir);
}
/* {block "header"} */
class Block_134806267468df8585d6e2f6_83326752 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="flex">
        <img src="/assets/logo.png" alt="Image du logo Portfolio">
        <h1 style="margin-left: 10px;">Portfolio</h1>
    </div>

<?php
}
}
/* {/block "header"} */
/* {block "objectifs"} */
class Block_87861711868df8585d6fc79_94032505 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <p>
            Ce site a pour ambition de <span class="bleuTexte">présenter mes projets</span> de façon claire et interactive, tout en me permettant de développer continuellement 
            mes compétences en web. Il constitue à la fois un espace personnel d’expérimentation et <span class="bleuTexte">une vitrine professionnelle</span>, conçue pour refléter 
            <span class="bleuTexte">mon univers technique et créatif</span>. C’est un projet évolutif, que je souhaite enrichir et perfectionner tout au long de ma vie.
        </p>
    </div>
<?php
}
}
/* {/block "objectifs"} */
/* {block "description"} */
class Block_34159400068df8585d71970_58520342 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Description</h1>
    <div class="paragraphe">
        <p>
        Le site s’organise autour d’une page principale conçue pour être à la fois intuitive et dynamique. Il prend la forme d’un <span class="bleuTexte">tableau de 
        liège interactif</span>, sur lequel sont épinglés différents post-its. Ces derniers restent néanmoins structurés autour de grands thèmes tels 
        que <span class="italique"> Mes projets</span>, <span class="italique">Mes loisirs</span>, <span class="italique">Mes expériences</span> et 
        <span class="italique">Profil</span>. Chaque section peut être explorée plus en détail grâce à un zoom accessible par simple clic sur la zone correspondante.
        </p>
        <p>
        Chaque post-it représente un projet une fonctionalité ou une section du site. Ce choix d’organisation a été fait pour 
        permettre une <span class="bleuTexte">évolution progressive</span> du contenu, au fil des réalisations, tout en 
        garantissant une <span class="bleuTexte">structure modulable et adaptable</span>.
        </p>
    </div>
<?php
}
}
/* {/block "description"} */
/* {block "details"} */
class Block_207998257968df8585d728c9_13061306 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Outils utilisés</h1>
    <div class="paragraphe">
        <p>
            Sur le plan technique, j’ai choisi d’utiliser uniquement <span class="bleuTexte">Smarty</span>, en complément des langages fondamentaux du web — PHP, 
            HTML, CSS et JavaScript — afin de structurer le site de façon modulaire et évolutive. J’ai découvert cet outil lors d’un stage consacré en partie à la 
            migration d’un site développé sous PrestaShop, et j’ai souhaité l’intégrer à ce projet afin d’approfondir mon apprentissage.
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
<?php
}
}
/* {/block "details"} */
/* {block "visualisation"} */
class Block_159033293168df8585d732b4_34573677 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Aperçu</h1>
    <div class="paragraphe">
        <p>
            Voici un aperçu de mon portfolio
            <img src="assets/maquettePortfolio.png" alt="Image de la maquette de l'application Félinterface" class="maquette">
        </p>
    </div>
<?php
}
}
/* {/block "visualisation"} */
/* {block "perspective"} */
class Block_98811067968df8585d73b56_39366686 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Perspectives d’évolution</h1>
    <div class="paragraphe">
        <p>
            À terme, l’objectif est d’enrichir le site par l’intégration de <span class="bleuTexte">diverses animations</span> et de 
            <span class="bleuTexte">fonctionnalités interactives</span>, afin d’offrir une expérience plus vivante et immersive. J’envisage également 
            d’<span class="bleuTexte">améliorer la présentation des documentations</span> pour les rendre plus claires, attractives et en parfaite cohérence avec l’identité visuelle 
            du site. Enfin, l’<span class="bleuTexte">ajout d’un jeu</span> est aussi prévu, afin d’apporter une touche ludique et originale.
        </p>
    </div>
<?php
}
}
/* {/block "perspective"} */
/* {block "conclusion"} */
class Block_201566529768df8585d75059_68221286 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Conclusion</h1>
    <div class="paragraphe">
        <p>
            Avec ce site, j’ai voulu créer bien plus qu’un simple portfolio : <span class="bleuTexte">un espace vivant</span>, modulable et <span class="bleuTexte">à mon image</span>, où chaque 
            projet trouve sa place et peut évoluer librement. À travers cette interface intuitive et dynamique, je mets en valeur 
            mes compétences techniques tout en cultivant une approche créative et personnelle du web. Ce tableau de liège numérique 
            est pensé comme un <span class="bleuTexte">terrain d’expérimentation</span>, un support de narration, et une vitrine professionnelle en constante évolution.
        </p>
    </div>
<?php
}
}
/* {/block "conclusion"} */
}
