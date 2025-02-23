import React from 'react';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '300px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Welcome to the Main Content</h2>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
      I love to visit New York, Paris, and Tokyo.
      </p>
      <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
        <li>React inline styles</li>
        <li>Component Styling</li>
        <li>Enhanced User Interface</li>
      </ul>
    </main>
  );
}

export default MainContent;