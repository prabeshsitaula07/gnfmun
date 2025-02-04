import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Gallery from "./components/AboutUs/Gallery";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Contact/Contact";

export default function App() {
  return (
    <Router basename="/gnfmun">
      {/* Navbar always present */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about/gallery" element={<Layout><Gallery /></Layout>} />
      </Routes>
    </Router>
  )
}