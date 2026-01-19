import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import FlexboxStudy from './pages/FlexboxStudy';
import GridStudy from './pages/GridStudy';
import AnimationStudy from './pages/AnimationStudy';
import ResponsiveStudy from './pages/ResponsiveStudy';
import CustomPropertiesStudy from './pages/CustomPropertiesStudy';
import CssArchitectureStudy from './pages/CssArchitectureStudy';
import PositionStudy from './pages/PositionStudy';
import './styles/main.css';
import './styles/navigation.css';
import './styles/components.css';
import './styles/pages.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flexbox" element={<FlexboxStudy />} />
            <Route path="/grid" element={<GridStudy />} />
            <Route path="/animation" element={<AnimationStudy />} />
            <Route path="/responsive" element={<ResponsiveStudy />} />
            <Route path="/custom-properties" element={<CustomPropertiesStudy />} />
            <Route path="/architecture" element={<CssArchitectureStudy />} />
            <Route path="/position" element={<PositionStudy />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

