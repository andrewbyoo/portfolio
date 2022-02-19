export default function ProjectTemplate(props) {
  return (
    <div>
      <figure className='project-container'>
        <article className='projects' id='project1'>
          <h4>Tech Blog</h4>
          <a href='https://andrewbyoo-tech-blog.herokuapp.com/' target='_blank' rel='noreferrer'><span>Deployed</span></a
          ><a href='https://github.com/andrewbyoo/tech-blog' target='_blank' rel='noreferrer'><span>GitHub</span></a>
        </article>
        <article className='projects' id='project2'>
          <h4>e-Commerce Backend</h4>
          <a href='x-github-client://openRepo/https://github.com/andrewbyoo/e-commerce-backend' target='_blank' rel='noreferrer'><span>GitHub Desktop</span></a
          ><a href='https://github.com/andrewbyoo/e-commerce-backend' target='_blank' rel='noreferrer'><span>GitHub</span></a>
        </article>
        <article className='projects' id='project3'>
          <h4>Employee Tracker</h4>
          <a href='x-github-client://openRepo/https://github.com/andrewbyoo/employee-tracker' target='_blank' rel='noreferrer'><span>GitHub Desktop</span></a
          ><a href='https://github.com/andrewbyoo/employee-tracker' target='_blank' rel='noreferrer'><span>GitHub</span></a>
        </article>
        <article className='projects' id='project4'>
          <h4>Team Profile Generator</h4>
          <a href='x-github-client://openRepo/https://github.com/andrewbyoo/team-profile-generator' target='_blank' rel='noreferrer'><span>GitHub Desktop</span></a
          ><a href='https://github.com/andrewbyoo/team-profile-generator' target='_blank' rel='noreferrer'><span>GitHub</span></a>
        </article>
        <article className='projects' id='project5'>
          <h4>Notes App</h4>
          <a href='https://andrewbyoo-notes-app.herokuapp.com/' target='_blank' rel='noreferrer'><span>Deployed</span></a
          ><a href='https://github.com/andrewbyoo/notes-app' target='_blank' rel='noreferrer'><span>GitHub</span></a>
        </article>
      </figure>
    </div>
  )
};
