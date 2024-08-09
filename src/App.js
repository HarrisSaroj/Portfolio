import './App.css';
import Footer from './components/Footer/Footer';
import About from './components/aboutSection/About';
import Contact from './components/contactSection/Contact';
import Hero from './components/heroSection/Hero';
import Navbar from './components/heroSectionComponents/navbar/Navbar';
import Project from './components/projectSection/Project';
import Skill from './components/skillSection/Skill';

function App() {
  return (
    <div className=''>
      <section id='Homepage'>
        <div className='fixed z-10'>
          <Navbar/>
        </div>
       <Hero/>
      </section>
      <section className='h-auto xl:h-[100vh]' id='About'>
        <About/>
      </section>
      <section className='h-auto xl:h-[100vh]' id='Skill'>
        <Skill/>
      </section>
      <div id='Project'> 
        <Project/>
      </div>
      <section id='Contact' className=''>
        <Contact/>  
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

