import React from 'react';

export default function Cell({ alive, onClick }) {
  const style = {
    width: '2rem',
    height: '2rem',
    backgroundColor: alive ? 'var(--clr-active)' : 'var(--clr-inactive)',
    border: '1px solid var(--clr-border)',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'backgroundColor 0.3s ease',
  };

  return <div className="cell" style={style} onClick={onClick} />;
}
