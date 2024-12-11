import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
            <div className="flex flex-col min-h-screen">
                {/* Navbar always present */}
                <Navbar />
                <div className="flex-grow">
                    {/* Define Routes */}
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </div>
                {/* Footer always present */}
                <Footer />
            </div>
        </Router>
  )
}