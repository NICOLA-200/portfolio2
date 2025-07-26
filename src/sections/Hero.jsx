
import { useMediaQuery } from 'react-responsive';
// import { PerspectiveCamera } from '@react-three/drei';

// import Cube from '../components/Cube.jsx';
// import Rings from '../components/Rings.jsx';
// import ReactLogo from '../components/ReactLogo.jsx';
// import Button from '../components/Button.jsx';
// import Target from '../components/Target.jsx';
// import CanvasLoader from '../components/Loading.jsx';
// import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';

import ComputersCanvas from './canvas/Computer.jsx';


const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
 

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
     <section className={`relative w-full h-screen mx-auto`}>
      
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}
      >
       
 

        <div className='flex font-extrabold justify-center z-50 flex-col items-center'>

                <p className="sm:text-3xl text-xl font-medium my-2 text-white text-center font-generalsans">
            {"Hi, I am ".split("").map((char, i) => (
    <span
      key={i}
      className="inline-block transition-transform duration-[3000] ease-linear hover:scale-[1.7]"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
           
           
           <span className="text-blue-600 font-extrabold   whitespace-pre-wrap tracking-wider">


  {"Nicola".split("").map((char, i) => (
    <span
      key={i}
      className="inline-block transition-transform duration-[3000] ease-linear hover:scale-[1.7]"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</span>
           
           
            <span className="waving-hand">👋</span>
         </p>
<p className="hero_tag sm:w-[60%] text-center  whitespace-pre-wrap tracking-wider">
  {"Full Stack Developer Specializing in Web & Mobile Applications".split("").map((char, i) => (
    <span
      key={i}
      className="inline-block font-extrabold transition-transform duration-[3000] ease-linear hover:scale-[1.7]"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</p>


        </div>
        
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;




  //  <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
  //       <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
  //         Hi, I am Nicola <span className="waving-hand">👋</span>
  //       </p>
  //       <p className="hero_tag  text-gray_gradient">Full Stack Developer Specializing in Web & Mobile Applications</p>
  //     </div>
  //   <ComputersCanvas />
     
  //     <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
  //       <a href="#about" className="w-fit">
  //         <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
  //       </a>
  //     </div>