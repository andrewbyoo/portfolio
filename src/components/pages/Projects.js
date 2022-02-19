import { Container, Col } from 'react-bootstrap';
import ProjectTemplate from '../ProjectTemplate';

const projectList = [
  {
    id: 1,
    title: 'Project Title 1',
    screenshot: 'Project Screenshot 1',
    description: 'Project Description 1',
    deployedLink: 'Deployed Link 1',
    githubLink: 'Github Link 1',
  },
  {
    id: 2,
    title: 'Tech Blog',
    screenshot: 'Project Screenshot 2',
    description: 'Project Description 2',
    deployedLink: 'https://andrewbyoo-tech-blog.herokuapp.com/',
    githubLink: 'https://github.com/andrewbyoo/tech-blog',
  },
  {
    id: 3,
    title: 'e-Commerce Backend',
    screenshot: 'Project Screenshot 3',
    description: 'Project Description 3',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/e-commerce-backend',
  },
  {
    id: 4,
    title: 'Employee Tracker',
    screenshot: 'Project Screenshot 4',
    description: 'Project Description 4',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/employee-tracker',
  },
  {
    id: 5,
    title: 'Team Profile Generator',
    screenshot: 'Project Screenshot 5',
    description: 'Project Description 5',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/team-profile-generator',
  },
  {
    id: 6,
    title: 'Notes App',
    screenshot: 'Project Screenshot 6',
    description: 'Project Description 6',
    deployedLink: 'https://andrewbyoo-notes-app.herokuapp.com/',
    githubLink: 'https://github.com/andrewbyoo/notes-app',
  },
]

const projectsRender = projectList.map((project) => <ProjectTemplate title={project.title} screenshot={project.screenshot} description={project.screenshot} deployedLink={project.deployedLink} githubLink={project.githubLink} key={project.id} />)

export default function Projects() {
  return (
    <Container>
      <Col className='d-flex flex-wrap justify-content-around projectContainer'>
        {projectsRender}
      </Col>
    </Container>
  )
};
