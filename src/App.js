// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Offer />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
