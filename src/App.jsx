import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Description from './components/Description/Description'
import Navbar from './components/Navbar/Navbar'
import Pfp from './components/ProfilePicture/Pfp'
import Projects from './components/Projects/Projects'
import Socials from './components/Socials/Socials'

export default function App() {
  return (
   <div className='App'>
     <Navbar/>
      <AboutAndProjects/>
   </div>
  )
}

function AboutAndPfp(){
  return(
    <div className='aboutAndPfpContainer'>
      <About/>
      <Pfp/>
    </div>
  )
}

function DescriptionAndContact(){
  return(
    <div className='descriptionAndContact'>
      <Description/>
      <Contact/>
    </div>
  )
}

function AboutAndContact(){
  return(
    <div className='aboutAndContact'>
      <AboutAndPfp/>
      <DescriptionAndContact/>
    </div>
  )
}

function ProjectsAndSocials(){
  return(
    <div className='projectsAndSocials'>
      <Projects/>
      <Socials/>
    </div>
  )
}

function AboutAndProjects(){
  return(
    <div className='aboutAndProjects'>
      <AboutAndContact/>
      <ProjectsAndSocials/>
    </div>
  )
}