import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Layout Components
import TopBar from "./Component/TopBar";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

// Home Page
import Home from "./Component/Home";

// About Us Sub-pages
import Introduction from "./Component/Introduction";
import ChairmanMessage from "./Component/ChairmanMessage"; // <-- Updated here from Component to pages
import PrincipalMessage from "./Component/PrincipalMessage";
import Administration from "./Component/Administration";
import Affiliation from "./Component/Affiliation";
import Rules from "./Component/Rules";
import MandatoryDocuments from "./Component/MandatoryDocuments";
import AcademicCalendar from "./Component/AcademicCalendar";
import Downloads from "./Component/Downloads";

// Main Navbar Pages
import Faculty from "./Component/Faculty";
import Gallery from "./Component/Gallery";
import NewsEvents from "./Component/NewsEvents";
import Contact from "./Component/Contact";
import Login from "./Component/Login";

// Helper component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />

      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />

        {/* About Us Dropdown Routes */}
        <Route path="/about/introduction" element={<Introduction />} />
        <Route path="/about/chairman-message" element={<ChairmanMessage />} />
        <Route path="/about/principal-message" element={<PrincipalMessage />} />
        <Route path="/about/administration" element={<Administration />} />
        <Route path="/about/affiliation" element={<Affiliation />} />
        <Route path="/about/rules" element={<Rules />} />
        <Route path="/about/mandatory-documents" element={<MandatoryDocuments />} />
        <Route path="/about/calendar" element={<AcademicCalendar />} />
        <Route path="/downloads" element={<Downloads />} />

        {/* Primary Navbar Routes */}
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<NewsEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;