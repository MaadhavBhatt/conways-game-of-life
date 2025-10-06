import RouteIndicator from './RouteIndicator';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <RouteIndicator />
      <Outlet />
    </>
  );
}
