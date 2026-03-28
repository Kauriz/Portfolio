<?php
/* Smarty version 5.5.1, created on 2025-08-25 15:10:20
  from 'file:layouts/classique.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68ac7cdc66ee83_31570047',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'aa468b7d8b88de8acc0100726ae933f67ba13c46' => 
    array (
      0 => 'layouts/classique.tpl',
      1 => 1756134614,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:_partials/header.tpl' => 1,
    'file:_partials/footer.tpl' => 1,
  ),
))) {
function content_68ac7cdc66ee83_31570047 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, false);
$_smarty_tpl->renderSubTemplate("file:_partials/header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), (int) 0, $_smarty_current_dir);
?>

<div class="container">
    <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_120018815168ac7cdc66d732_37764361', "sidebar");
?>

    <main>
        <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_65923872268ac7cdc66e034_99788168', "content");
?>

    </main>
</div>

<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_106161875868ac7cdc66e746_83601654', "popup");
?>


<?php $_smarty_tpl->renderSubTemplate("file:_partials/footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), (int) 0, $_smarty_current_dir);
}
/* {block "sidebar"} */
class Block_120018815168ac7cdc66d732_37764361 extends \Smarty\Runtime\Block
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
class Block_65923872268ac7cdc66e034_99788168 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

            <div id="viewport">
                <div id="content" >
                    <div style="width:150px; height:100px; background:red; position:absolute; top:300px; left:400px;">
                        Bloc 1
                    </div>
                    <div style="width:150px; height:100px; background:blue; position:absolute; top:600px; left:800px;">
                        Bloc 2
                    </div>
                </div>
            </div>

            <?php echo '<script'; ?>
 src="https://unpkg.com/@panzoom/panzoom@4.4.0/dist/panzoom.min.js"><?php echo '</script'; ?>
>
            <?php echo '<script'; ?>
>
                document.addEventListener('DOMContentLoaded', () => {
                    const elem = document.getElementById('content');
                    const panzoom = Panzoom(elem, {
                        contain: 'outside',
                        maxScale: 5,
                        minScale: 0.1
                    });

                    document.getElementById('viewport').addEventListener('wheel', panzoom.zoomWithWheel);
                });
            <?php echo '</script'; ?>
>

        <?php
}
}
/* {/block "content"} */
/* {block "popup"} */
class Block_106161875868ac7cdc66e746_83601654 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/layouts';
?>

<?php
}
}
/* {/block "popup"} */
}
