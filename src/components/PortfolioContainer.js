import { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='renderContainer'>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='bg-image' style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/background-image.jpg')` }}>
        <div className={(currentPage === 'Projects' || currentPage === 'Contact') ? 'pageRender adjustedHeight' : 'pageRender'}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
}
