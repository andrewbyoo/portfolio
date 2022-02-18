import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col className='text-center'><h1>Hi! I'm Andrew.</h1></Col>
      </Row>
      <Row>
        <Col className='text-center'><p>Full-Stack Developer, Gamer, Husband, and Father.</p></Col>
      </Row>
    </Container>
  )
};
