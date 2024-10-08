import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import About from "./pages/About/About/About";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Pricing from "./pages/Pricing/Pricing/Pricing";
import Team from "./pages/Team/Team/Team";
import TeamDetails from "./pages/TeamDetails/TeamDetails/TeamDetails";
import Faq from "./pages/Faq/Faq/Faq";
import Services from "./pages/Services/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails/ServicesDetails";
import Projects from "./pages/Projects/Projects/Projetcs";
import ProjectsDetails from "./pages/ProjectsDetails/ProjectsDetails/ProjectsDetails";
import BlogsSidebar from "./pages/BlogsSidebar/BlogsSidebar/BlogsSidebar";
import BlogDetails from "./pages/BlogDetails/BlogDetails/BlogDetails";
import Contact from "./pages/Contact/Contact/Contact";
import { WOW } from "wowjs";
import ScrollToTop from "./components/ScrollToTop";
import HomeTwo from "./pages/HomeTwo/HomeTwo/HomeTwo";
import HomeThree from "./pages/HomeThree/HomeThree/HomeThree";
import { Toaster } from "react-hot-toast";
import IPaidABribe from "./pages/IPaidABribe/IPaidABribe";
import IAmABribeFighter from "./pages/IAmABribeFighter/IAmABribeFighter";
import IMetAnHonestOfficer from "./pages/IMetAnHonestOfficer/IMetAnHonestOfficer";

const App = () => {
  // wow animation active
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homeTwo" element={<HomeTwo />} />
          <Route path="/homeThree" element={<HomeThree />} />
          <Route path="/about" element={<About />} />
          <Route path="/i-paid-a-bribe" element={<IPaidABribe />} />
          <Route path="/i-am-a-bribe-fighter" element={<IAmABribeFighter />} />
          <Route
            path="/i-met-an-hones-officer"
            element={<IMetAnHonestOfficer />}
          />
          <Route path="/resource" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teamDetails" element={<TeamDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicesDetails" element={<ServicesDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partnerships" element={<Projects />} />
          <Route path="/projectsDetails" element={<ProjectsDetails />} />
          <Route path="/blogs" element={<BlogsSidebar />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Toaster></Toaster>
    </>
  );
};

export default App;
