import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Home/LandingPage";

export default function App() {
  return (
    <Router>
            <div className="flex flex-col min-h-screen">
                {/* Navbar always present */}
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
                {/* Footer always present */}
                {/* <Footer /> */}
            </div>
        </Router>
  )
}