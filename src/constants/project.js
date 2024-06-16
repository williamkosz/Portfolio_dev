import aboutKasa from "../assets/kasa/about.webp"
import colapseKasa from "../assets/kasa/colapse.webp"
import housingKasa from "../assets/kasa/housing.webp"
import kasaContent from "../assets/kasa/kasaContent.webp"
import kasaLanding from "../assets/kasa/landing.webp"
import kasaLanding2 from "../assets/kasa/landing2.webp"

import addBook from "../assets/mon_vieux_grimoire/addBook.webp"
import deleteBook from "../assets/mon_vieux_grimoire/deleteBook.webp"
import landingGrimoire from "../assets/mon_vieux_grimoire/landing.webp"
import loginGrimoire from "../assets/mon_vieux_grimoire/login.webp"
import grimoireContent from "../assets/mon_vieux_grimoire/content.webp"

import bluelLanding from "../assets/sophie_bluel/landing.webp"
import noFilter from "../assets/sophie_bluel/nofilter.webp"
import filtered from "../assets/sophie_bluel/filtered.webp"
import bluelLogin from "../assets/sophie_bluel/bluelLogin.webp"
import bluelContent from "../assets/sophie_bluel/bluelContent.webp"
import modal from "../assets/sophie_bluel/modal.webp"


export const KASA_PROJECT = [
    {
        title:"Kasa, location d'appartements entre particuliers",
        description:"Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET. Notre mission dans ce projet est de faire la refonte du site avec NodeJS côté back-end et React côté front-end. Pour ce faire, Kasa a commandé une nouvelle maquette qui est le point de départ de notre mission. Nous devons donc démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma avec les versions responsives.",
        tech:['React','SASS'],
        image:[
            kasaLanding,
            kasaLanding2,
            aboutKasa,
            housingKasa,
            colapseKasa,
            kasaContent,
        ],
        url:'https://github.com/williamkosz/Kasa-P5-OC'
    }
]

export const GRIMOIRE_PROJECT = [
    {
        title:'Mon Vieux Grimoire, Notation de livres',
        description:'En tant que développeur freelance, nous allons travailler avec Kevin, un développeur front-end expérimenté. Kévin nous contacte pour nous proposer de travailler avec lui en mutualisant nos compétences front / back sur un tout nouveau projet qui lui a été proposé. Il s’agit d’une petite chaîne de librairies qui souhaite ouvrir un site de référencement et de notation de livres : "Mon Vieux Grimoire". Nous allons donc développer la partie back-end avec NodeJS, Express et MongoDB.',
        tech:['NodeJS','Express','MongoDB'],
        image:[
            landingGrimoire,
            loginGrimoire,
            addBook,
            deleteBook,
            grimoireContent,
        ],
        url:'https://github.com/williamkosz/Mon-vieux-grimoire-P6-OC'
    }
]

export const BLUEL_PROJECT = [
    {
        title:'Sophie Bluel, Architecte d\'intérieur',
        description:'Développeur front-end pour l\'agence "ArchiWebos", Nous sommes envoyés en renfort sur le développement du site portfolio d\'une architecte d\'intérieur. Nos 3 principaux objectifs sont, la réalisation de la page de présentation des travaux de l\'architecte (à partir du HTML fourni), la page de connexion de l\'administrateur du site (le client) (code à créer de zéro) ; la modale permettant d\'uploader de nouveaux médias (code à créer from scratch). Il faudra donc communiquer avec l\'API pour connecter l\'utilisateur, ajouter et supprimer des photos.',
        tech:['HTML','CSS','Javascript'],
        image:[
            bluelLanding,
            noFilter,
            filtered,
            bluelLogin,
            modal,
            bluelContent,
        ],
        url:'https://github.com/williamkosz/Sophie-Bluel-P3-OC'
    }
]