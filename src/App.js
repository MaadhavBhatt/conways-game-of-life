import './styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Simulator from './pages/Simulator/Simulator';
import About from './pages/About';
import ErrorPage from './pages/Error';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/simulator/*', element: <Simulator /> },
      { path: '/about', element: <About /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
