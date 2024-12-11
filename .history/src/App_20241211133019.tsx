import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <Router basename="/gnfmun">
                {/* Navbar always present */}
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about/gallery" element={<Home />} />
                    </Routes>
        </Router>
  )
}