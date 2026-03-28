<?php
/* Smarty version 5.5.1, created on 2025-10-30 14:08:12
  from 'file:accueil.tpl' */

/* @var \Smarty\Template $_smarty_tpl */
if ($_smarty_tpl->getCompiled()->isFresh($_smarty_tpl, array (
  'version' => '5.5.1',
  'unifunc' => 'content_6903714c437460_49323947',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '624b2bff6230c671e65304bb222f94666741a9fb' => 
    array (
      0 => 'accueil.tpl',
      1 => 1761833288,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
))) {
function content_6903714c437460_49323947 (\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
$_smarty_tpl->getInheritance()->init($_smarty_tpl, true);
?>


<?php 
$_smarty_tpl->getInheritance()->instanceBlock($_smarty_tpl, 'Block_2812832896903714c427728_52418398', "content");
$_smarty_tpl->getInheritance()->endChild($_smarty_tpl, "layouts/sidebarOnly.tpl", $_smarty_current_dir);
}
/* {block "content"} */
class Block_2812832896903714c427728_52418398 extends \Smarty\Runtime\Block
{
public function callBlock(\Smarty\Template $_smarty_tpl) {
$_smarty_current_dir = '/home/cytech/Desktop/Moi/SiteAxel/templates';
?>

    <div id="viewport">
        <div id="content">
            <!-- Tableau principale de présentation -->
            <h1 class="tableauTitre" style="top: 0px; left: 50%; transform: translateX(-50%); z-index: 1;">Portfolio</h1>
            <img src="assets/titre.png"
                style="top: -120px; left: 50%; transform: translateX(-50%); position: relative; width: 250px; max-width: none; max-height: none;z-index: 0;">
            <!-- Postite de connexion -->
            <div class="block apparition" style="position: absolute; top: 0px; left: 0px; margin: 1vh 1vw 0vh 0vw;">
                <form action="/connexion.php" method="post">
                    <div class="postite">
                        <img src="assets/postitBleuCiel.png" alt="Image de postite bleu ciel">
                        <div class="imgConteneur">
                            <div class="flex">
                                <img src="assets/connexion.png" alt="Image de connexion">
                                Connexion
                            </div>  
                            <input type="mdp" id="mdp" name="mdp" required class="champTexte" style="width: 80%; margin-top: 5px;">
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
            <!-- Panel -->
            <?php
$_from = $_smarty_tpl->getSmarty()->getRuntime('Foreach')->init($_smarty_tpl, $_smarty_tpl->getValue('panels'), 'panel');
$foreach0DoElse = true;
foreach ($_from ?? [] as $_smarty_tpl->getVariable('panel')->value) {
$foreach0DoElse = false;
?>
                <div class="panelA" style="top: <?php echo $_smarty_tpl->getValue('panel')['top'];?>
; left: <?php echo $_smarty_tpl->getValue('panel')['left'];?>
;" id="panel<?php echo $_smarty_tpl->getValue('panel')['id'];?>
" onclick="zoomPage(<?php echo $_smarty_tpl->getValue('panel')['id'];?>
)">
                    <img src="assets/retour.png" class="button" style="position: absolute; top: 0vh; left: 0vw; display: none; width: 40px;" id="boutonRetour<?php echo $_smarty_tpl->getValue('panel')['id'];?>
" onclick="dezoomPage(<?php echo $_smarty_tpl->getValue('panel')['id'];?>
)">
                    <img src="assets/<?php echo $_smarty_tpl->getValue('panel')['titre'];?>
" class="titrePanel">
                    <img src="assets/punaise.png" style="  top: -10%; left: -10%; " class="punaise">
                    <!-- Postite -->
                    <?php
$_from = $_smarty_tpl->getSmarty()->getRuntime('Foreach')->init($_smarty_tpl, $_smarty_tpl->getValue('contenus')[$_smarty_tpl->getValue('panel')['nom']], 'projet', false, NULL, 'liste', array (
  'index' => true,
));
$foreach1DoElse = true;
foreach ($_from ?? [] as $_smarty_tpl->getVariable('projet')->value) {
$foreach1DoElse = false;
$_smarty_tpl->tpl_vars['__smarty_foreach_liste']->value['index']++;
?>
                    <?php echo $_smarty_tpl->getSmarty()->getFunctionHandler('math')->handle(array('equation'=>"x * 0.4",'x'=>($_smarty_tpl->getValue('__smarty_foreach_liste')['index'] ?? null),'assign'=>'delay'), $_smarty_tpl);?>

                    <div class="block apparition" style="top: <?php echo $_smarty_tpl->getValue('projet')['top'];?>
; left: <?php echo $_smarty_tpl->getValue('projet')['left'];?>
; animation-delay:<?php echo $_smarty_tpl->getValue('delay');?>
s;"
                        data-projet-id="<?php echo $_smarty_tpl->getValue('projet')['id'];?>
">
                        <div class="flex">
                            <div class="postite">
                                <img src="assets/<?php echo $_smarty_tpl->getValue('projet')['postit'];?>
" alt="Image de <?php echo $_smarty_tpl->getValue('projet')['postite'];?>
">
                                <div class="imgConteneur">
                                    <div class="flex">
                                        <img src="assets/<?php echo $_smarty_tpl->getValue('projet')['logo'];?>
" alt="Image du logo <?php echo $_smarty_tpl->getValue('projet')['nom'];?>
" class="imgPostite">
                                        <?php echo $_smarty_tpl->getValue('projet')['nom'];?>

                                    </div>
                                    <div style="height: 5px;"></div>
                                    <p class="descProjet"><?php echo $_smarty_tpl->getValue('projet')['description'];?>
</p>
                                </div>
                            </div>
                            <div class="conteneurAnimation" id="animation<?php echo $_smarty_tpl->getValue('projet')['id'];?>
">
                                <?php if ($_smarty_tpl->getValue('projet')['doc'] != null) {?>
                                    <form action="/index.php" method="post">
                                        <input type="hidden" name="pageActuelle" value="<?php echo $_smarty_tpl->getValue('projet')['doc'];?>
">
                                        <button type="submit" class="bouton">Détail</button>
                                    </form>
                                <?php }?>
                                <?php if ($_smarty_tpl->getValue('projet')['bouton2'] != null) {?>
                                    <?php if ($_smarty_tpl->getValue('projet')['siteExterne']) {?>
                                        <!-- 🔗 Cas d’un lien externe (comme Root-Me) -->
                                        <a href="<?php echo $_smarty_tpl->getValue('projet')['lien'];?>
" target="_blank" rel="noopener noreferrer" class="bouton">
                                            <?php echo $_smarty_tpl->getValue('projet')['bouton2'];?>

                                        </a>

                                    <?php } elseif ($_smarty_tpl->getValue('projet')['telechargement']) {?>
                                        <!-- 📄 Cas d’un projet téléchargeable -->
                                        <form action="<?php echo $_smarty_tpl->getValue('projet')['lien'];?>
" method="post" target="_blank">
                                            <input type="hidden" name="telechargement" value="<?php echo $_smarty_tpl->getValue('projet')['telechargement'];?>
">
                                            <button type="submit" class="bouton"><?php echo $_smarty_tpl->getValue('projet')['bouton2'];?>
</button>
                                        </form>
                                    <?php } else { ?>
                                        <!-- 💾 Cas d’un projet interne -->
                                        <form action="<?php echo $_smarty_tpl->getValue('projet')['lien'];?>
" method="post" target="_blank">
                                            <?php if ($_smarty_tpl->getValue('projet')['secure'] != null) {?>
                                                <button type="submit" class="bouton" <?php if (!$_smarty_tpl->getValue('estConnecte')) {?>disabled<?php } else { ?>abled<?php }?>>
                                                    <?php echo $_smarty_tpl->getValue('projet')['bouton2'];?>

                                                </button>
                                            <?php } else { ?>
                                                <button type="submit" class="bouton">
                                                    <?php echo $_smarty_tpl->getValue('projet')['bouton2'];?>

                                                </button>
                                            <?php }?>
                                        </form>
                                    <?php }?>
                                <?php }?>
                            </div>
                        </div>
                    </div>
                    <?php
}
$_smarty_tpl->getSmarty()->getRuntime('Foreach')->restore($_smarty_tpl, 1);?>
                </div>
            <?php
}
$_smarty_tpl->getSmarty()->getRuntime('Foreach')->restore($_smarty_tpl, 1);?>
        </div>
    </div>
<?php
}
}
/* {/block "content"} */
}
