import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeaderSearch from './components/HeaderSearch';
import PageProgressDots from './components/PageProgressDots';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import FlexboxStudy from './pages/FlexboxStudy';
import GridStudy from './pages/GridStudy';
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
import AttributesAndJSStudy from './pages/AttributesAndJSStudy';
import PseudoElementStudy from './pages/PseudoElementStudy';
import AccessibilityStudy from './pages/AccessibilityStudy';
import PerformanceStudy from './pages/PerformanceStudy';
import LogicalPropertiesStudy from './pages/LogicalPropertiesStudy';
import ModernSelectorsStudy from './pages/ModernSelectorsStudy';
import SelectorsBasicsStudy from './pages/SelectorsBasicsStudy';
import PracticeChallenge from './pages/PracticeChallenge';
import HeightStudy from './pages/HeightStudy';
import AnimationStudy from './pages/AnimationStudy';
import AnimationsStudy2 from './pages/AnimationsStudy2';
import UnitsStudy from './pages/UnitsStudy';
import HidingMethodsStudy from './pages/HidingMethodsStudy';
import ViewportUnitsStudy from './pages/ViewportUnitsStudy';
import RelativeAbsoluteStudy from './pages/RelativeAbsoluteStudy';
import ModalPatternStudy from './pages/ModalPatternStudy';
import SpecificityStudy from './pages/SpecificityStudy';
import ColorInheritanceStudy from './pages/ColorInheritanceStudy';
import './styles/main.css';
import './styles/navigation.css';
import './styles/components.css';
import './styles/pages.css';


function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // 기본 닫힘 상태

  const toggleNav = useCallback(() => {
    setIsNavCollapsed(prev => !prev);
  }, []);

  return (
    <Router>
      <div className={`app-container ${isNavCollapsed ? 'nav-collapsed' : ''}`}>
        <Navigation isCollapsed={isNavCollapsed} onToggle={toggleNav} />
        <main className="main-content">
          <header className="main-header">
            <HeaderSearch />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/flexbox" element={<FlexboxStudy />} />
            <Route path="/grid" element={<GridStudy />} />
            <Route path="/animation-old" element={<AnimationStudy />} />
            <Route path="/animation-new" element={<AnimationsStudy2 />} />
            <Route path="/responsive" element={<ResponsiveStudy />} />
            <Route path="/custom-properties" element={<CustomPropertiesStudy />} />
            <Route path="/architecture" element={<CssArchitectureStudy />} />
            <Route path="/position" element={<PositionStudy />} />
            <Route path="/relative-absolute" element={<RelativeAbsoluteStudy />} />
            {/* Foundations */}
            <Route path="/display" element={<DisplayStudy />} />
            <Route path="/box-model" element={<BoxModelStudy />} />
            <Route path="/float" element={<FloatStudy />} />
            <Route path="/logical-properties" element={<LogicalPropertiesStudy />} />
            {/* Visual & Design */}
            <Route path="/colors" element={<ColorBackgroundStudy />} />
            <Route path="/typography" element={<TypographyStudy />} />
            <Route path="/units" element={<UnitsStudy />} />
            <Route path="/viewport-units" element={<ViewportUnitsStudy />} />
            <Route path="/height" element={<HeightStudy />} />
            <Route path="/hiding" element={<HidingMethodsStudy />} />
            {/* Interaction */}
            <Route path="/interaction" element={<InteractionStudy />} />
            <Route path="/modal-pattern" element={<ModalPatternStudy />} />
            <Route path="/forms" element={<FormStudy />} />
            <Route path="/accessibility" element={<AccessibilityStudy />} />
            {/* Advanced */}
            <Route path="/container-queries" element={<ContainerQueriesStudy />} />
            <Route path="/stacking" element={<StackingStudy />} />
            <Route path="/attributes-js" element={<AttributesAndJSStudy />} />
            <Route path="/pseudo-elements" element={<PseudoElementStudy />} />
            <Route path="/performance" element={<PerformanceStudy />} />
            <Route path="/selectors" element={<ModernSelectorsStudy />} />
            <Route path="/selectors-basics" element={<SelectorsBasicsStudy />} />
            <Route path="/specificity" element={<SpecificityStudy />} />
            <Route path="/color-inheritance" element={<ColorInheritanceStudy />} />
            <Route path="/challenge" element={<PracticeChallenge />} />
          </Routes>
        </main>
        <PageProgressDots />
      </div>
    </Router>
  );
}

export default App;

