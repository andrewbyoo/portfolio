import ProjectTemplate from '../ProjectTemplate';

const projectList = [
  {
    title: 'Project Title 1',
    screenshot: 'Project Screenshot 1',
    description: 'Project Description 1',
    deployedLink: 'Deployed Link 1',
    githubLink: 'Github Link 1',

  }
]

const projectsRender = projectList.map((project) => <ProjectTemplate projectInfo={project}/>)

export default function Projects() {
  return (
    <div>
      <h2>Personal Projects</h2>
      {projectsRender}
    </div>
  )
};
