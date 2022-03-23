import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import uno from "../img/brave_X2ZOw4OK5E.png";
import dos from "../img/Code_BbIvz8lJIg.png";

export const sumaryData = {
  projects: [
    {
      id: 0,
      projectTitle: "Curriculum-Vitae",
      description:
        "Este es mi primer proyecto simple de frontend usando Create React App + Typescript + Tailwind",
      link: "eaaldark.github.io",
      img: uno,
    },
    {
      id: 1,
      projectTitle: "Experimental Test",
      description:
        "Estos son proyectos hechos al azar para experimentar cosas no tiene nada organizado.",
      link: ["experimental-test-Backend", "experimental-test-frontend"],
      img: dos,
    },
  ],
  experience: [
    {
      id: 0,
      location: "Puerto Rico",
      title: "Applivio",
      subTitle: "Agosto 2020 - Actualidad",
      info: "Soporte y Desarrollo uso de Servicios en AWS, Backend y Frontend en JS/TS, PostgreSQL, Linux",
      icon: faBriefcase,
    },
    {
      id: 1,
      location: "Colombia",
      title: "IP Total",
      subTitle: "Noviembre 2018 - Abril 2019",
      info: "Soporte en lenguaje de desarrollo Java, crear consultas de complejidad baja y media en OracleSQL, creacion de plantillas en excel para la plataforma",
      icon: faBriefcase,
    },
    {
      id: 2,
      location: "Colombia",
      title: "Analisis y Desarrollo de Sistemas de Informacion",
      subTitle: "Abril 2017 - Abril 2019",
      info: "Especificacion de Requerimientos, Diseño de Software, Calidad del Software. Tecnologias utilizadas: Java, Android Studio, PHP, Mysql, HTML, CSS, JS, XAMP, UML",
      icon: faGraduationCap,
    },
  ],
  skills: [
    { id: 0, percentaje: "40", color: "249 115 22", skillName: "HTML" },
    { id: 1, percentaje: "40", color: "14 165 233", skillName: "CSS" },
    { id: 2, percentaje: "35", color: "16 185 129", skillName: "Responsive" },
    { id: 3, percentaje: "30", color: "253 224 71", skillName: "Javascript" },
    { id: 4, percentaje: "30", color: "2 132 199", skillName: "Typescript" },
    { id: 5, percentaje: "30", color: "120 113 108", skillName: "Linux" },
    { id: 6, percentaje: "30", color: "161 161 170", skillName: "Terminal" },
    {
      id: 7,
      percentaje: "30",
      color: "245 158 11",
      skillName: "Micro-servicios",
    },
    { id: 8, percentaje: "20", color: "34 197 94", skillName: "SQL" },
    { id: 9, percentaje: "30", color: "101 163 13", skillName: "NodeJS" },
    { id: 10, percentaje: "30", color: "0 0 0", skillName: "Express" },
    { id: 11, percentaje: "10", color: "200 54 238", skillName: "JWT" },
    { id: 12, percentaje: "17", color: "8 145 178", skillName: "Docker" },
    { id: 13, percentaje: "35", color: "253 224 71", skillName: "Serverless Framework" },
    { id: 14, percentaje: "30", color: "34 211 238", skillName: "Create React App" },
    { id: 15, percentaje: "15", color: "244 63 94", skillName: "Angular Material" },
  ],
};
