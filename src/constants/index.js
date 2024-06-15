import kasa from "../assets/projects/kasa.png";
import monVieuxGrimoire from "../assets/projects/mon_vieux_grimoire.png";
import sophieBluel from "../assets/projects/sophie_bluel.png";
import portfolio from "../assets/projects/portfolio.png" ;

export const HERO_CONTENT = `Passionné d'informatique, j'ai décidé de faire de ce monde mon quotidien. Manageur dans le commerce de formation, c'est à la fin de mon bac+5 que j'ai intégré une formation de Développeur Web. 
Aujourd'hui, mon objectif est de développer mes compétences au maximum afin de pouvoir réaliser des projets plus passionnants les uns que les autres, et de pouvoir étendre mes connaissances à de nouvelles technologies.`;

export const ABOUT_TEXT = `Devenir développeur est ma priorité aujourd'hui. Intrigué, mon expérience de développeur commence par une grande curiosité de ce domaine. Logique, réflexion et résolution de problèmes, rien de plus stimulant ! Mes expériences passées ont fait de moi quelqu'un d'organiser, réfléchi et sachant m'adapter, j'apprends vite et suis autonome rapidement. 
J'ai eu l'occasion de travailler sur différentes technologies tout au long de ma formation, telles que : HTML, CSS, Javascript, React, Node.JS. Le travail d'équipe est également une dimension majeure pour moi. 
Je suis aujourd'hui en recherche d'une entreprise qui pourra m'accueillir dans le cadre d'une formation en apprentissage. Découvrez en plus dans mon CV ! `;

export const EXPERIENCES = [
  {
    year: "Septembre 2024 - Septembre 2025",
    role : "Développeur Fullstack (Apprentissage Bac+3)",
    company: "Epsi Toulouse",
    description: "Formation en apprentissage à venir qui m'apportera des connaissances solides ainsi qu'une expérience professionnelle. Conception et test de solutions applicatives, Gestion de données, Veille technologique et communication, Gestion de projet ",
    technologies: ["A définir"]
  },

  {
    year: "Fevrier 2024 - En cours ",
    role: "Développeur web (RNCP Niveau 5)",
    company: "OpenClassrooms",
    description: ` Cette formation est le point de départ de ma carrière de développeur. Une multitude de projets professionnalisants à réaliser via différentes technologies. J'ai également pu aborder la gestion de projets et la planification de ceux-ci. `,
    technologies: ["HTML","CSS","Javascript", "React.js", "Node.js", "mongoDB"],
  },
  
];

export const PROJECTS = [
  {
    title: "Portfolio Personnel",
    image: portfolio,
    description:
      "Mon portfolio personnel, bonne visite !",
    technologies: ["React", "Tailwind CSS"],
  },
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
