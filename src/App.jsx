import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import {
  About,
  Academics,
  Blogs,
  ContactUs,
  Events,
  Gallery,
  Home,
  Infrastructure,
  Placements,
} from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Topbar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/placements" element={<Placements />} />
          </Routes>
        </main>
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
}

export default App;
