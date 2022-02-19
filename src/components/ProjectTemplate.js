import { Card, Button } from 'react-bootstrap';

export default function ProjectTemplate({ title, screenshot, description, deployedLink, githubLink }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button href={deployedLink} target='_blank' rel='noreferrer noopener' className='deployedButton'>Deployed</Button>
          <Button href={githubLink} target='_blank' rel='noreferrer noopener' className='githubButton'>Github</Button>
        </Card.Body>
      </Card>
    </div>
  )
};
