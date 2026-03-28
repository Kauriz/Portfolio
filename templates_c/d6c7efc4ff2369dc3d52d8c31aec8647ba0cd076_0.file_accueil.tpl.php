<?php
/* Smarty version 5.5.1, created on 2025-08-23 15:48:23
  from 'file:templates/accueil.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68a9e2c759cf97_31625583',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd6c7efc4ff2369dc3d52d8c31aec8647ba0cd076' => 
    array (
      0 => 'templates/accueil.tpl',
      1 => 1755963102,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:header.tpl' => 1,
    'file:footer.tpl' => 1,
  ),
))) {
function content_68a9e2c759cf97_31625583 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
$_smarty_tpl->renderSubTemplate("file:header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), (int) 0, $_smarty_current_dir);
?>

<h1>Page d'accueil</h1>

<?php $_smarty_tpl->renderSubTemplate("file:footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), (int) 0, $_smarty_current_dir);
}
}
