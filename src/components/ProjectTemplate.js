import { Card, Button } from 'react-bootstrap';

export default function ProjectTemplate({ title, screenshot, description, deployedLink, githubLink }) {
  return (
    <div className='individualProject'>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button href={deployedLink} target='_blank' rel='noreferrer noopener' className='projectButton'>Deployed</Button>
          <Button href={githubLink} target='_blank' rel='noreferrer noopener' className='projectButton'>Github</Button>
        </Card.Body>
      </Card>
    </div>
  )
};
