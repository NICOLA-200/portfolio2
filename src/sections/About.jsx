import { useState , useRef, useEffect } from 'react';
import { motion , useAnimation } from 'framer-motion'; // Import Framer Motion
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {

  const globeEl = useRef(); // Ref for the globe instance
  const controls = useAnimation(); // Animation controls

  // Auto-rotation effect
  useEffect(() => {
    let rotation = 0;
    const interval = setInterval(() => {
      rotation += 0.5;
      if (globeEl.current) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.5;
        globeEl.current.controls().enableZoom = false; // Disable zoom for better UX
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);


  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('fatepepe66@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  // Animation variants for consistent hover effects
  const cardVariants = {
    hover: {
      scale: 1.03,
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Card 1 */}
        <div className="col-span-1 xl:row-span-3">
          <motion.div
            className="grid-container"
            variants={cardVariants}
            whileHover="hover"
          >
            <img src="assets/grid1.png" alt="grid-1" className="w-full text-white sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m NSENGIYUMVA Nicola</p>
              <p className="grid-subtext">
                With 3 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Card 2 */}
        <div className="col-span-1 xl:row-span-3">
          <motion.div
            className="grid-container"
            variants={cardVariants}
            whileHover="hover"
          >
            <img src="assets/grid2.png" alt="grid-2" className="w-full text-white sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Card 3 (Globe) */}
        <div className="col-span-1 xl:row-span-4">
          <motion.div
            className="grid-container"
            variants={cardVariants}
            whileHover="hover"
          >
                 <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            <Globe
              ref={globeEl}
              height={326}
              width={326}
              backgroundColor="rgba(0, 0, 0, 0)"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              showAtmosphere
              showGraticules
              labelsData={[{
                lat: 1.94,
                lng: 29.87,
                text: "I'm here",
                color: 'green',
                size: 35
              }]}
              onGlobeReady={() => {
                // Start auto-rotation when globe is ready
                if (globeEl.current) {
                  globeEl.current.controls().autoRotate = true;
                  globeEl.current.controls().autoRotateSpeed = 0.5;
                }
              }}
            />
          </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I'm based in Kigali, Rwanda and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </motion.div>
        </div>

        {/* Card 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <motion.div
            className="grid-container"
            variants={cardVariants}
            whileHover="hover"
          >
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn't just my
                profession—it's my passion.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Card 5 (Contact) */}
        <div className="xl:col-span-1 xl:row-span-2">
          <motion.div
            className="grid-container"
            variants={cardVariants}
            whileHover="hover"
          >
            <img src="assets/grid4.png" alt="grid-4" className="w-20 h-fit object-cover sm:object-top" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  fatepepe66@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;