import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="container">
      <div class="text">
        <h2>About this site</h2>
        <p>This site is a React implementation of Conway's Game of Life.</p>
        <Link to="/">Go to Home</Link>
      </div>
    </section>
  );
}
