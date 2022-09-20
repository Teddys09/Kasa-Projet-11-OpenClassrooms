import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Navbar';
import Logement from './pages/Logement';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/logement" element={<Logement />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
