import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from './components/pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import {Aboutme} from "../src/components/pages/Aboutme";
import Certifications from "../src/components/pages/Certifications";
import {Interests} from "../src/components/pages/Interests";
import {Skills} from './components/pages/Skills';
import {Resume} from './components/pages/Resume';
import {Projects} from './components/pages/Projects';
function App() {

  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<Home />} />
          <Route exact path="/certifications"element={<Home />}/>
          <Route exact path="/interests" element={<Home />} />
          <Route exact path="/projects" element={<Home />} />
          <Route exact path="/resume" element={<Home />}/>
          <Route exact path="/skills" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
