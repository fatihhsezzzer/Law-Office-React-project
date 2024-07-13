import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./Components/Pages/HomePage";
import ContactPage from "./Components/Pages/ContactPage";
import AboutPage from "./Components/Pages/AboutPage";
import AppointmentPage from "./Components/Pages/AppointmentPage";
import AttorneyDetailsPage from "./Components/Pages/AttorneyDetailsPage";
import FAQPage from "./Components/Pages/FAQPage";
import TestimonialPage from "./Components/Pages/TestimonialPage";
import PracticeDetailPage from "./Components/Pages/PracticeDetailPage";
import BlogsPage from "./Components/Pages/BlogsPage";
import BlogDetails from "./Components/Pages/BlogDetailsPage";

import NotFound from "./Components/Pages/NotFound";

import Loader from "./Components/SingleComponents/Loader";
import Footer from "./Components/SingleComponents/Footer";
import Navbar from "./Components/SingleComponents/Navbar";
import TrackUser from "./Components/SingleComponents/TrackUser";

import { LanguageProvider } from "./Components/Contexts/LanguageContext";

function Layout() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/attorney-detail" element={<AttorneyDetailsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/practice-detail" element={<PracticeDetailPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="App">
          <TrackUser></TrackUser>
          <Layout />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
