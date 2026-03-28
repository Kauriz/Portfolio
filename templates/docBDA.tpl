{extends file="layouts/documentation.tpl"}

<!-- Bloc contenant le logo et le nom du projet -->
{block name="header"}
    <div class="flex">
        <img src="/assets/logoBDA.png" alt="Image du logo BDA">
        <h1 style="margin-left: 10px;">BDA</h1>
    </div>
{/block}
<!-- Bloc contenant le contexte et les objectifs (pourquoi ce projet) -->
{block name="objectifs"}
    <div class="paragraphe">
        <p>
            Le <span class="bleuTexte">Bureau des Arts</span> (BDA) est une association étudiante dont la mission est de proposer et
            d'organiser des activités culturelles et artistiques à destination des élèves de CY Tech.
            L'association est composée de plusieurs pôles, chacun ayant un rôle spécifique : le pôle
            <span class="bleuTexte">activités manuelles</span>, le pôle <span class="bleuTexte">musique</span>, le pôle <span class="bleuTexte">photo</span> 
            et le pôle <span class="bleuTexte">journalisme.</span>
        </p>

        <h3>Pôle activités manuelles</h3>
        <p>
            Durant mon mandat, ce pôle est coordonné par la vice-présidente de l'association. Il
            organise différents ateliers créatifs tout au long de l'année, tels que des <span class="bleuTexte">initiations à la
            couture</span> ou des séances de <span class="bleuTexte">création artisanale</span>, afin de permettre aux étudiants d'exprimer
            leur créativité.
        </p>

        <h3>Pôle musique</h3>
        <p>
            Ce pôle a pour objectif de <span class="bleuTexte">rassembler les passionnés de musique</span> et de leur offrir
            l'opportunité de se produire sur scène, que ce soit lors des événements du BDA ou à
            l'occasion de manifestations extérieures. Il constitue un véritable espace d'échange et de
            partage autour de la pratique musicale.
        </p>

        <h3>Pôle photo</h3>
        <p>
            Le pôle photo a pour mission d'<span class="bleuTexte">immortaliser les moments forts</span> de la vie étudiante en
            couvrant l'ensemble des événements de l'école. Il prend également en charge les photos
            de classe et contribue à la réalisation du yearbook de fin d'année, véritable album-
            souvenir pour les étudiants.
        </p>

        <h3>Pôle journalisme</h3>
        <p>
            Durant mon mandat, ce pôle est principalement dédié à la réalisation de la <em>Gazette</em>, le
            journal mensuel de l'école. On y retrouve les actualités de la vie étudiante, des interviews,
            des jeux, des citations et bien d'autres contenus, offrant ainsi un <span class="bleuTexte">regard vivant et
            diversifié sur la vie de CY Tech.</span>
        </p>

    </div>
{/block}
{block name="description"}
    <h1>Mon parcours</h1>
    <div class="paragraphe">
        <p>
            Dès mon arrivée à CY Tech en première année du cycle ingénieur, j'avais l'ambition de
            rejoindre le Bureau des Arts (BDA), convaincu que cette expérience serait une occasion
            unique de m'épanouir au sein de l'école tout en contribuant activement à la vie
            associative.
        </p>
        <p>
            Même si les possibilités d'intégrer officiellement l'association étaient limitées pour les
            nouveaux arrivants, j'ai saisi chaque opportunité pour m'impliquer. J'ai ainsi eu la chance
            de co-animer la majorité des événements du BDA, une expérience riche qui m'a permis
            de participer concrètement aux projets et de créer des liens solides avec l'équipe.
        </p>
        <p>
            Cette implication m'a naturellement conduit à rejoindre officiellement le bureau du BDA,
            où j'ai assumé les fonctions de secrétaire et de rédacteur en chef de la Gazette. Un rôle
            formateur qui m'a permis de développer à la fois mes compétences organisationnelles et
            ma créativité, tout en affirmant mon engagement associatif.
        </p>

    </div>
{/block}
<!-- Bloc contenant en détail la description du projet -->
{block name="details"}
    <h1>Mes responsabilité</h1>
    <div class="paragraphe">
        <p>
            En tant que secrétaire de l'association, j'assure la gestion administrative du BDA, et plus
            particulièrement la rédaction des comptes rendus de réunion. Soucieux de rendre ce
            travail plus efficace et accessible, j'ai conçu et développé l'application <strong>E-Chat</strong>,
            spécialement dédiée à cette mission. 
        </p>
        <p>
            Parallèlement, je suis également responsable de la Gazette, dont j'ai la charge de garantir
            la publication régulière tout au long de l'année. Cette responsabilité m'a permis
            d'apprendre à constituer et encadrer une équipe, tout en renforçant mes compétences en
            coordination, organisation et gestion de projet.
        </p>
        <p>
            Bien que je ne sois pas directement rattaché au pôle musique, je tiens à ce qu'il soit
            pleinement représenté au sein du bureau lors des décisions. À ce titre, j'accompagne ce
            pôle dans la poursuite de ses activités, notamment en sollicitant, à leur demande, des
            financements auprès de l'université afin de leur offrir de bonnes conditions de
            développement.
        </p>

    </div>
{/block}

<!-- Bloc contenant des images finales prévus -->
{block name="visualisation"}
    <h1>Aperçu</h1>
    <div class="paragraphe">
        <p>
            Vous pouvez trouver ici un exemple d'une Gazette.
        </p>
        <div style="width:100%; max-width:900px; margin:auto;">
            <iframe 
                src="/assets/Gazette de Septembre.pdf" 
                width="100%" 
                height="800px" 
                style="border: none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            </iframe>
        </div>
    </div>
{/block}

<!-- Bloc contenant ce que j'ai appris grâce au projet et l'interet du projet -->
{block name="conclusion"}
    <h1>Conclusion</h1>
    <div class="paragraphe">
        <p>
            Mon expérience au sein du BDA m'a permis de développer des compétences variées,
            allant de la gestion administrative à la coordination d'équipe, tout en affirmant mon sens
            des responsabilités et de l'organisation. Plus qu'un simple rôle associatif, cet engagement
            a été une véritable opportunité d'épanouissement personnel et collectif, en alliant
            créativité, rigueur et esprit d'initiative.
        </p>
        <p>
            Cette aventure m'a montré l'importance de l'investissement associatif dans la vie
            étudiante, non seulement pour enrichir mon parcours, mais aussi pour contribuer
            activement à la dynamique culturelle et artistique de l'école.
        </p>
    </div>
{/block}