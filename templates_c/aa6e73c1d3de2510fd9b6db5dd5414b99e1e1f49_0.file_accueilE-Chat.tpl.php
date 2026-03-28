<?php
/* Smarty version 5.5.1, created on 2025-10-03 07:44:42
  from 'file:accueilE-Chat.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_68df7eeacce8c8_01828304',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'aa6e73c1d3de2510fd9b6db5dd5414b99e1e1f49' => 
    array (
      0 => 'accueilE-Chat.tpl',
      1 => 1759477480,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_68df7eeacce8c8_01828304 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, true);
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_98232015568df7eeacb4131_07452475', "sidebar");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_51427361968df7eeacbb558_91111881', "content");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_96474511768df7eeacccce0_62099027', "popup");
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_181769541568df7eeaccdcc0_43431653', "boutonAjoutTache");
$_smarty_tpl->getInheritance()->endChild($_smarty_tpl, "layouts/classique.tpl", $_smarty_current_dir);
}
/* {block "sidebar"} */
class Block_98232015568df7eeacb4131_07452475 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div class="sidebar">
        <h3>Tags</h3>
        <ul>
            <?php
$_from = $_smarty_tpl->getSmarty()->getRuntime('Foreach')->init($_smarty_tpl, $_smarty_tpl->getValue('tags'), 'item');
$foreach0DoElse = true;
foreach ($_from ?? [] as $_smarty_tpl->getVariable('item')->value) {
$foreach0DoElse = false;
?>
                <li class="tag">
                    <!-- Si une image est défini, on l'affiche -->
                    <?php if ($_smarty_tpl->getValue('item')['pathImg']) {?>
                        <img src="<?php echo $_smarty_tpl->getValue('item')['pathImg'];?>
" alt="<?php echo $_smarty_tpl->getValue('item')['nom'];?>
" class="imgTag">
                        <!-- Sinon on affiche une image par défaut -->
                    <?php } else { ?>
                        <img src="/user/E-Chat/images/tagImageDefaut.png" alt="Image de tag par défaut" class="imgTag">
                    <?php }?>
                    <!-- On affiche le nom -->
                    <h4><?php echo $_smarty_tpl->getValue('item')['nom'];?>
</h4>
                    <form action="php/supprTag.php" method="post">
                        <input type="hidden" name="nom" value="<?php echo $_smarty_tpl->getValue('item')['nom'];?>
">
                        <button type="submit" class="desactiver">
                            <img src="/user/E-Chat/images/moins.png" alt="Image moins" class="imgSuppr">
                        </button>
                    </form>
                </li>
            <?php
}
$_smarty_tpl->getSmarty()->getRuntime('Foreach')->restore($_smarty_tpl, 1);?>
            <li>
                <button class="ajout" onclick="ouvrir('popup')">
                    <img src="/user/E-Chat/images/ajout.png" alt="Image d'ajout de tag" width="20vw">
                    <h4>Ajouter un tag</h4>
                </button>
            </li>
        </ul>
    </div>
<?php
}
}
/* {/block "sidebar"} */
/* {block "content"} */
class Block_51427361968df7eeacbb558_91111881 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <ul>
        <?php
$_from = $_smarty_tpl->getSmarty()->getRuntime('Foreach')->init($_smarty_tpl, $_smarty_tpl->getValue('taches'), 'item');
$foreach1DoElse = true;
foreach ($_from ?? [] as $_smarty_tpl->getVariable('item')->value) {
$foreach1DoElse = false;
?>
            <li class="tache">
                <label><?php echo $_smarty_tpl->getValue('item')['nom'];?>
</label>
                <?php
$_from = $_smarty_tpl->getSmarty()->getRuntime('Foreach')->init($_smarty_tpl, $_smarty_tpl->getValue('tagTaches'), 'tagTache');
$foreach2DoElse = true;
foreach ($_from ?? [] as $_smarty_tpl->getVariable('tagTache')->value) {
$foreach2DoElse = false;
?>
                    <!-- On affiche seulement le tag s'il est relié à la tache qui est en train d'être affiché -->
                    <?php if (($_smarty_tpl->getValue('tagTache')['id_tache'] == $_smarty_tpl->getValue('item')['id'])) {?>
                        <!-- A partir de l'id on doit retrouver le nom du Tag -->
                        <?php
$_from = $_smarty_tpl->getSmarty()->getRuntime('Foreach')->init($_smarty_tpl, $_smarty_tpl->getValue('tags'), 'tag');
$foreach3DoElse = true;
foreach ($_from ?? [] as $_smarty_tpl->getVariable('tag')->value) {
$foreach3DoElse = false;
?>
                            <?php if ($_smarty_tpl->getValue('tag')['id'] == $_smarty_tpl->getValue('tagTache')['id_tag']) {?>
                                <!-- On l'affiche -->
                                <div class="tagTache"><?php echo $_smarty_tpl->getValue('tag')['nom'];?>
</div>
                            <?php }?>
                        <?php
}
$_smarty_tpl->getSmarty()->getRuntime('Foreach')->restore($_smarty_tpl, 1);?>
                    <?php }?>
                <?php
}
$_smarty_tpl->getSmarty()->getRuntime('Foreach')->restore($_smarty_tpl, 1);?>
                <form action="/user/E-Chat/php/changerEtat.php" method="post" class="imgEtat">
                    <input type="hidden" name="id" value="<?php echo $_smarty_tpl->getValue('item')['id'];?>
">
                    <button type="button" onclick="changerEtatTache(this)" class="sansFond">
                        <?php if ($_smarty_tpl->getValue('item')['etat'] == "a faire") {?>
                            <img src="/user/E-Chat/images/rondRouge.png" alt="Image tache à faire" class="imgEtat">
                        <?php } elseif ($_smarty_tpl->getValue('item')['etat'] == "en cours") {?>
                            <img src="/user/E-Chat/images/rondOrange.png" alt="Image tache en cours" class="imgEtat">
                        <?php } else { ?>
                            <img src="/user/E-Chat/images/rondVert.png" alt="Image tache fait" class="imgEtat">
                        <?php }?>
                    </button>
                </form>
                <button onclick="ouvrir('plusTache<?php echo $_smarty_tpl->getValue('item')['id'];?>
')">
                    <img src="/user/E-Chat/images/moreHorizontal.png" alt="Image d'option supplémentaire" class="">
                </button>
                <ul id="plusTache<?php echo $_smarty_tpl->getValue('item')['id'];?>
" style="display: none;">
                    <li>
                        <form action="/user/E-Chat/php/supprTache.php" method="post">
                            <input type="hidden" name="id" value="<?php echo $_smarty_tpl->getValue('item')['id'];?>
">
                            <button type="submit">Supprimer</button>
                        </form>
                    </li>
                    <li>
                        <input type="hidden" name="id_tache" value="<?php echo $_smarty_tpl->getValue('item')['id'];?>
">
                        <button type="button" onclick="ouvrirTagPopup(<?php echo $_smarty_tpl->getValue('item')['id'];?>
)">Tag</button>
                    </li>
                </ul>
            </li>
        <?php
}
$_smarty_tpl->getSmarty()->getRuntime('Foreach')->restore($_smarty_tpl, 1);?>
    </ul>
    <div class="popup" id="listeTag">
        <div class="centrer" style="width: 400px;">
            <ul>
                <?php
$_from = $_smarty_tpl->getSmarty()->getRuntime('Foreach')->init($_smarty_tpl, $_smarty_tpl->getValue('tags'), 'item');
$foreach4DoElse = true;
foreach ($_from ?? [] as $_smarty_tpl->getVariable('item')->value) {
$foreach4DoElse = false;
?>
                    <li class="tag">
                        <form action="php/ajoutTagTache.php" method="post">
                            <input type="hidden" name="id_tache" class="id_tache_popup">
                            <input type="hidden" name="id_tag" value="<?php echo $_smarty_tpl->getValue('item')['id'];?>
">
                            <button class="bouton" type="submit">
                                <!-- Si une image est défini, on l'affiche -->
                                <?php if ($_smarty_tpl->getValue('item')['pathImg']) {?>
                                    <img src="<?php echo $_smarty_tpl->getValue('item')['pathImg'];?>
" alt="<?php echo $_smarty_tpl->getValue('item')['nom'];?>
" class="imgTag">
                                    <!-- Sinon on affiche une image par défaut -->
                                <?php } else { ?>
                                    <img src="/user/E-Chat/images/tagImageDefaut.png" alt="Image de tag par défaut" class="imgTag">
                                <?php }?>
                                <!-- On affiche le nom -->
                                <h4><?php echo $_smarty_tpl->getValue('item')['nom'];?>
</h4>
                            </button>
                        </form>
                    </li>
                <?php
}
$_smarty_tpl->getSmarty()->getRuntime('Foreach')->restore($_smarty_tpl, 1);?>
            </ul>
            <button class="bouton" onclick="ouvrir('listeTag')">Fermer</button>
        </div>
    </div>
<?php
}
}
/* {/block "content"} */
/* {block "popup"} */
class Block_96474511768df7eeacccce0_62099027 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div id="popup" class="popup">
        <div class="centrer">
            <h3> Nouveau Tag </h3>
            <form action="php/ajoutTag.php" method="post">
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required><br><br>
                <label for="fichier">Choisir une image :</label>
                <input type="file" name="image" id="image">
                <button type="submit" class="bouton">Valider</button>
                <button class="bouton" onclick="ouvrir('popup')">Fermer</span>
            </form>
        </div>
    </div>
<?php
}
}
/* {/block "popup"} */
/* {block "boutonAjoutTache"} */
class Block_181769541568df7eeaccdcc0_43431653 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <li class="liBoutonAjout">
        <button onclick="ouvrir('popupAjoutTache')" class="boutonAjout">Ajouter</button>
    </li>
<?php
}
}
/* {/block "boutonAjoutTache"} */
}
