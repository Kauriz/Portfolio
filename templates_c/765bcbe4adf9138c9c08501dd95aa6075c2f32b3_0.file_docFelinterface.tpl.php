<?php
/* Smarty version 5.5.1, created on 2025-09-30 14:46:19
  from 'file:docFelinterface.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68dbed3b857813_84164240',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '765bcbe4adf9138c9c08501dd95aa6075c2f32b3' => 
    array (
      0 => 'docFelinterface.tpl',
      1 => 1759243577,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_68dbed3b857813_84164240 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, true);
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_87106961668dbed3b84e095_39396865', "header");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_155190029968dbed3b850360_91549249', "objectifs");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_52168569068dbed3b851892_25633200', "description");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_121613406968dbed3b852ce6_76478627', "details");
?>



<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_25101001168dbed3b853ff7_28932466', "visualisation");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_210086231168dbed3b855301_08944837', "perspective");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_196494965968dbed3b856484_54893252', "conclusion");
$_smarty_tpl->getInheritance()->endChild($_smarty_tpl, "layouts/documentation.tpl", $_smarty_current_dir);
}
/* {block "header"} */
class Block_87106961668dbed3b84e095_39396865 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="flex">
        <img src="/assets/logoFélinterface.png" alt="Image du logo E-Chat">
        <h1 style="margin-left: 10px;">Félinterface</h1>
    </div>
<?php
}
}
/* {/block "header"} */
/* {block "objectifs"} */
class Block_155190029968dbed3b850360_91549249 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <p>
            Ce projet avait pour objectif principal la découverte de la bibliothèque <span class="bleuTexte">SDL</span>, dans le but d’acquérir une première 
            expérience concrète en programmation graphique avec le <span class="bleuTexte">langage C</span>. Il a permis de concevoir une <span class="bleuTexte">interface interactive</span> 
            et d’obtenir un <span class="bleuTexte">rendu visuel opérationnel</span>, marquant une étape importante dans l’apprentissage du développement.
        </p>
    </div>
<?php
}
}
/* {/block "objectifs"} */
/* {block "description"} */
class Block_52168569068dbed3b851892_25633200 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Description</h1>
    <div class="paragraphe">
        <p>
            L’application repose sur <span class="bleuTexte">deux contrôles principaux</span> : un bouton permettant d’ajouter dynamiquement de nouveaux 
            éléments à l’interface, et un autre destiné à les supprimer. Chaque bouton ajouté est associé à un événement qui, 
            lorsqu’il est activé, affiche la valeur 1 dans le terminal, illustrant la gestion des interactions utilisateur.
            <br>
            Lors de la création d’un bouton, <span class="bleuTexte">plusieurs paramètres peuvent être définis</span> directement via le terminal, tels que la couleur, 
            la taille, le texte affiché ou encore le style de fond. La position du bouton, quant à elle, est déterminée par un clic sur 
            la fenêtre, offrant une <span class="bleuTexte">interaction graphique intuitive.</span>
        </p>
    </div>
    <div class="note">
        <div class="flex">
            <img src="/assets/info.png" alt="Image d'info" style="width: 40px;">
            <h3> Info </h3>
        </div>
        <p> La documentation est disponible en téléchargent le .zip du projet.
        </p>
    </div>
<?php
}
}
/* {/block "description"} */
/* {block "details"} */
class Block_121613406968dbed3b852ce6_76478627 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Outils utilisé</h1>
    <div class="paragraphe">
        <p>
            Backend : L’application repose sur un fichier texte utilisé comme <span class="bleuTexte">support de persistance</span>. Ce fichier est chargé au 
            démarrage de l’application et mis à jour lors de sa fermeture. Il contient <span class="bleuTexte">l’état de l’interface</span>, notamment la liste 
            des boutons présents, ce qui permet de conserver les modifications effectuées entre deux sessions d’utilisation.<br><br>
            Frontend : L’interface graphique est développée à l’aide de la bibliothèque SDL, permettant la création d’une <span class="bleuTexte">fenêtre 
            interactive</span> et la <span class="bleuTexte">gestion des événements</span> utilisateur en temps réel.
        </p>
    </div>
<?php
}
}
/* {/block "details"} */
/* {block "visualisation"} */
class Block_25101001168dbed3b853ff7_28932466 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Aperçu</h1>
    <div class="paragraphe">
        <p>Voici un aperçu de l'application</p>
        <img src="assets/maquetteFélinterface.png" alt="Image de la maquette de l'application Félinterface" class="maquette">
    </div>

<?php
}
}
/* {/block "visualisation"} */
/* {block "perspective"} */
class Block_210086231168dbed3b855301_08944837 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Perspectives d’évolution</h1>
    <div class="paragraphe">
        <p>
            <span class="bleuTexte">Intégrer une animation visuelle</span> sur les boutons lors du survol de la souris afin d’améliorer l’interactivité et l’expérience utilisateur.
        </p>
        <p>
            Enlever entièrement l'utilisation du terminal lors de la création de boutons
        </p>
    </div>
<?php
}
}
/* {/block "perspective"} */
/* {block "conclusion"} */
class Block_196494965968dbed3b856484_54893252 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <h1>Conclusion</h1>
    <div class="paragraphe">
        <p>
            Ce projet constitue une introduction efficace au développement d’<span class="bleuTexte">interfaces graphiques en langage C</span>, en s’appuyant sur des mécanismes simples 
            mais engageants. Il allie <span class="bleuTexte">rigueur technique et interactivité</span>, tout en favorisant une exploration ludique des concepts fondamentaux de la 
            programmation événementielle.
        </p>
    </div>
<?php
}
}
/* {/block "conclusion"} */
}
