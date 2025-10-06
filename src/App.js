import './styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Simulator from './pages/Simulator/Simulator';
import About from './pages/About';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/simulator/*',
    element: <Simulator />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
