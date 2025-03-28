import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* Basic layout (e.g., header, navigation) */}
        <header>
          <h1>GitHub Explorer</h1>
        </header>

        <main>
          <Routes>
            {/* Routes will be added here */}
            <Route path="/" element={<p>Home Page (Add Components Here)</p>} />
          </Routes>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} GitHub Explorer</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
