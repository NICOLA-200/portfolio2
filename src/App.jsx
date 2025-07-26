
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Resume from "./sections/Resume.jsx";



const App = () => {
  return (
      <div className='relative z-0 bg-primary'>
     <div className="relative overflow-hidden min-h-screen">
  {/* Background */}
  <div 
    className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center rotate-bg opacity-50"
  ></div>
    <div 
    className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-50"
  ></div>
  
  {/* Content */}
  <div className="relative z-10">
    <Navbar />
    <Hero />
  </div>
</div>
      <div className="text-center">
         <Resume />
       </div>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <About />
      <Projects />
      </div>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
      </div>
      </div>
  )
}

export default App