import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Kasa from './pages/Kasa.jsx'
import MonVieuxGrimoire from './pages/MonVieuxGrimoire'
import SophieBluel from './pages/SophieBluel'


const App = () => {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kasa" element={<Kasa />} />
            <Route path="/monvieuxgrimoire" element={<MonVieuxGrimoire />} />
            <Route path="/sophiebluel" element={<SophieBluel />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App