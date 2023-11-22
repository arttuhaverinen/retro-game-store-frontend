import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MainContent from './components/MainContent';
import ProductSearch from './components/ProductSearch';
import SettingsPage from './components/SettingsPage';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsFound from './components/ProductsFound';
import FollowedProducts from './components/FollowedProducts';

function App() {
  return (
    <Router>
      <Container fluid className='p-0'>
      <Navigation className="bg-success"/>
      <Routes>
        <Route  path="/" element={<ProductSearch/>} />
        <Route  path="/results" element={<ProductsFound/>} />
        <Route  path="/settings" element={<SettingsPage/>} />
        <Route  path="/followedProducts" element={<FollowedProducts/>} />
      </Routes>
        <Footer className="bg-success"/>
      </Container>
    </Router>
  );
}

export default App;
