<?php
/* Smarty version 5.5.1, created on 2025-10-12 09:11:33
  from 'file:docTutorat.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68eb70c574dfa9_11269136',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'cdb2c76ab35b4804f7f064bab386d559f52aed11' => 
    array (
      0 => 'docTutorat.tpl',
      1 => 1760260291,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_68eb70c574dfa9_11269136 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, true);
?>



<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_76453428268eb70c5749fc3_04552255', "header");
?>

<!-- Bloc contenant le contexte et les objectifs (pourquoi ce projet) -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_120957345868eb70c574adc6_49975625', "objectifs");
?>

<!-- Bloc contenant en détail la description du projet -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_119048837868eb70c574b645_25762847', "description");
?>

<!-- Bloc contenant les outils utilisé pour le projet -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_161086481268eb70c574be31_44440090', "details");
?>

<!-- Bloc contenant des images finales prévus -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_17814328668eb70c574c5e7_78388464', "visualisation");
?>

<!-- Bloc contenant les perspectives futurs de l'application -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_36030252868eb70c574cfa4_19103331', "perspective");
?>


<!-- Bloc contenant ce que j'ai appris grâce au projet et l'interet du projet -->
<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_39662197868eb70c574d898_68585889', "conclusion");
?>

<?php $_smarty_tpl->getInheritance()->endChild($_smarty_tpl, "layouts/documentation.tpl", $_smarty_current_dir);
}
/* {block "header"} */
class Block_76453428268eb70c5749fc3_04552255 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="flex">
        <img src="/assets/logoTutorat.png" alt="Image du logo BDA">
        <h1 style="margin-left: 10px;">Tutorat</h1>
    </div>
<?php
}
}
/* {/block "header"} */
/* {block "objectifs"} */
class Block_120957345868eb70c574adc6_49975625 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <p>
            Le tutorat est à la base une activité proposé par CYTech pour s'entraider mutuellement. Il a pour principe de réunir 3 ou 4 élèves 
            de la même promotion avec 1 tuteur de classe supérieur pour pouvoir les aider. Le tuteur fais office de professeur et organise les différents 
            cours comme il l'entends.
        </p>
    </div>
<?php
}
}
/* {/block "objectifs"} */
/* {block "description"} */
class Block_119048837868eb70c574b645_25762847 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <h1>Parcours</h1>
        <p> 
            J’ai d’abord eu l’opportunité d’accompagner trois élèves en difficulté en mathématiques et en physique pendant une année. Mon objectif 
            principal a toujours été de comprendre leurs blocages afin de mieux les surmonter, en simplifiant les concepts complexes grâce à des exemples 
            concrets et à des approches variées. J’ai cherché à partager mon expérience au travers d’astuces et de conseils, qu’ils soient mnémotechniques, 
            psychologiques ou pédagogiques. Cela m’a permis de créer un environnement d’apprentissage bienveillant, où chaque élève pouvait progresser à 
            son rythme et reprendre confiance en ses capacités. 
        </p> 
        <p> 
            À la suite de cette première expérience, deux de mes élèves m’ont sollicité pour 
            poursuivre l’accompagnement l’année suivante. J’ai ainsi prolongé cette activité avec quatre élèves, dont deux que je suivais déjà l’année 
            précédente. 
        </p> 
        <p> 
            Cette expérience m’a naturellement conduit à affiner mes compétences en communication et en pédagogie. J’ai appris à écouter activement,
             à adapter mes explications en fonction des réactions de mes élèves, et à concevoir des séances à la fois structurées, efficaces et 
             motivantes. 
        </p>
    </div>
<?php
}
}
/* {/block "description"} */
/* {block "details"} */
class Block_161086481268eb70c574be31_44440090 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragrpahe">
        <h1>Méthodologie d’accompagnement</h1>
        <h3>Organisation</h3>
        <p> 
            Chaque fin de semaine, un sondage est envoyé à chacun des élèves, leur permettant de choisir les jours pour la séance de tutorat, avec 
            un horaire de base fixé à 17h45. Les séances sont ensuite planifiées en fonction des résultats de ces votes afin de convenir au mieux aux 
            disponibilités de chacun. 
        </p> 
        <div class="note">
        <div class="flex">
            <img src="/assets/info.png" alt="Image d'info" style="width: 40px;">
            <h3> Info </h3>
        </div>
            <p>
                Le nombre de séances pouvait varier selon mes disponibilités, de une à trois fois par semaine.
            </p>
        </div>
        <h3>Déroulement</h3> 
        <p> 
            Lors de chaque séance, deux formats sont possibles : soit les élèves ont des demandes 
            spécifiques, comme des explications de cours ou la correction d’exercices, soit la séance est consacrée à la réalisation d’exercices pour 
            renforcer les notions étudiées. 
        </p>
    </div>
<?php
}
}
/* {/block "details"} */
/* {block "visualisation"} */
class Block_17814328668eb70c574c5e7_78388464 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

<?php
}
}
/* {/block "visualisation"} */
/* {block "perspective"} */
class Block_36030252868eb70c574cfa4_19103331 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <h1>Ouverture et aspirations</h1>
        <p>
            Cette expérience de tutorat m’a permis de découvrir le plaisir de transmettre et d’accompagner les autres dans leur progression. 
            Au fil des séances, j’ai pris conscience de l’importance de la pédagogie et de la satisfaction que procure le fait de voir un élève 
            surmonter ses difficultés grâce à une explication claire ou une méthode adaptée. 
        </p>
        <p>
            Cette dimension humaine et formatrice m’a donné envie, pour les années à venir, d’aller plus loin dans cette voie et, pourquoi pas, 
            d’enseigner à mon tour. J’aimerais pouvoir continuer à partager mes connaissances dans un cadre plus large, en combinant rigueur 
            scientifique et approche bienveillante.
        </p>
    </div>
<?php
}
}
/* {/block "perspective"} */
/* {block "conclusion"} */
class Block_39662197868eb70c574d898_68585889 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <h1>Conclusion</h1>
        <p>
            Le tutorat a été une expérience particulièrement enrichissante, tant sur le plan humain que pédagogique. 
            Il m’a permis de développer des compétences essentielles : écoute active, adaptation, communication claire et gestion de groupe. 
            Au-delà de l’aide apportée aux élèves, cette expérience m’a appris à structurer mes connaissances et à les transmettre avec bienveillance. 
            Elle a renforcé ma conviction que l’apprentissage passe avant tout par la compréhension, la confiance et la collaboration.
        </p>
    </div>
<?php
}
}
/* {/block "conclusion"} */
}
