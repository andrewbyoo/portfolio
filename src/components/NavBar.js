import React from 'react';

export default function NavBar() {
  return (
    <div bg="dark" variant="dark">
      <article>
        <h1 href="#home">Andrew Yoo</h1>
        <section className="me-auto">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </section>
      </article>
    </div>
  );
};
