{extends file="layouts/sidebarOnly.tpl"}

{block name="content"}
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
            {foreach from=$panels item=panel}
                <div class="panelA" style="top: {$panel.top}; left: {$panel.left};" id="panel{$panel.id}" onclick="zoomPage({$panel.id})">
                    <img src="assets/retour.png" class="button" style="position: absolute; top: 0vh; left: 0vw; display: none; width: 40px;" id="boutonRetour{$panel.id}" onclick="dezoomPage({$panel.id})">
                    <img src="assets/{$panel.titre}" class="titrePanel">
                    <img src="assets/punaise.png" style="  top: -10%; left: -10%; " class="punaise">
                    <!-- Postite -->
                    {foreach from=$contenus[$panel.nom] item=projet name=liste}
                    {math equation="x * 0.4" x=$smarty.foreach.liste.index assign=delay}
                    <div class="block apparition" style="top: {$projet.top}; left: {$projet.left}; animation-delay:{$delay}s;"
                        data-projet-id="{$projet.id}">
                        <div class="flex">
                            <div class="postite">
                                <img src="assets/{$projet.postit}" alt="Image de {$projet.postite}">
                                <div class="imgConteneur">
                                    <div class="flex">
                                        <img src="assets/{$projet.logo}" alt="Image du logo {$projet.nom}" class="imgPostite">
                                        {$projet.nom}
                                    </div>
                                    <div style="height: 5px;"></div>
                                    <p class="descProjet">{$projet.description}</p>
                                </div>
                            </div>
                            <div class="conteneurAnimation" id="animation{$projet.id}">
                                {if $projet.doc != null}
                                    <form action="/index.php" method="post">
                                        <input type="hidden" name="pageActuelle" value="{$projet.doc}">
                                        <button type="submit" class="bouton">Détail</button>
                                    </form>
                                {/if}
                                {if $projet.bouton2 != null}
                                    {if $projet.siteExterne}
                                        <!-- 🔗 Cas d’un lien externe (comme Root-Me) -->
                                        <a href="{$projet.lien}" target="_blank" rel="noopener noreferrer" class="bouton">
                                            {$projet.bouton2}
                                        </a>

                                    {elseif $projet.telechargement}
                                        <!-- 📄 Cas d’un projet téléchargeable -->
                                        <form action="{$projet.lien}" method="post" target="_blank">
                                            <input type="hidden" name="telechargement" value="{$projet.telechargement}">
                                            <button type="submit" class="bouton">{$projet.bouton2}</button>
                                        </form>
                                    {else}
                                        <!-- 💾 Cas d’un projet interne -->
                                        <form action="{$projet.lien}" method="post" target="_blank">
                                            {if $projet.secure != null}
                                                <button type="submit" class="bouton" {if !$estConnecte}disabled{else}abled{/if}>
                                                    {$projet.bouton2}
                                                </button>
                                            {else}
                                                <button type="submit" class="bouton">
                                                    {$projet.bouton2}
                                                </button>
                                            {/if}
                                        </form>
                                    {/if}
                                {/if}
                            </div>
                        </div>
                    </div>
                    {/foreach}
                </div>
            {/foreach}
        </div>
    </div>
{/block}