import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'number') {
      setNumber(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setComments(inputValue);
    }
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();

    alert('Contact form is a work in progress. Please email me directly by clicking on my email link and I will get to you as soon as possible.')

    setName('');
    setNumber('');
    setEmail('');
    setComments('');
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
        <form action="#">
          <ul>
            <li className="contact-column">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="First Last" value={name} onChange={handleInputChange} />
            </li>
            <br />
            <li className="contact-column">
              <label htmlFor="number">Phone Number</label>
              <input type="tel" name="number" placeholder="555.555.5555" value={number} onChange={handleInputChange} />
            </li>
            <br />
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
