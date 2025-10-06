import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="container">
      <h1>404 Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
