import './NavBar.css';

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <header>
      <ul className='nav nav-tabs'>
        <li className='navbar-brand'><h1 href='#about' onClick={() => handlePageChange('About')}>Andrew Yoo</h1></li>
        <li className='nav-item'><a href='#home' onClick={() => handlePageChange('Home')} className='nav-link'>Home</a></li>
        <li className='nav-item'><a href='#about' onClick={() => handlePageChange('About')} className='nav-link'>About</a></li>
        <li className='nav-item'><a href='#projects' onClick={() => handlePageChange('Projects')} className='nav-link'>Projects</a></li>
        <li className='nav-item'><a href='#contact' onClick={() => handlePageChange('Contact')} className='nav-link'>Contact</a></li>
        <li className='nav-item'><a href='https://docs.google.com/document/d/15Qfjv31LCEDYU3t8zkX1bWsLEtJhKDihFyDq4aH4RHI/edit?usp=sharing' target='_blank' rel='noreferrer noopener' className='nav-link'>Resume</a></li>
      </ul>
    </header>
  );
};
