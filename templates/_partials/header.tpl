<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{$title|escape}</title>
    <link rel="stylesheet" href="/user/E-Chat/css/style.css">
    <script src="/user/E-Chat/script.js"></script>
</head>

<body>
    <header>
        <nav>
            <ul>
                {foreach from=$menu item=item}
                    {if $item.Logo}
                        <li><img src="{$item.Lien}" alt="{$item.Logo}" class="imgLogo"></li>
                    {elseif $item.Titre}
                        <li><h2>{$item.Titre}</h2></li>
                    {elseif $item.Nom}   
                        <li><a href="{$item.Lien}">{$item.Nom}</a></li>
                    {else}
                        <li class="error">Erreur : élément de menu invalide</li>
                    {/if}    
                {/foreach}
                {block name="boutonAjoutTache"}
                {/block}
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
</div>