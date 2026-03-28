<?php
/* Smarty version 5.5.1, created on 2025-08-28 10:06:38
  from 'file:layouts/documentation.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68b02a2e518587_42492736',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'c2b563472242b806f8d46526c2935644a577163d' => 
    array (
      0 => 'layouts/documentation.tpl',
      1 => 1756373387,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_68b02a2e518587_42492736 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, false);
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title><?php echo htmlspecialchars((string)$_smarty_tpl->getValue('title'), ENT_QUOTES, 'UTF-8', true);?>
</title>
    <link rel="stylesheet" href="/css/front/style.css">
</head>

<body>
    <div class="boxDoc">
        <!-- Bloc contenant le logo et le nom du projet -->
        <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_208665270968b02a2e5123d2_98853777', "header");
?>

        <!-- Bloc contenant le contexte et les objectifs (pourquoi ce projet) -->
        <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_198867668768b02a2e5137f0_26506606', "objectifs");
?>

        <!-- Bloc contenant en détail la description du projet -->
        <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_178211407668b02a2e5145d9_48224144', "description");
?>

        <!-- Bloc contenant les outils utilisé pour le projet -->
        <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_191069791068b02a2e5152b9_15613538', "details");
?>

        <!-- Bloc contenant des images finales prévus -->
        <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_207130429668b02a2e515f24_40060900', "visualisation");
?>

        <!-- Bloc contenant les perspectives futurs de l'application -->
        <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_42530530368b02a2e516c73_11313691', "perspective");
?>

        <!-- Bloc contenant ce que j'ai appris grâce au projet et l'interet du projet -->
        <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_35743486668b02a2e5179e9_76935008', "conclusion");
?>

    </div>
</body><?php }
/* {block "header"} */
class Block_208665270968b02a2e5123d2_98853777 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

        <?php
}
}
/* {/block "header"} */
/* {block "objectifs"} */
class Block_198867668768b02a2e5137f0_26506606 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

        <?php
}
}
/* {/block "objectifs"} */
/* {block "description"} */
class Block_178211407668b02a2e5145d9_48224144 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

        <?php
}
}
/* {/block "description"} */
/* {block "details"} */
class Block_191069791068b02a2e5152b9_15613538 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

        <?php
}
}
/* {/block "details"} */
/* {block "visualisation"} */
class Block_207130429668b02a2e515f24_40060900 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

        <?php
}
}
/* {/block "visualisation"} */
/* {block "perspective"} */
class Block_42530530368b02a2e516c73_11313691 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

        <?php
}
}
/* {/block "perspective"} */
/* {block "conclusion"} */
class Block_35743486668b02a2e5179e9_76935008 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

        <?php
}
}
/* {/block "conclusion"} */
}
