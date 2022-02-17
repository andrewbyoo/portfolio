import './NavBar.css';

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className='nav nav-tabs'>
        <li className='navbar-brand'><h1 href='#about' onClick={() => handlePageChange('About')}>Andrew Yoo</h1></li>
        <li className='nav-item'><a href='#home' onClick={() => handlePageChange('Home')}>Home</a></li>
        <li className='nav-item'><a href='#about' onClick={() => handlePageChange('About')}>About</a></li>
        <li className='nav-item'><a href='#projects' onClick={() => handlePageChange('Projects')}>Projects</a></li>
        <li className='nav-item'><a href='#contact' onClick={() => handlePageChange('Contact')}>Contact</a></li>
        <li className='nav-item'><a href='https://docs.google.com/document/d/15Qfjv31LCEDYU3t8zkX1bWsLEtJhKDihFyDq4aH4RHI/edit?usp=sharing' target='_blank' rel='noreferrer noopener'>Resume</a></li>
      </ul>
    </div>
  );
};
