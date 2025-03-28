import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>GitHub User Search</h1>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} GitHub User Search</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;