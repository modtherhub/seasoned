import { Play } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='relative bg-gray-50 min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0'>
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <img
          src="/salt.jpg"
          alt="Salt background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[0.75rem] font-serif tracking-[0.2em] uppercase"
          >
            Volume 01: Elements
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[4rem] md:text-[8rem] font-sans font-extrabold leading-none"
          >
            <p>THE STORY</p>
            <p> OF <span className="text-[#005CAE] italic">SALT</span></p>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[1.125rem] md:text-[1.5rem] font-sans font-light max-w-2xl px-4"
          >
            From the ancient crystalline beds of the Himalayas to the sun-drenched pans of the Mediterranean, salt is the silent alchemist of the culinary world.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-4"
          >
            <button className="group relative font-sans font-medium text-[1rem] md:text-[1.125rem] 
              px-10 py-4 bg-[#005CAE] border-2 border-[#005CAE] rounded-full text-white 
              transition-all duration-300 hover:bg-transparent hover:text-[#005CAE] w-full sm:w-auto">
              Explore the Archive
            </button>

            <button className="group flex items-center space-x-3 font-sans text-[1rem] 
              px-6 py-3 rounded-full border-2 border-transparent hover:border-[#005CAE] 
              hover:bg-[#005CAE] hover:text-white transition-all duration-300">
              <span className="p-2 border-2 border-[#005CAE] group-hover:border-white rounded-full transition-colors">
                <Play size={16} fill="currentColor" />
              </span>
              <span className="font-medium">Watch the Documentary</span>
            </button>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ y: -10 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="mt-16 md:absolute md:right-10 md:-bottom-40 flex flex-col space-y-2 p-7 rounded-[1.25rem] bg-white/80 backdrop-blur-md shadow-xl border border-white/20 mx-auto max-w-[300px]"
        >
          <h4 className="font-serif text-[1.875rem] text-[#005CAE]">Chef's Note</h4>
          <p className="font-serif text-[0.875rem] italic text-gray-700">
            "Never underestimate the power of a finishing flake. It's not just seasoning; it's a structural element of the palate."
          </p>
          <p className="text-[0.625rem] font-sans font-bold tracking-widest text-gray-400 uppercase">Ref: Maldon-042</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;