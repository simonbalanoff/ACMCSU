import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import OfficersPage from './pages/OfficersPage/OfficersPage';
import ContactPage from './pages/ContactPage/ContactPage';
import EventsPage from './pages/EventsPage/EventsPage';
import EventDetailPage from './pages/EventDetailPage/EventDetailPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/officers" element={<OfficersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
