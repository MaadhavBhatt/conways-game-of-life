import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div>
      <section className="container flex-col center gap-2">
        <h1 className="text-center">Conway's Game of Life</h1>
        <p className="text-center">
          A cellular automaton devised by the British mathematician John Horton
          Conway in 1970.
        </p>

        <div className="flex gap-2 center">
          <Link className="block link" to="/simulator">
            Simulator
          </Link>
          <Link className="block link" to="/about">
            About
          </Link>
        </div>
      </section>
    </div>
  );
}
