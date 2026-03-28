<?php
/* Smarty version 5.5.1, created on 2025-10-02 07:53:26
  from 'file:_partials/header.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68de2f76312788_36022594',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd18bc8d4f822ca1efd82765c43b93212c8d67096' => 
    array (
      0 => '_partials/header.tpl',
      1 => 1759315822,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_68de2f76312788_36022594 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/_partials';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, false);
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars((string)$_smarty_tpl->getValue('title'), ENT_QUOTES, 'UTF-8', true);?>
</title>
    <link rel="stylesheet" href="/user/E-Chat/css/style.css">
    <?php echo '<script'; ?>
 src="/user/E-Chat/script.js"><?php echo '</script'; ?>
>
</head>

<body>
    <header>
        <nav>
            <ul>
                <?php
$_from = $_smarty_tpl->getSmarty()->getRuntime('Foreach')->init($_smarty_tpl, $_smarty_tpl->getValue('menu'), 'item');
$foreach0DoElse = true;
foreach ($_from ?? [] as $_smarty_tpl->getVariable('item')->value) {
$foreach0DoElse = false;
?>
                    <?php if ($_smarty_tpl->getValue('item')['Logo']) {?>
                        <li><img src="<?php echo $_smarty_tpl->getValue('item')['Lien'];?>
" alt="<?php echo $_smarty_tpl->getValue('item')['Logo'];?>
" class="imgLogo"></li>
                    <?php } elseif ($_smarty_tpl->getValue('item')['Titre']) {?>
                        <li><h2><?php echo $_smarty_tpl->getValue('item')['Titre'];?>
</h2></li>
                    <?php } elseif ($_smarty_tpl->getValue('item')['Nom']) {?>   
                        <li><a href="<?php echo $_smarty_tpl->getValue('item')['Lien'];?>
"><?php echo $_smarty_tpl->getValue('item')['Nom'];?>
</a></li>
                    <?php } else { ?>
                        <li class="error">Erreur : élément de menu invalide</li>
                    <?php }?>    
                <?php
}
$_smarty_tpl->getSmarty()->getRuntime('Foreach')->restore($_smarty_tpl, 1);?>
                <?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_50429956368de2f76310873_61439790', "boutonAjoutTache");
?>

            </ul>
        </nav>
    </header>
</body>

<div id="popupAjoutTache" class="popup">
    <div class="centrer">
    <h3> Nouveau Tag </h3>
        <form action="/user/E-Chat/php/ajoutTache.php" method="post">
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom" required><br><br>
            <label for="alias">Alias :</label>
            <input type="text" id="alias" name="alias"><br><br>
            <label for="date">Date :</label>
            <input type="date" id="date" name="date" required><br><br>
            <label for="duree">Durée :</label>
            <input type="duree" id="duree" name="duree" required><br><br>
            <button type="submit" class="bouton">Valider</button>
            <button class="bouton" onclick="ouvrir('popupAjoutTache')">Fermer</span>
        </form>    
    </div>
</div><?php }
/* {block "boutonAjoutTache"} */
class Block_50429956368de2f76310873_61439790 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates/_partials';
?>

                <?php
}
}
/* {/block "boutonAjoutTache"} */
}
