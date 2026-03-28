<?php
/* Smarty version 5.5.1, created on 2025-10-19 07:39:39
  from 'file:layouts/sidebarOnly.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68f495bb6bfcb5_53780121',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '3bac0db2e4565c5940e3435bbd9ea4964065a942' => 
    array (
      0 => 'layouts/sidebarOnly.tpl',
      1 => 1760430544,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_68f495bb6bfcb5_53780121 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, false);
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars((string)$_smarty_tpl->getValue('title'), ENT_QUOTES, 'UTF-8', true);?>
</title>
    <link rel="stylesheet" href="/css/front/style.css">
    <?php echo '<script'; ?>
 src="/script.js"><?php echo '</script'; ?>
>
</head>

<body>
    <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_34387958768f495bb6bcd72_26094588', "content");
?>

</body>

<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_86588385768f495bb6bf986_38097256', "popup");
}
/* {block "content"} */
class Block_34387958768f495bb6bcd72_26094588 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

    <?php
}
}
/* {/block "content"} */
/* {block "popup"} */
class Block_86588385768f495bb6bf986_38097256 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

<?php
}
}
/* {/block "popup"} */
}
