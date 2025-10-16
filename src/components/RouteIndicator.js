import { useLocation } from 'react-router-dom';

const indicatorStyle = {
  position: 'absolute',
  inset: '0 auto auto 0',
  fontSize: '1.2rem',
  color: 'var(--clr-white-1)',
  backgroundColor: 'var(--clr-black-2)',
  borderRadius: '0 0.5rem 0 0',
  margin: 0,
  padding: '0.75rem 1.5rem',
  zIndex: 1000,
  cursor: 'pointer',
};

export default function RouteIndicator() {
  const location = useLocation();

  return (
    <div style={indicatorStyle}>
      <code>Path: {location.pathname}</code>
    </div>
  );
}
