import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import {useRef}  from 'react'
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Resume from "./sections/Resume.jsx";



// const RotatingCube = () => {

//   const meshRef = useRef()

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.01
//       meshRef.current.rotation.x +=  0.01
//     }
//   })
//     return (
//       <mesh ref={meshRef}>
//          <cylinderGeometry args={[1,1,1]} />
//          <meshLambertMaterial color="#468585" emissive="3468585" />
//       </mesh>
//     )
// }


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