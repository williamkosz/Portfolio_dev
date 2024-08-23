import kasa from "../assets/projects/kasa.png";
import monVieuxGrimoire from "../assets/projects/mon_vieux_grimoire.png";
import sophieBluel from "../assets/projects/sophie_bluel.png";

export const HERO_CONTENT = `Passionné d'informatique, j'ai décidé de faire de ce monde mon quotidien. Manageur dans le commerce de formation, c'est à la fin de mon bac+5 que j'ai intégré une formation de Développeur Web. 
Aujourd'hui, mon objectif est de me spécialiser dans la cybersécurité et cela passe par l'apprentissage des systèmes et réseaux. A termes, mon souhait est d'être un expert de la cybersécurité.`;

export const ABOUT_TEXT = `Ce que je veux : Intégrer une entreprise pour développer mes compétences en systèmes / réseaux. Mes expériences passées ont fait de moi quelqu'un d'organisé, réfléchi et sachant m'adapter, j'apprends vite et suis autonome rapidement. 
ma formation de developpeur a été l'amorce de mon projet professionnel, j'ai pu travailler sur différentes technologies telles que : HTML, CSS, Javascript, React, Node.JS. Il est maintenant temps de passer sur une autre dimension de l'IT pour pouvoir un jour travailler dans le domaine de la cybersécurité. 
Je suis aujourd'hui en recherche d'une entreprise qui pourra m'accueillir dans le cadre d'une formation en apprentissage. Découvrez en plus dans mon CV ! `;

export const EXPERIENCES = [
  {
    year: "2024 - 2026",
    role : "Bachelor Administrateur d'infrastructures sécurisées en apprentissage (Bac+3)",
    company: "STUDI",
    description: "Rythme en apprentissage de 75% en entreprise / 25% en formation. Installation, paramétrage, sécurisation, maintien en condition opérationnelle et en condition de sécurité",
    technologies: ["Systèmes / Réseaux", "Cybersécurité", "Support Technique"],
  },

  {
    year: "Fevrier 2024 - Juillet 2024 ",
    role: "Développeur web (RNCP Niveau 5)",
    company: "OpenClassrooms",
    description: ` Cette formation est le point de départ de ma carrière de développeur. Une multitude de projets professionnalisants à réaliser via différentes technologies. J'ai également pu aborder la gestion de projets et la planification de ceux-ci. `,
    technologies: ["HTML","CSS","Javascript", "React.js", "Node.js", "mongoDB"],
  },
  
];

export const PROJECTS = [
  
  {
    title: "Kasa - Location d'appartements",
    image: kasa,
    description:
      "Refonte d'un site d'agence de location d'appartements en React avec gestion des pages pour chaque appartement",
    technologies: ["React", "SASS"],
    url: "/kasa"
  },
  {
    title: "Mon Vieux Grimoire",
    image: monVieuxGrimoire,
    description:
      "Création du back-end pour l'ouverture d'un site de librairie. L'objectif est de pouvoir permettre aux utilisateurs de publier leurs livres favoris, les noter ainsi que noter ceux des autres utilisateurs.",
    technologies: ["Node.js", "Express", "MongoDB"],
    url: "/monvieuxgrimoire"
  },
  {
    title: "Sophie Bluel - Portfolio d'une architecte d'intérieur",
    image: sophieBluel,
    description:
      "Création d'un portfolio dynamique pour une architecte d'intérieur. L'utilisateur doit pouvoir se connecter afin de passer en mode Admin et pouvoir ajouter ses photos via l'aide d'une modale, puis les supprimer.",
    technologies: ["HTML", "CSS", "Javascript"],
    url: "/sophiebluel"
  },
];

export const CONTACT = {
  adress: "Toulouse, Seilh (31840)",
  phoneNo: "06.49.51.60.66 ",
  email: "william.koszelnik@gmail.com",
};
