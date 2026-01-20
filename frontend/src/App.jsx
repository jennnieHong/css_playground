import { useState } from 'react';
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
import DisplayStudy from './pages/DisplayStudy';
import BoxModelStudy from './pages/BoxModelStudy';
import FloatStudy from './pages/FloatStudy';
import ColorBackgroundStudy from './pages/ColorBackgroundStudy';
import TypographyStudy from './pages/TypographyStudy';
import InteractionStudy from './pages/InteractionStudy';
import FormStudy from './pages/FormStudy';
import ContainerQueriesStudy from './pages/ContainerQueriesStudy';
import StackingStudy from './pages/StackingStudy';
import PseudoElementStudy from './pages/PseudoElementStudy';
import AccessibilityStudy from './pages/AccessibilityStudy';
import PerformanceStudy from './pages/PerformanceStudy';
import LogicalPropertiesStudy from './pages/LogicalPropertiesStudy';
import ModernSelectorsStudy from './pages/ModernSelectorsStudy';
import HeightStudy from './pages/HeightStudy';
import AnimationsStudy from './pages/AnimationsStudy';
import UnitsStudy from './pages/UnitsStudy';
import './styles/main.css';
import './styles/navigation.css';
import './styles/components.css';
import './styles/pages.css';

function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleNav = () => {
    setIsNavCollapsed(prev => !prev);
  };

  return (
    <Router>
      <div className={`app-container ${isNavCollapsed ? 'nav-collapsed' : ''}`}>
        <Navigation isCollapsed={isNavCollapsed} onToggle={toggleNav} />
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
            {/* Foundations */}
            <Route path="/display" element={<DisplayStudy />} />
            <Route path="/box-model" element={<BoxModelStudy />} />
            <Route path="/float" element={<FloatStudy />} />
            <Route path="/logical-properties" element={<LogicalPropertiesStudy />} />
            {/* Visual & Design */}
            <Route path="/colors" element={<ColorBackgroundStudy />} />
            <Route path="/typography" element={<TypographyStudy />} />
            <Route path="/units" element={<UnitsStudy />} />
            <Route path="/height" element={<HeightStudy />} />
            <Route path="/animations" element={<AnimationsStudy />} />
            {/* Interaction */}
            <Route path="/interaction" element={<InteractionStudy />} />
            <Route path="/forms" element={<FormStudy />} />
            <Route path="/accessibility" element={<AccessibilityStudy />} />
            {/* Advanced */}
            <Route path="/container-queries" element={<ContainerQueriesStudy />} />
            <Route path="/stacking" element={<StackingStudy />} />
            <Route path="/pseudo-elements" element={<PseudoElementStudy />} />
            <Route path="/performance" element={<PerformanceStudy />} />
            <Route path="/selectors" element={<ModernSelectorsStudy />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

