interface Room {
  id: string;
  name: string;
  description: string;
  background: string;
  link?: Array<Room | Skill>;
}

interface Skill {
  name: string;
  talent: SkillLevel;
  description?: string;
}

type SkillLevel = 1 | 2 | 3 | 4 | 5;

const GameMap: Room = {
  id: "home",
  name: "Accueil",
  description: "Bienvenu sur mon CV",
  background: "",
  link: [
    {
      id: "backend",
      name: "Back-End",
      description: "Salle FrontEnd",
      background: "",
      link: [
        {
          id: "express",
          name: "Express.JS",
          description: "Salle node",
          background: "",
        },
        {
          id: "nest",
          name: "Nest.JS",
          description: "Salle nest",
          background: "",
        },
        {
          id: "loopback",
          name: "Nest.JS",
          description: "Salle nest",
          background: "",
        },
        {
          id: "db",
          name: "Base de donnée",
          description: "Salle nest",
          background: "",
          link: [
            { name: "mysql", talent: 2 },
            { name: "mongodb", talent: 1 },
            { name: "postgres", talent: 2 },
          ],
        },
      ],
    },
    {
      id: "frontend",
      name: "Front-End",
      description: "Salle FrontEnd",
      background: "",
      link: [
        { name: "React", talent: 5 },
        { name: "ReactNative", talent: 5 },
        { name: "VueJS", talent: 5 },
        { name: "TamperMonkey", talent: 4 },
      ],
    },
    {
      id: "devops",
      name: "DevOps",
      description: "Salle pour le devops, kube, etc",
      background: "",
    },
  ],
};

export default GameMap;
