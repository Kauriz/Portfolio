<?php
/* Smarty version 5.5.1, created on 2025-10-13 06:43:44
  from 'file:docStageMeritxell.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68ec9fa0485863_08161100',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'cb5841166704a3c4ee40acebd70cfea2508d7f53' => 
    array (
      0 => 'docStageMeritxell.tpl',
      1 => 1760337822,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_68ec9fa0485863_08161100 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, true);
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_23276353268ec9fa047e870_20592556', "header");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_42573969768ec9fa04800d3_39432620', "objectifs");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_101461146568ec9fa0481111_13996455', "description");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_138898018168ec9fa04820a7_01614764', "details");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_94703024468ec9fa0482f64_69543210', "visualisation");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_209754789168ec9fa0483de6_78405326', "perspective");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_204908517768ec9fa0484c31_06410139', "conclusion");
?>

<?php $_smarty_tpl->getInheritance()->endChild($_smarty_tpl, "layouts/documentation.tpl", $_smarty_current_dir);
}
/* {block "header"} */
class Block_23276353268ec9fa047e870_20592556 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="flex">
        <img src="/assets/logoStage.png" alt="Image du logo de Stage Meritxell">
        <h1 style="margin-left: 10px;">Stage Meritxell</h1>
    </div>
<?php
}
}
/* {/block "header"} */
/* {block "objectifs"} */
class Block_42573969768ec9fa04800d3_39432620 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <p>
            Lors de ma première année à CY Tech, j’ai effectué un stage d’informatique au sein de <span class="bleuTexte">Meritxell</span>, une entreprise 
            spécialisée dans l’impression et la communication visuelle. L’objectif principal de ce stage était de découvrir le fonctionnement 
            d’une structure technique tout en contribuant à des projets concrets liés au développement web et aux outils internes de gestion.
        </p>
    </div>
<?php
}
}
/* {/block "objectifs"} */
/* {block "description"} */
class Block_101461146568ec9fa0481111_13996455 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <h1>Présentation du stage</h1>
        <p>
            Mon stage s’est déroulé sur plusieurs semaines au sein du service informatique de Meritxell. J’ai participé à deux projets 
            principaux, chacun apportant une expérience différente dans le domaine du développement web et de la maintenance applicative.
        </p>

        <h3>1. Développement d’une application interne confidentielle</h3>
        <p>
            Une partie importante de mon stage a été consacrée à la participation au développement d’une application web interne confidentielle, 
            utilisée pour après la mise en vente de celle-ci. 
            Cette application, conçue pour répondre à des besoins spécifiques, m’a permis de travailler sur des problématiques concrètes 
            telles que la gestion de données, la conception d’interfaces, et la communication entre modules applicatifs.
            Elle m'a également donné l'opportunité de découvrir différents outils utilisé en entreprise comme FileZilla, Mamp et Apache
        </p>

        <h3>2. Migration d’un site e-commerce PrestaShop</h3>
        <p>
            J’ai également participé à la <span class="bleuTexte">migration d’un site e-commerce</span> reposant sur la plateforme PrestaShop. 
            Ce projet visait à moderniser l’infrastructure existante et à optimiser les performances du site en procédant à une 
            mise à jour majeure de la version <span class="bleuTexte">1.7.1 vers 8.0</span>. 
            Cette transition a nécessité une attention particulière à la compatibilité des modules, au maintien des données produits 
            et à la stabilité de l’environnement de production.
        </p>

    </div>
<?php
}
}
/* {/block "description"} */
/* {block "details"} */
class Block_138898018168ec9fa04820a7_01614764 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <h1>Outils et technologies utilisés</h1>
        <ul>
            <li><span class="bleuTexte">PrestaShop</span> — pour la gestion du site e-commerce et sa migration technique.</li>
            <li><span class="bleuTexte">PHP / MySQL</span> — pour les scripts de maintenance et la manipulation de données.</li>
            <li><span class="bleuTexte">HTML / CSS / JavaScript</span> — pour les tests d’affichage et les ajustements front-end.</li>
        </ul>
    </div>
<?php
}
}
/* {/block "details"} */
/* {block "visualisation"} */
class Block_94703024468ec9fa0482f64_69543210 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <h1>Visualisation</h1>
        <h3>Site interne</h3>
        <p>
            Pour des raisons de confidentialité, aucune capture d’écran de l’application interne ne peut être partagée. 
            Néanmoins, cette expérience m’a permis de comprendre le cycle complet de développement d’une application : 
            de la conception à la mise en production, en passant par les phases de test et de validation.
        </p>
        <h3>Site d'E-Commerce</h3>
        <img src="/assets/maquetteStageMeritxell.jpg" alt="Image de la maquette du site d'E-Commerce" class="maquette">
    </div>
<?php
}
}
/* {/block "visualisation"} */
/* {block "perspective"} */
class Block_209754789168ec9fa0483de6_78405326 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <h1>Perspectives</h1>
        <p>
            Cette expérience m’a conforté dans mon envie de poursuivre dans le domaine du développement web et des systèmes d’information. 
            J’aimerais approfondir mes compétences dans la conception d’applications professionnelles et explorer des environnements techniques 
            plus complexes, notamment autour des frameworks modernes et du déploiement d’applications à plus grande échelle.
        </p>
    </div>
<?php
}
}
/* {/block "perspective"} */
/* {block "conclusion"} */
class Block_204908517768ec9fa0484c31_06410139 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="paragraphe">
        <h1>Conclusion</h1>
        <p>
            Ce stage chez Meritxell m’a permis de découvrir le quotidien d’un développeur dans une PME et de participer activement à des projets concrets. 
            J’y ai renforcé mes bases en développement web, en gestion de projet et en travail en équipe. 
            Cette première immersion en milieu professionnel a été une expérience formatrice et motivante pour la suite de mon parcours d’ingénieur.
        </p>
    </div>
<?php
}
}
/* {/block "conclusion"} */
}
