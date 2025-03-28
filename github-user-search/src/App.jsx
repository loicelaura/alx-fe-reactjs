import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white p-4">
          <h1 className="text-2xl font-semibold">GitHub Advanced Search</h1>
        </header>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
        </main>

        <footer className="bg-gray-200 p-4 text-center">
          <p>&copy; {new Date().getFullYear()} GitHub Advanced Search</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;