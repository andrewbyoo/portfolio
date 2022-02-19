import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <div className='aboutRender'>
      <Container>
        <Row>
          <Col sm='12' lg='4' className='imageWrapper'><img src={require('../../assets/self_photo.jpg')} alt='Self portrait' className='selfPhoto' /></Col>
          <Col sm='12' lg='8'>
            <h1>About Me</h1>
            <p>
              Hi! I'm Andrew, a full-stack developer from Perkasie, Pennsylvania with a background in accounting and commercial loan banking. I will be earning a certificate in full stack development come March 2nd from the University of Pennsylvania with skills in CSS, JavaScript, and React.js. Known by colleagues to be a fast learner and have strong critical thinking and analytical skills. I am looking forward to apply my knowledge and learn new skills in the programming field.
            </p>
            <p>Technical skills: Terminal, Git, GitHub, Heroku, HTML5, CSS3, JavaScript, jQuery, Bootstrap, MiniCSS, Node.js, Npm, JSON, ECMAScript6, Unit Testing, Express, Handlebars, MySQL, Sequelize, REST APIs, MongoDB, Mongoose, Webpack, React</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
};
