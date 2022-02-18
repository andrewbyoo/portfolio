import { Container, Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <header>
      <Navbar collapseOnSelect sticky='top' expand='md'>
        <Container className='nav nav-tabs'>
          <Navbar.Brand className='navbar-brand'>Andrew Yoo</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='#home' onClick={() => handlePageChange('Home')} className='nav-link'>Home</Nav.Link>
              <Nav.Link href='#about' onClick={() => handlePageChange('About')} className='nav-link'>About</Nav.Link>
              <Nav.Link href='#projects' onClick={() => handlePageChange('Projects')} className='nav-link'>Projects</Nav.Link>
              <Nav.Link href='#contact' onClick={() => handlePageChange('Contact')} className='nav-link'>Contact</Nav.Link>
              <Nav.Link href='https://docs.google.com/document/d/15Qfjv31LCEDYU3t8zkX1bWsLEtJhKDihFyDq4aH4RHI/edit?usp=sharing' target='_blank' rel='noreferrer noopener' className='nav-link'>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
