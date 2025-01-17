import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Project } from './components/Project.js';
import { Footer } from './components/Footer/index.js';

function App() {
  return (
    <Router>
      <NavBar/>
      <Banner/>
  <hr/>
     <Skills/>
     <hr/>
     <Project/>
     <hr/>
     <Footer/>
    </Router>
  );
};

export default App;
