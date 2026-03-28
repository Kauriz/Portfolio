{extends file="layouts/classique.tpl"}

{block name="sidebar"}
    <div class="sidebar">
        <h3>Tags</h3>
        <ul>
            {foreach from=$tags item=item}
                <li class="tag">
                    <!-- Si une image est défini, on l'affiche -->
                    {if $item['pathImg']}
                        <img src="{$item['pathImg']}" alt="{$item['nom']}" class="imgTag">
                        <!-- Sinon on affiche une image par défaut -->
                    {else}
                        <img src="/user/E-Chat/images/tagImageDefaut.png" alt="Image de tag par défaut" class="imgTag">
                    {/if}
                    <!-- On affiche le nom -->
                    <h4>{$item['nom']}</h4>
                    <form action="php/supprTag.php" method="post">
                        <input type="hidden" name="nom" value="{$item['nom']}">
                        <button type="submit" class="desactiver">
                            <img src="/user/E-Chat/images/moins.png" alt="Image moins" class="imgSuppr">
                        </button>
                    </form>
                </li>
            {/foreach}
            <li>
                <button class="ajout" onclick="ouvrir('popup')">
                    <img src="/user/E-Chat/images/ajout.png" alt="Image d'ajout de tag" width="20vw">
                    <h4>Ajouter un tag</h4>
                </button>
            </li>
        </ul>
    </div>
{/block}

{block name="content"}
    <ul>
        {foreach from=$taches item=item}
            <li class="tache">
                <label>{$item.nom}</label>
                {foreach from=$tagTaches item=tagTache}
                    <!-- On affiche seulement le tag s'il est relié à la tache qui est en train d'être affiché -->
                    {if ($tagTache.id_tache == $item.id)}
                        <!-- A partir de l'id on doit retrouver le nom du Tag -->
                        {foreach from=$tags item=tag}
                            {if $tag.id == $tagTache.id_tag}
                                <!-- On l'affiche -->
                                <div class="tagTache">{$tag.nom}</div>
                            {/if}
                        {/foreach}
                    {/if}
                {/foreach}
                <form action="/user/E-Chat/php/changerEtat.php" method="post" class="imgEtat">
                    <input type="hidden" name="id" value="{$item.id}">
                    <button type="button" onclick="changerEtatTache(this)" class="sansFond">
                        {if $item.etat == "a faire"}
                            <img src="/user/E-Chat/images/rondRouge.png" alt="Image tache à faire" class="imgEtat">
                        {elseif $item.etat == "en cours"}
                            <img src="/user/E-Chat/images/rondOrange.png" alt="Image tache en cours" class="imgEtat">
                        {else}
                            <img src="/user/E-Chat/images/rondVert.png" alt="Image tache fait" class="imgEtat">
                        {/if}
                    </button>
                </form>
                <button onclick="ouvrir('plusTache{$item.id}')">
                    <img src="/user/E-Chat/images/moreHorizontal.png" alt="Image d'option supplémentaire" class="">
                </button>
                <ul id="plusTache{$item.id}" style="display: none;">
                    <li>
                        <form action="/user/E-Chat/php/supprTache.php" method="post">
                            <input type="hidden" name="id" value="{$item.id}">
                            <button type="submit">Supprimer</button>
                        </form>
                    </li>
                    <li>
                        <input type="hidden" name="id_tache" value="{$item.id}">
                        <button type="button" onclick="ouvrirTagPopup({$item.id})">Tag</button>
                    </li>
                </ul>
            </li>
        {/foreach}
    </ul>
    <div class="popup" id="listeTag">
        <div class="centrer" style="width: 400px;">
            <ul>
                {foreach from=$tags item=item}
                    <li class="tag">
                        <form action="php/ajoutTagTache.php" method="post">
                            <input type="hidden" name="id_tache" class="id_tache_popup">
                            <input type="hidden" name="id_tag" value="{$item.id}">
                            <button class="bouton" type="submit">
                                <!-- Si une image est défini, on l'affiche -->
                                {if $item['pathImg']}
                                    <img src="{$item['pathImg']}" alt="{$item['nom']}" class="imgTag">
                                    <!-- Sinon on affiche une image par défaut -->
                                {else}
                                    <img src="/user/E-Chat/images/tagImageDefaut.png" alt="Image de tag par défaut" class="imgTag">
                                {/if}
                                <!-- On affiche le nom -->
                                <h4>{$item['nom']}</h4>
                            </button>
                        </form>
                    </li>
                {/foreach}
            </ul>
            <button class="bouton" onclick="ouvrir('listeTag')">Fermer</button>
        </div>
    </div>
{/block}

{block name="popup"}
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
{/block}

{block name="boutonAjoutTache"}
    <li class="liBoutonAjout">
        <button onclick="ouvrir('popupAjoutTache')" class="boutonAjout">Ajouter</button>
    </li>
{/block}