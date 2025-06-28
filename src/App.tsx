import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { Canvas } from './components/Canvas';
import { ThemeToggle } from './components/ui/theme-toggle';

function App() {
  return (
    <div className="min-h-screen bg-white text-custom-green dark:bg-black dark:text-white flex flex-col">
        <Canvas />
        <Navbar />
      <main className="flex-1 pt-16">
        <Home />
        </main>
        <Footer />
      <ThemeToggle />
      </div>
  );
}

export default App;