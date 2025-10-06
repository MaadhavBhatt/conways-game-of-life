import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1 className="hero-heading">Conway's Game of Life</h1>
        <p>
          A cellular automaton devised by the British mathematician John Horton
          Conway in 1970.
        </p>
      </section>

      <section>
        <Link to="/simulator">Simulator</Link>
        <Link to="/about">About</Link>
      </section>
    </div>
  );
}
