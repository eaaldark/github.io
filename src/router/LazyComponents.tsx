import { lazy, Suspense } from "react"

const HomeDomComponent = lazy(() => import("../pages/Home"))
const AboutDomComponent = lazy(() => import("../pages/About"))
const ContactDomComponent = lazy(() => import("../pages/Contact"))
const SkillDomComponent = lazy(() => import("../pages/Skill"))
const SumaryDomComponent = lazy(() => import("../pages/Sumary"))
const ProjectDomComponent = lazy(() => import("../pages/Project"))

export const Home = () => {
  return (
    <Suspense fallback={<div className='text-red-700'>Cargando Home...</div>}>
      <HomeDomComponent />
    </Suspense>
  )
}

export const About = () => {
  return (
    <Suspense fallback={<div className='text-red-700'>Cargando Info...</div>}>
      <AboutDomComponent />
    </Suspense>
  )
}

export const Contact = () => {
  return (
    <Suspense
      fallback={<div className='text-red-700'>Cargando Contacto...</div>}>
      <ContactDomComponent />
    </Suspense>
  )
}

export const Skill = () => {
  return (
    <Suspense
      fallback={<div className='text-red-700'>Cargando Habilidades...</div>}>
      <SkillDomComponent />
    </Suspense>
  )
}

export const Sumary = () => {
  return (
    <Suspense
      fallback={<div className='text-red-700'>Cargando Experiencia...</div>}>
      <SumaryDomComponent />
    </Suspense>
  )
}

export const Project = () => {
  return (
    <Suspense
      fallback={<div className='text-red-700'>Cargando Proyectos...</div>}>
      <ProjectDomComponent />
    </Suspense>
  )
}
