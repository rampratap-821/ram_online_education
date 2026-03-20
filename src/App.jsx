import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./NavFooter/Navbar";
import Footer from "./NavFooter/Footer";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import ScrollToTop from "./ScrollTop";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Courses from "./Pages/Courses";
import BecomeTeacher from "./Pages/BecomeTeacher";
import Event from "./Pages/Event";
import Faqs from "./Pages/Faqs";
import Element from "./Pages/Element";
import CourseDetail from "./Courses/CourseDetails";
import ExploreCourseDetails from "./Home/ExploreCourseDetails";
import LatestNewsDetails from "./LatestNewsDetails/LatestNewsDetails";
import FloatingButtons from "./Pages/FloatingButtons";

const App = ()=>{
  return(
    <Router>
      <ScrollToTop/>
      <FloatingButtons/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/becomeTeacher" element={<BecomeTeacher/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/faqs" element={<Faqs/>}/>
        <Route path="/element" element={<Element/>}/>
        <Route path="/courseDetails/:id" element={<CourseDetail/>}/>
        <Route path="/exploreCourseDetails/:id" element={<ExploreCourseDetails/>}/>
        <Route path="/latestNewsDetails/:id" element={<LatestNewsDetails/>}/>
         
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;