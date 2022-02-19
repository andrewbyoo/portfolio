export default function ProjectTemplate({ title, screenshot, description, deployedLink, githubLink }) {
  return (
    <div>
      <figure className='project-container'>
        <article className='projects' id='project1'>
          <h4>Tech Blog</h4>
          <a href='https://andrewbyoo-tech-blog.herokuapp.com/' target='_blank' rel='noreferrer'><span>Deployed</span></a
          ><a href='https://github.com/andrewbyoo/tech-blog' target='_blank' rel='noreferrer'><span>GitHub</span></a>
        </article>
      </figure>
    </div>
  )
};
