import './Projects.css'

export default function Projects(){
  const projectList = [
    {
      id: 1,
      name: "Movie Explorer",
      link: "https://github.com/Arjunsharmahehe/Movie-Explorer"
    },
    {
      id: 2,
      name: "Leetcode Analysis",
      link: "https://github.com/Arjunsharmahehe/Leetcode-Stats"
    },
    {
      id: 3,
      name: "Twitter UI Clone",
      link: "https://github.com/Arjunsharmahehe/Twitter-clone-1.0"
    }
  ]
  
  return(
    <div className='projectsContainer'>
      {projectList?.map(project => <Project key={project.id} name={project.name} link={project.link}/>)}
    </div>
  )
}

function Project({name="Movie Explorer", link="https://www.google.com"}){
  return(
    <div className='project'>
      <a href={`${link}`}>{name}</a>
    </div>
  )
}