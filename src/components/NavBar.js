import React from 'react';

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <div bg="dark" variant="dark">
      <ul className="nav nav-tabs">
        <li><h1 href="#home">Andrew Yoo</h1></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </div>
  );
};
