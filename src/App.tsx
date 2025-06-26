import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { Canvas } from './components/Canvas';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Canvas />
      <Navbar />
      <main className="flex-1 pt-16">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;