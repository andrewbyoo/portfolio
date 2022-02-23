import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('contactForm');
  if (state.succeeded) {
    return <div>Thank you for messaging. I will get back to you soon!</div>;
  }

  return (
    <div>
      <div className='contactRender'>
        <ul className='contactLinks'>
          <li><a href="tel:2158476562">215.847.6562</a></li>
          <li><a href="mailto: andrewbyoo@gmail.com">andrewbyoo@gmail.com</a></li>
          <li id='github'><a href='https://github.com/andrewbyoo' target='_blank' rel='noreferrer'>GitHub</a></li>
          <li id='linkedin'><a href='https://www.linkedin.com/in/andrewbyoo/' target='_blank' rel='noreferrer'>LinkedIn</a></li>
        </ul>
      </div>
      <div className='contactRender'>
        <form onSubmit={handleSubmit} id='contactForm'>
          <ul>
            <li className="contact-column">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="example@example.com" value={email} onChange={handleInputChange} />
            </li>
            <br />
            <li className="comments">
              <label htmlFor="comments">Comments</label>
              <textarea name="comments" cols="30" rows="10" value={comments} onChange={handleInputChange}></textarea>
            </li>
            <br />

            <li>
              <label htmlFor="hidden-label"></label>
              <input className="submit" type="submit" value="Submit" onClick={handleSubmitForm} />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
};
