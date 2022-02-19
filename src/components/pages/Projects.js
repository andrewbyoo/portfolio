import { Container, Col } from 'react-bootstrap';
import ProjectTemplate from '../ProjectTemplate';
import '../projects.css';

const projectList = [
  {
    id: 1,
    title: 'Text Editor',
    screenshot: require('../../assets/JATE-static-visual.png'),
    altDesc: 'Text Editor Screenshot',
    description: 'Installable PWA text editor built with Express and Webpack.',
    deployedLink: 'https://andrewbyoo-text-editor.herokuapp.com/',
    githubLink: 'https://github.com/andrewbyoo/text-editor',
  },
  {
    id: 2,
    title: 'Tech Blog',
    screenshot: require('../../assets/tech-blog-static-visual.png'),
    altDesc: 'Tech Blog Screenshot',
    description: 'Blogging site built with Express, MySQL2, Sequelize, and handlebars.',
    deployedLink: 'https://andrewbyoo-tech-blog.herokuapp.com/',
    githubLink: 'https://github.com/andrewbyoo/tech-blog',
  },
  {
    id: 3,
    title: 'e-Commerce Backend',
    screenshot: require('../../assets/e-commerce-backend.png'),
    altDesc: 'e-Commerce Backend Screenshot',
    description: 'Backend of an e-commerce store built with Express, MySQL2, and Sequelize.',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/e-commerce-backend',
  },
  {
    id: 4,
    title: 'Employee Tracker',
    screenshot: require('../../assets/employee-tracker.png'),
    altDesc: 'Employee Tracker Screenshot',
    description: 'Terminal app that track of company employees built with MySQL and Node.js.',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/employee-tracker',
  },
  {
    id: 5,
    title: 'Team Profile Generator',
    screenshot: require('../../assets/team-profile-generator-visual.png'),
    altDesc: 'Team Profile Generator Screenshot',
    description: 'Terminal app that generates a webpage with employee cards built with Node.js and inquirer.',
    deployedLink: null,
    githubLink: 'https://github.com/andrewbyoo/team-profile-generator',
  },
  {
    id: 6,
    title: 'Notes App',
    screenshot: require('../../assets/notes-app-screenshot.png'),
    altDesc: 'Notes App Screenshot',
    description: 'Notes application that saves user input to a database file built with Node.js',
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
