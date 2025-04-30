import "./App.css";
import Navbar from "./NavFoot/Navbar";
import Home from "./Component/Homesec/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import Blog from "./Component/Blog/Blog";
import Contact from "./Component/Contact/Contact";
import Footer from "./NavFoot/Footer";
import WebDevelopment from "./Component/Services/WebDevelopment"
import AppDevelopment from "./Component/Services/AppDevelopment"
import SEOSerices from "./Component/Services/SEOSerices"
import SocialMediaMarketing from "./Component/Services/SocialMediaMarketing"
import GraphicsDesign from "./Component/Services/GraphicsDesign"
import VideoEditing from "./Component/Services/VideoEditing"
import PrivacyPolicy from "./Component/Services/PrivacyPolicy"
import WebDesign from "./Component/Webdesign/WebDesign";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Web-Design" element={<WebDesign/>} />
          <Route path="/Web-Development" element={<WebDevelopment />} />
          <Route path="/App-Development" element={<AppDevelopment />} />
          <Route path="/SEO-Services" element={<SEOSerices />} />
          <Route path="/Social-Media-Marketing" element={<SocialMediaMarketing />} />
          <Route path="/Graphics-Design" element={<GraphicsDesign />} />
          <Route path="/Video-Editing" element={<VideoEditing />} />
          <Route path="Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
