export interface IExperience {
  id: string;
  company?: string;
  missionType: 'freelance' | 'stage' | 'intern';
  description: string;
  bulletPoints?: string[];
  dateStart: Date;
  dateEnd?: Date;
}

export type TExperienceID = (typeof experienceList)[number]['id'];

export const experienceList = [
  {
    id: 'treezor',
    missionType: 'freelance',
    company: 'Treezor',
    description:
      "Mission dans le domaine du bancaire, sur l'application mobile en marque blanche et le back-office sales",
    bulletPoints: [
      'Mobile: Application bancaire end-user',
      'Mobile: Monorepo pour utilisation marque blanche',
      'Mobile: Authentification forte',
      'Mobile: Ajout de fonctionnalités bancaires',
      'Mobile: Amélioration d’UI (Animations)',
      'Mobile: CI/CD',
      'Mobile: Tests unitaires',
      'CI/CD: Mise en production via Codebuild vers S3',
      'CI/CD: Script de déploiement par lot',
      'CI/CD: Tests unitaires via github',
      'CI/CD: Outils de traduction automatisés via DeepL',
      'CI/CD: Git hooks et amélioration du workflow',
      'CI/CD: Extensions d’aide à la review (TamperMonkey)',
    ],
    dateStart: new Date('2022-01'),
    dateEnd: new Date('2023-06'),
  },
  {
    id: 'prestashop',
    missionType: 'intern',
    company: 'Prestashop',
    description: 'Amélioration du module pré-installé Prestashop Metrics',
    dateStart: new Date('2020-12'),
    dateEnd: new Date('2021-06'),
  },
  {
    id: 'prochaine_escale_freelance',
    missionType: 'freelance',
    company: 'Prochaine Escale',
    description:
      "Amélioration de l'application React-Native à destination des clients et de l'intranet",
    bulletPoints: [
      "Application Mobile: Ajout de notification à l'approche d'un evenement",
      'Application: Système de notation des evenement participé',
      "Intranet: Ajout d'un système de recherche des evenements et hotels sous forme de boutique",
    ],
    dateStart: new Date('2018-04'),
    dateEnd: new Date('2020-07'),
  },
  {
    id: 'prochaine_escale_website',
    missionType: 'intern',
    company: 'Prochaine Escale',
    description:
      "Amélioration de l'intranet de Prochaine Escale à destination des experts",
    bulletPoints: [
      'HTML/CSS Frontend',
      'Dashboard interne',
      'Générateur de Devis',
      'Création d’une librairie de génération d’API',
      'Refonte de parties en TWIG vers des composants VueJS',
      'Création d’un système de gestion de tâches courantes avec synchronisation Google Calendar (Todolist avancée)',
      'Librairie des événements, hotels et devis précédemment utilisés filtrable grâce à un générateur de filtre',
      'Ajout de multiples Animations',
    ],
    dateStart: new Date('2018-11'),
    dateEnd: new Date('2020-04'),
  },
  {
    id: 'prochaine_escale_mobile',
    missionType: 'intern',
    company: 'Prochaine Escale',
    description: 'Développement de l’appli Android/IOS à destination des clients',
    bulletPoints: [
      'Application de présentation de séminaire',
      'Affichage des prochains événements géolocalisé',
      'Mode hors-ligne',
      'Code de séminaire récupérables par QR Code',
      'Génération de Qr Code pour les clients',
      'Espace dédiée aux organisateurs',
      'Système de notifications',
      'Mise en ligne sur les stores respectifs',
      'Gestion des mises à jours sans passer par les stores (mise à jours OTA via codePush)',
      'Gestion de notifications',
    ],
    dateStart: new Date('2018-11'),
    dateEnd: new Date('2020-04'),
  },
  {
    id: 'devfoundry_admin',
    missionType: 'intern',
    company: 'DevFoundry',
    description:
      'Mise en place de l’infrastructure de développement et de mise en production des serveurs de DevFoundry',
    bulletPoints: [
      'Déploiement d’un serveur de mail',
      'Déploiement d’environnement de développement et de production',
      'Déploiement des projets internes et externes sous docker',
      'Administration système globale',
      'Gestion des instance AWS',
      'Gestion automatique de backup sécurisée sur serveur distants',
      'Développement de la plateforme DevFoundry',
      'Backend Loopback',
      'Serveur frontend isomorphique React',
    ],
    dateStart: new Date('2016-11'),
    dateEnd: new Date('2018-09'),
  },
  {
    id: 'clashfoot',
    missionType: 'freelance',
    description: `Développement d’une application complète de visioconférence entre particulier sur le thème du foot.`,
    bulletPoints: [
      'Backend micro-service NodeJS/Loopback',
      'Application Android/iOS React-Native',
      'Administration Système et mise en production sur AWS',
      'Nombre de spectateur illimité grâce à AWS',
      'Génération d’instance AWS à la volée',
      'Planification des releases',
      'Serveur d’authentification inter-service JWT',
      'Service de découverte d’instance de streaming',
      'Serveur de relais de flux vidéo temps générée dynamiquement jusqu’à limite de bande passante utilisable',
    ],
    dateStart: new Date('2017-07'),
    dateEnd: new Date('2018-10'),
  },
  {
    id: 'devfoundry_rh2',
    missionType: 'intern',
    description: `Projet interne à la société Softium sur une plateforme RH`,
    bulletPoints: [
      'Choix technologique',
      'refonte du backend d’une architecture monolithique à une architecture en micro-service.        ',
    ],
    dateStart: new Date('2017-01'),
    dateEnd: new Date('2017-04'),
  },
  {
    id: 'cygenio',
    missionType: 'freelance',
    description: `Conception et développement d’un serveur de location d’engins maritimes`,
    dateStart: new Date('2016-10'),
    dateEnd: new Date('2016-10'),
  },
  {
    id: 'openjet',
    company: 'OpenJet',
    missionType: 'freelance',
    description: `Développement d’un serveur middleware faisant le lien entre l’utilisateur et les serveurs de bases de données. Serveur isomorphique permettant la partage d’url personnalisé pour la recherche et la location de jet privés`,
    bulletPoints: ['Serveur NodeJS isomorphique', 'Frontend en React.js'],
    dateStart: new Date('2016-05'),
    dateEnd: new Date('2016-11'),
  },
  {
    id: 'devfoundry_rh',
    company: 'Devfoundry',
    missionType: 'intern',
    description:
      'Création d’une stack technologique dans la création d’une plateforme de recrutement',
    bulletPoints: [
      'Création d’une API',
      'Configuration d’une stack gulp/Node.JS/browserify/Typescript 1.7 et Sails.JS',
      'Génération des composants React côté serveur avant remplacement par le navigateur (Isomorphisme)',
    ],
    dateStart: new Date('2015-09'),
    dateEnd: new Date('2016-12'),
  },
  {
    id: 'numen',
    company: 'Numen Digital',
    missionType: 'stage',
    description: `Stage de developpement chez Numen Digital`,
    bulletPoints: [
      'Modification et amélioration d’un interpréteur de langage propriétaire (Balise)',
    ],
    dateStart: new Date('2016-05'),
    dateEnd: new Date('2016-11'),
  },
] as const satisfies IExperience[];
