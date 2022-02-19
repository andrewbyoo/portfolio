import { Container, Col } from 'react-bootstrap';
import ProjectTemplate from '../ProjectTemplate';
import '../projects.css';

const projectList = [
  {
    id: 1,
    title: 'Project Title 1',
    // screenshot: require('imagepath'),
    altDesc: 'Project 1 screenshot alt description',
    description: 'Project Description 1',
    deployedLink: null,
    githubLink: 'Github Link 1',
  },
  {
    id: 2,
    title: 'Tech Blog',
    screenshot: require('../../assets/tech-blog-static-visual.png'),
    altDesc: 'Tech Blog Screenshot',
    description: 'Project Description 2',
    deployedLink: 'https://andrewbyoo-tech-blog.herokuapp.com/',
    githubLink: 'https://github.com/andrewbyoo/tech-blog',
  },
  {
    id: 3,
    title: 'e-Commerce Backend',
    screenshot: require('../../assets/e-commerce-backend.png'),
    altDesc: 'e-Commerce Backend Screenshot',
    description: 'Project Description 3',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/e-commerce-backend',
  },
  {
    id: 4,
    title: 'Employee Tracker',
    screenshot: require('../../assets/employee-tracker.png'),
    altDesc: 'Employee Tracker Screenshot',
    description: 'Project Description 4',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/employee-tracker',
  },
  {
    id: 5,
    title: 'Team Profile Generator',
    screenshot: require('../../assets/team-profile-generator-visual.png'),
    altDesc: 'Team Profile Generator Screenshot',
    description: 'Project Description 5',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/team-profile-generator',
  },
  {
    id: 6,
    title: 'Notes App',
    screenshot: require('../../assets/notes-app-screenshot.png'),
    altDesc: 'Notes App Screenshot',
    description: 'Project Description 6',
    deployedLink: 'https://andrewbyoo-notes-app.herokuapp.com/',
    githubLink: 'https://github.com/andrewbyoo/notes-app',
  },
]

const projectsRender = projectList.map((project) => <ProjectTemplate title={project.title} screenshot={project.screenshot} description={project.description} deployedLink={project.deployedLink} githubLink={project.githubLink} key={project.id} />)

export default function Projects() {
  return (
    <Container>
      <Col className='d-flex flex-wrap justify-content-around projectContainer'>
        {projectsRender}
      </Col>
    </Container>
  )
};
