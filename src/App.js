import './App.css';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div id='home'>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
