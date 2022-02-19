import ProjectTemplate from '../ProjectTemplate';

const projectList = [
  {
    title: 'Project Title 1',
    screenshot: 'Project Screenshot 1',
    description: 'Project Description 1',
    deployedLink: 'Deployed Link 1',
    githubLink: 'Github Link 1',
  },
  {
    title: 'Tech Blog',
    screenshot: 'Project Screenshot 2',
    description: 'Project Description 2',
    deployedLink: 'https://andrewbyoo-tech-blog.herokuapp.com/',
    githubLink: 'https://github.com/andrewbyoo/tech-blog',
  },
  {
    title: 'e-Commerce Backend',
    screenshot: 'Project Screenshot 3',
    description: 'Project Description 3',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/e-commerce-backend',
  },
  {
    title: 'Employee Tracker',
    screenshot: 'Project Screenshot 4',
    description: 'Project Description 4',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/employee-tracker',
  },
  {
    title: 'Team Profile Generator',
    screenshot: 'Project Screenshot 5',
    description: 'Project Description 5',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/team-profile-generator',
  },
  {
    title: 'Notes App',
    screenshot: 'Project Screenshot 6',
    description: 'Project Description 6',
    deployedLink: 'https://andrewbyoo-notes-app.herokuapp.com/',
    githubLink: 'https://github.com/andrewbyoo/notes-app',
  },
]

const projectsRender = projectList.map((project) => <ProjectTemplate title={project.title} screenshot={project.screenshot} description={project.screenshot} deployedLink={project.deployedLink} githubLink={project.githubLink}/>)

export default function Projects() {
  return (
    <div>
      <h2>Personal Projects</h2>
      {projectsRender}
    </div>
  )
};
