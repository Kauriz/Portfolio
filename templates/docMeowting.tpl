{extends file="layouts/documentation.tpl"}


{block name="header"}
    <div class="flex">
        <img src="/assets/logoMeowting.png" alt="Image du logo Meowting">
        <h1 style="margin-left: 10px;">Meowting</h1>
    </div>
{/block}

{block name="objectifs"}
    <div class="paragraphe">
        <p>
            Ce projet est né car je suis devenu le secrétaire du BDA (Bureau des Arts) lors de l'année
            scolaire 2025/2026. C'est une association étudiante présente dans l'école CYTech. Cette
            application Java a donc pour but de faciliter mon travail de secrétaire dans l'association.
            Elle permet de <span class="bleuTexte">prendre note</span> et de créer facilement des <span class="bleuTexte">comptes rendus</span> de réunion.
        </p>
    </div>

{/block}

{block name="description"}
    <h1>Description</h1>
    <div class="paragraphe">
        <p>
            Cette application se résume sur une page contenant une entête et un ensemble de blocs.
            Cet ensemble permet d'afficher plusieurs blocs simultanément, offrant ainsi une prise de
            notes <span class="bleuTexte">claire</span>, <span class="bleuTexte">rapide</span> et <span class="bleuTexte">structurée</span> de la réunion. Elle y contient aussi du markdown pour
            personnaliser son compte rendu.
    </p>
    <h3>Entête</h3>
    <p>
        L'entête permet de définir le <span class="bleuTexte">titre</span> de la réunion et les <span class="bleuTexte">personnes présentes</span>. Elle y intègre
        aussi le bouton de <span class="bleuTexte">création du PDF</span>, le bouton d'<span class="bleuTexte">ajout de bloc</span> et le <span class="bleuTexte">bouton de suppression
        de bloc.</span>
    </p>
    <h3>Bloc</h3>
    <p>
        Dans l'application, chaque bloc représente un paragraphe du compte rendu. Il est composé
        de deux champs de texte, l'un pour le titre, l'autre pour le contenu.
    </p>
    </div>
    <div class="note">
        <div class="flex">
            <img src="/assets/info.png" alt="Image d'info" style="width: 40px;">
            <h3> Info </h3>
        </div>
        <p> Cette structure est pratique pour les réunions qui vont dans tous les sens.
        </p>
    </div>

{/block}

{block name="details"}
    <h1>Outils utilisé</h1>

    <div class="paragraphe">
        <p>
            Environnement de développement : Eclipse IDE for Java Developers<br>
            Langage : Java 21.0.7<br>
            Bibliothsèques principales : JavaFX et ITextPDF
        </p>
    </div>
{/block}

{block name="visualisation"}
<h1>Maquette</h1>
<div class="paragraphe">
    <p>Voici la maquette de l'application</p>
    <br>
    <img src="/assets/MaquetteMeowting.png" alt="Image de la maquette de l'application Meowting" class="maquette">
</div>
{/block}

{block name="perspective"}
    <h1>Perspectives d'évolution</h1>
    <div class="paragraphe">
        <p>
            La prochaine étape du développement serait d'offrir à l'utilisateur la possibilité de 
            <span class="bleuTexte">réorganiser librement les différents blocs</span>. Un enrichissement du 
            <span class="bleuTexte">support Markdown</span> déjà en place constituerait également un atout. 
            Enfin, il serait pertinent de proposer l'application aux autres associations de l'école.
        </p>
    </div>

{/block}

{block name="conclusion"}
    <h1>Conclusion</h1>
    <div class="paragraphe">
        <p>
            Pensée pour les étudiants, les associations, Meowting transforme la prise de notes en un
            véritable levier de collaboration. C'est plus qu'un outil : c'est un facilitateur d'échanges,
            un catalyseur d'idées, et un allié dans chaque projet.
        </p>
    </div>
{/block}