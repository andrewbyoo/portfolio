import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mwkyojnz');
  if (state.succeeded) {
    return <div className='contactRender'>
        <p>Thank you for messaging. I will get back to you soon!</p>
      </div>;
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
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="example@example.com" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </li>
            <br />
            <li>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" cols="30" rows="10"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </li>
            <br />

            <li>
              <label htmlFor="hidden-label"></label>
              <input className="submit" type="submit" value="Submit" disabled={state.submitting} />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
};

export default function Contact() {
  return (
    <div>
      <ContactForm />
    </div>
  )
}
