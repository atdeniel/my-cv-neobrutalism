import React from 'react';

const FullPageLoader = () => (
  <div style={{
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    fontSize: '2rem',
    flexDirection: 'column'
  }}>
    <div>↑ ↑ ↓ ↓ ← → ← → B A</div>
  </div>
);

export default FullPageLoader;