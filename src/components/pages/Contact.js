import { useState } from 'react';

function Form(){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
}

export default function Contact() {
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
        <form action="#">
          <ul>
            <li className="contact-column">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="First Last" />
            </li>
            <br />
            <li className="contact-column">
              <label htmlFor="number">Phone Number</label>
              <input type="tel" name="number" placeholder="555.555.5555" />
            </li>
            <br />
            <li className="contact-column">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="example@example.com" />
            </li>
            <br />
            <li className="comments">
              <label htmlFor="comments">Comments</label>
              <textarea name="comments" cols="30" rows="10"></textarea>
            </li>
            <br />

            <li>
              <label htmlFor="hidden-label"></label>
              <input className="submit" type="submit" value="Submit" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
};
