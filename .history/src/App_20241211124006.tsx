import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
            <div className="flex flex-col min-h-screen">
                {/* Navbar always present */}
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
            </div>
        </Router>
  )
}