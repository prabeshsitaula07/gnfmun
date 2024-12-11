import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <Router>
                {/* Navbar always present */}
                <Navbar />
                    <Routes>
                        <Route path="/gnfmun" element={<Home />} />
                    </Routes>
        </Router>
  )
}