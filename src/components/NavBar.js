import React from 'react';

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className='nav nav-tabs'>
        <li className='nav-item'><h1 href='#about' onClick={() => handlePageChange('About')}>Andrew Yoo</h1></li>
        <li className='nav-item'><a href='#home'>Home</a></li>
        <li className='nav-item'><a href='#about'>About</a></li>
        <li className='nav-item'><a href='#projects'>Projects</a></li>
      </ul>
    </div>
  );
};
