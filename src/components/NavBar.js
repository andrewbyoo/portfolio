import React from 'react';

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className='nav nav-tabs'>
        <li className='nav-item'><h1 href='#about' onClick={() => handlePageChange('About')}>Andrew Yoo</h1></li>
        <li className='nav-item'><a href='#home' onClick={() => handlePageChange('Home')}>Home</a></li>
        <li className='nav-item'><a href='#about' onClick={() => handlePageChange('About')}>About</a></li>
        <li className='nav-item'><a href='#projects' onClick={() => handlePageChange('Projects')}>Projects</a></li>
      </ul>
    </div>
  );
};
