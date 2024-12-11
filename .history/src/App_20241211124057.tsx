import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <Router>
                {/* Navbar always present */}
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
        </Router>
  )
}