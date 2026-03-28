<?php
/* Smarty version 5.5.1, created on 2025-10-01 10:43:21
  from 'file:docMeowting.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68dd05c9f36be7_35253490',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a151e2896656e5671b35696cd3e318a2ba699537' => 
    array (
      0 => 'docMeowting.tpl',
      1 => 1759315399,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_68dd05c9f36be7_35253490 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, true);
?>



<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_61230543768dd05c9f325e9_87738564', "header");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_145435257268dd05c9f334a0_29508937', "objectifs");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_179990325868dd05c9f33ec1_21729841', "description");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_30243024868dd05c9f34886_30697984', "details");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_8727653068dd05c9f351d9_67949976', "visualisation");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_169860688568dd05c9f35af0_20711314', "perspective");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_143586657368dd05c9f363f8_92738051', "conclusion");
$_smarty_tpl->getInheritance()->endChild($_smarty_tpl, "layouts/documentation.tpl", $_smarty_current_dir);
}
/* {block "header"} */
class Block_61230543768dd05c9f325e9_87738564 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="flex">
        <img src="/assets/logoMeowting.png" alt="Image du logo Meowting">
        <h1 style="margin-left: 10px;">Meowting</h1>
    </div>
<?php
}
}
/* {/block "header"} */
/* {block "objectifs"} */
class Block_145435257268dd05c9f334a0_29508937 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <p>
            Ce projet est né car je suis devenu le secrétaire du BDA (Bureau des Arts) lors de l'année scolaire 2025/2026.
        C'est une association étudiante présente dans l'école CYTech. Cette application java a donc pour but de
        faciliter mon travail de secrétaire dans l'association. Elle permet de <span class="bleuTexte">prendre note</span> 
        et de créer facilement des <span class="bleuTexte">comptes rendus</span> de réunion.
        </p>
    </div>

<?php
}
}
/* {/block "objectifs"} */
/* {block "description"} */
class Block_179990325868dd05c9f33ec1_21729841 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Description</h1>
    <div class="paragraphe">
        <p>
            Cette application se résume sur une page contenant une entête et un ensemble de bloc. Cet ensemble
            permet d'afficher plusieurs blocs simultanément, offrant ainsi une prise de notes <span class="bleuTexte">claire</span>, <span class="bleuTexte">rapide</span>
            et <span class="bleuTexte">structurée</span> tout au long de la réunion. Elle y contient aussi du markdown pour personnalisé son compte rendu.
    </p>
    <h3>Entête</h3>
    <p>
        L'entête permet de définir le <span class="bleuTexte">titre</span> de la réunion et les <span class="bleuTexte">personnes présentes</span>. Elle y intégre aussi le bouton de
        <span class="bleuTexte">création du PDF</span>, le bouton d'<span class="bleuTexte">ajout de bloc</span> et le bouton de <span class="bleuTexte">suppression de bloc</span>.
    </p>
    <h3>Bloc</h3>
    <p>
        Dans l'application, chaque bloc représente un paragraphe du compte rendu. Il est composé de deux champ de texte,
            l'un pour le titre, l'autre pour le contenu.
        </p>
    </div>
    <div class="note">
        <div class="flex">
            <img src="/assets/info.png" alt="Image d'info" style="width: 40px;">
            <h3> Info </h3>
        </div>
        <p> Cette structure est pratique pour les réunions qui vont dans tous les sens.
        </p>
    </div>

<?php
}
}
/* {/block "description"} */
/* {block "details"} */
class Block_30243024868dd05c9f34886_30697984 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Outils utilisé</h1>

    <div class="paragraphe">
        <p>
            Environnement de développement : Eclipse IDE for Java Developers<br>
            Langage : Java 21.0.7<br>
            Bibliothsèques principales : JavaFX et ITextPDF
        </p>
    </div>
<?php
}
}
/* {/block "details"} */
/* {block "visualisation"} */
class Block_8727653068dd05c9f351d9_67949976 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

<h1>Maquette</h1>
<div class="paragraphe">
    <p>Voici la maquette de l'application</p>
    <br>
    <img src="/assets/MaquetteMeowting.png" alt="Image de la maquette de l'application Meowting" class="maquette">
</div>
<?php
}
}
/* {/block "visualisation"} */
/* {block "perspective"} */
class Block_169860688568dd05c9f35af0_20711314 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Perspectives d’évolution</h1>
    <div class="paragraphe">
        <p>
            La prochaine étape du développement serait d’offrir à l’utilisateur la possibilité de 
            <span class="bleuTexte">réorganiser librement les différents blocs</span>. Un enrichissement du 
            <span class="bleuTexte">support Markdown</span> déjà en place constituerait également un atout. 
            Enfin, il serait pertinent de proposer l’application aux autres associations de l’école.
</p>

    </div>

<?php
}
}
/* {/block "perspective"} */
/* {block "conclusion"} */
class Block_143586657368dd05c9f363f8_92738051 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Conclusion</h1>
    <div class="paragraphe">
        <p>
            Pensée pour les étudiants, les associations et les équipes agiles, Meowting transforme la prise de notes en un véritable 
            levier de collaboration. C’est plus qu’un outil : c’est un facilitateur d’échanges, un catalyseur d’idées, et un allié 
            dans chaque projet.
        </p>
    </div>
<?php
}
}
/* {/block "conclusion"} */
}
