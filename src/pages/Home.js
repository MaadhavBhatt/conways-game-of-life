import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <section className="hero container">
      <h1 className="text-center">Conway's Game of Life</h1>
      <p className="text-center">
        A cellular automaton devised by the British mathematician John Horton
        Conway in 1970.
      </p>

      <div className="buttons">
        <button type="button">
          <Link className="block link" to="/simulator">
            Simulator
          </Link>
        </button>
        <button type="button">
          <Link className="block link" to="/about">
            About
          </Link>
        </button>
      </div>
    </section>
  );
}
