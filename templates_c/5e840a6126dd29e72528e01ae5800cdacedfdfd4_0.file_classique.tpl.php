<?php
/* Smarty version 5.5.1, created on 2025-08-25 13:15:00
  from 'file:/home/cytech/Desktop/Moi/SiteAxel/templates/layouts/classique.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68ac61d49f9e14_03364665',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5e840a6126dd29e72528e01ae5800cdacedfdfd4' => 
    array (
      0 => '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts/classique.tpl',
      1 => 1756127697,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:_partials/header.tpl' => 1,
    'file:_partials/footer.tpl' => 1,
  ),
))) {
function content_68ac61d49f9e14_03364665 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, false);
$_smarty_tpl->renderSubTemplate("file:_partials/header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), (int) 0, $_smarty_current_dir);
?>

<div class="container">
    <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_72713510368ac61d49f58e3_18825085', "sidebar");
?>

    <main>
        <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_140049233268ac61d49f7347_25617147', "content");
?>

    </main>
</div>

<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_77879673468ac61d49f85c0_70426459', "popup");
?>


<?php $_smarty_tpl->renderSubTemplate("file:_partials/footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), (int) 0, $_smarty_current_dir);
}
/* {block "sidebar"} */
class Block_72713510368ac61d49f58e3_18825085 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

        <div class="sidebar">
            <h3>Projets</h3>
            <ul>
                <li class="tag">
                    <h4>E-Chat</h4>
                </li>
            </ul>
        </div>
    <?php
}
}
/* {/block "sidebar"} */
/* {block "content"} */
class Block_140049233268ac61d49f7347_25617147 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

            
        <?php
}
}
/* {/block "content"} */
/* {block "popup"} */
class Block_77879673468ac61d49f85c0_70426459 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

<?php
}
}
/* {/block "popup"} */
}
