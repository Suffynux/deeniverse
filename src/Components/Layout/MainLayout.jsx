// Components/Layout/MainLayout.jsx
// main layout for all the differnet pages to show the navbar and the footer
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // reset scroll for window
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // also try scrolling any main container if present
    const main = document.querySelector('main');
    if (main && main.scrollTop) main.scrollTop = 0;
  }, [pathname]);
  return null;
}

export default function MainLayout({ children }) {
  return (
    <>
  <Navbar />
  <ScrollToTop />
  {children} {/* This will be your page content */}
  <Footer />
    </>
  );
}