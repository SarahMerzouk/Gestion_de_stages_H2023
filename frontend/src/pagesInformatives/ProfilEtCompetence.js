import React from "react";

import "./styles/profilEtCompetence.css";

function ProfilEtCompetence () {
    const tachesEnReseaux = [
    "monter un serveur",
    "planifier et implanter un réseau",
    "implanter les technologies et les services propres au réseau Internet",
    "assurer la gestion du résea",
    "planifier et déployer des environnements virtuels",
    "planifier et mettre en place la sécurité des systèmes informatiques",
    "déployer les nouvelles technologies des réseaux",
    "automatiser les tâches d’administration réseaux",
    "superviser les réseaux",
    "assurer le soutien technique aux utilisateurs",
    "découvrir des nouvelles technologies"];
    
    const connaissancesEnReseaux = [
    "l’installation et la gestion des serveurs et des clients Microsoft et Linux",
    "la configuration, l’installation et la gestion d’un serveur Web ou de courrier",
    "le déploiement d’un système et d’une application client",
    "la mise en place de la sécurité des systèmes informatiques",
    "l’utilisation des techniques pour tester et sécuriser les équipements informatiques",
    "le déploiement des environnements virtuels et de l’infonuagique",
    "la résolution de problèmes de réseaux sur les équipements informatiques",
    "préparation à la certification CEH (Certified Ethical Hacker)"];

    const tachesEnDeveloppement = [
        "participer à l’analyse des systèmes à implanter",
        "détecter les problèmes, en dégager la structure et trouver les solutions logiques",
        "effectuer les jeux d’essai et la mise au point des programmes et des systèmes",
        "élaborer des systèmes et participer à leur implantation ou à leur modification dans les entreprises",
        "programmer des objets connectés",
        "sécuriser les applications informatiques",
        "virtualiser des postes de travail",
        "comprendre les notions fondamentales des réseaux",
        "gérer les versions des fichiers sources des applications informatiques",
        "déployer des applications infonuagiques",
        "découvrir les nouvelles technologies"
    ];

    const connaissancesEnDeveloppement = [
        "la programmation structurée et orientée objet et Web dynamique",
        "les bases de données",
        "l’installation et la configuration de logiciels",
        "les composantes matérielles de l’ordinateur, leur installation et leur configuration",
        "les systèmes d’exploitation (Windows et Linux)",
        "les méthodologies Agile telles que SCRUM",
        "le développement pour plateforme mobile",
        "l’assurance qualité logiciel"
    ];

    return (
        <div>
            <h2 className="titre">Le profil et les compétences des stagiaires</h2>

            {/* Étudiants en réseaux*/}
            <div className="categorie">

                <h3 className="programme"> {">>>"} Étudiants en réseaux </h3>

                <h4>Nos étudiants en Gestion de réseaux et sécurité ont suivi des cours leur permettant de
                gérer des réseaux informatiques et offrir du soutien aux personnes qui utilisent 
                des ordinateurs et des réseaux, c’est-à-dire:</h4>
                {tachesEnReseaux.map((tache) => (
                    <li key={tache} className="">
                        {tache}
                    </li>
                ))}

                <h4>connaître de façon approfondie le traitement de
                 l’information, les logiciels et les composants de l’ordinateur et des périphériques tels que:</h4>
                 {connaissancesEnReseaux.map((connaissance) => (
                    <li key={connaissance} className="">
                        {connaissance}
                    </li>
                ))}
            </div>

            {/* Étudiants en développement d'application*/}
            <div className="categorie">
                
                <h3 className="programme"> {">>>"} Étudiants en développement d'application </h3>

                <h4>Nos étudiant en Développement d'applications informatiques ont suivi des cours leur permettant de:</h4>
                {tachesEnDeveloppement.map((tache) => (
                    <li key={tache} className="">
                        {tache}
                    </li>
                ))}

                <h4>connaître de façon approfondie le traitement de l’information,
                les logiciels et les composants de l’ordinateur et des périphériques tels que:</h4>
                {connaissancesEnDeveloppement.map((connaissance) => (
                    <li key={connaissance} className="">
                        {connaissance}
                    </li>
                ))}
            </div>
        </div>
    );
}

export default ProfilEtCompetence;