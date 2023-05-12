import React from "react";

import "./styles/faq.css";

function FAQ () {

    const questionsReponses = [
        {
            question: "Est-ce que le stage est obligatoire?",
            reponse:"Le stage de fin d'études en informatique est obligatoire pour l'obtention du diplôme collgégial."
        },
        {
            question:"Quel est l'horaire de l'étudiant durant les stages?",
            reponse:"L'étudiant doit respecter l'horaire de l'entreprise durant son stage."
        },
        {
            question:"Est-ce que l'étudiant travaille pendant les journées pédagogiques et les journées de rattrapage?",
            reponse:"L'étudiant doit respecter l'horaire de l'entreprise durant son stage et ce même durant les journées pédagogiques et de rattrapage"
        },
        {
            question:"Quelle est la durée d'un stage de fin d'études?",
            reponse:"La durée du stage est de 15 semaines pour les deux profils de sortie (réseaux et programmation)."
        },
        {
            question:"Quelles sont les dates prévues pour les stages?",
            reponse:"Les stages sont prévus du 21 janvier au 3 mai 2019."
        }        
    ];

    return (
        <div>
            <h2 className="titre">Foire aux questions - FAQ</h2>

            <div>
                {questionsReponses.map((question) => (
                    <li key={question.question} className="question">
                        <h4>{question.question}</h4>
                        <p>{question.reponse}</p>
                    </li>
                ))}
            </div>
        </div>
    );

}

export default FAQ;