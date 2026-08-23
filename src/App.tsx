import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SortView from "./pages/projects/SortView";
import LibraryAI from "./pages/projects/LibraryAI";
import FlowBoard from "./pages/projects/FlowBoard";
import NBAPrediction from "./pages/projects/NBAPrediction";
import PokerTracker from "./pages/projects/PokerTracker";
import AircraftSimulator from "./pages/projects/AircraftSimulator";
import Homelab from "./pages/projects/Homelab";
import About from "./pages/About";
import RotationLab from "./pages/projects/RotationLab";
import WaterUtilityGIS from "./pages/projects/WaterUtilityGIS";

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/sortview" element={<SortView />} />
        <Route path="/projects/library-ai" element={<LibraryAI />} />
        <Route path="/projects/flowboard" element={<FlowBoard />} />
        <Route
          path="/projects/nba-prediction"
          element={<NBAPrediction />}
        />
        <Route
          path="/projects/poker-tracker"
          element={<PokerTracker />}
        />
        <Route path="/projects/rotationlab" element={<RotationLab />} />

        <Route
          path="/projects/aircraft-simulator"
          element={<AircraftSimulator />}
        />

        <Route path="/projects/homelab" element={<Homelab />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/projects/water-utility-gis"
          element={<WaterUtilityGIS />}
        />
      </Routes>
    </>
  );
}

export default App;