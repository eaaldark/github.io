import { Home, About, Contact, Skill, Sumary,Project } from "./LazyComponents";

const routes = [
  {
    id: 1,
    name: "home",
    path: "/",
    component: Home,
  },
  {
    id: 2,
    name: "about",
    path: "/about",
    component: About,
  },
  {
    id: 3,
    name: "contact",
    path: "/contact",
    component: Contact,
  },
  {
    id: 4,
    name: "skill",
    path: "/skill",
    component: Skill,
  },
  {
    id: 6,
    name: "project",
    path: "/project",
    component: Project,
  },
  {
    id: 5,
    name: "sumary",
    path: "/sumary",
    component: Sumary,
  },
];

export default routes;
