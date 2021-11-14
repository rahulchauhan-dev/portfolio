import Contact from './components/Contact';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (

    <main className="pb-5">
      <Landing id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </main>

  );
}

export default App;
