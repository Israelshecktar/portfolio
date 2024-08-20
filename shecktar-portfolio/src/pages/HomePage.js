import React from 'react';
import Header from '../components/Header';
import Home2 from '../components/Home2';
import Particle from '../components/Particle';
import Navigation from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component

const HomePage = () => (
  <>
    <Navigation /> {/* Add Navbar component here */}
    <Particle />
    <Header />
    <Home2 />
    <Footer /> {/* Add Footer component here */}
  </>
);

export default HomePage;
