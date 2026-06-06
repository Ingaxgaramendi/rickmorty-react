import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nabvar";
import Home from "./pages/Home";
import Entities from "./pages/Entities";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entities" element={<Entities />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
