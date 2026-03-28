<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>{$title|escape}</title>
    <link rel="stylesheet" href="/css/front/style.css">
</head>

<body>
    <div class="boxDoc">
        <!-- Bloc contenant le logo et le nom du projet -->
        {block name="header"}
        {/block}
        <!-- Bloc contenant le contexte et les objectifs (pourquoi ce projet) -->
        {block name="objectifs"}
        {/block}
        <!-- Bloc contenant en détail la description du projet -->
        {block name="description"}
        {/block}
        <!-- Bloc contenant les outils utilisé pour le projet -->
        {block name="details"}
        {/block}
        <!-- Bloc contenant des images finales prévus -->
        {block name="visualisation"}
        {/block}
        <!-- Bloc contenant les perspectives futurs de l'application -->
        {block name="perspective"}
        {/block}
        <!-- Bloc contenant ce que j'ai appris grâce au projet et l'interet du projet -->
        {block name="conclusion"}
        {/block}
    </div>
</body>