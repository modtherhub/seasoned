import { motion } from "framer-motion";
import { ArrowUpRight , Award } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9F7F5] pt-20 pb-10 px-6 md:px-12 lg:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
        
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-light tracking-[0.2em] text-gray-300 uppercase"
          >
            Seasoned
          </motion.h2>
          
          <p className="text-gray-700 font-serif text-lg leading-relaxed max-w-[280px]">
            © {currentYear} Seasoned Digital Alchemy. Crafted for the curious palate.
          </p>

          <div className="flex items-center gap-4 text-gray-400">
            <motion.div whileHover={{ scale: 1.2, color: "#005CAE" }} className="cursor-pointer">
              <Award size={20} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, color: "#005CAE" }} className="cursor-pointer">
              <ArrowUpRight  size={20} />
            </motion.div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[0.65rem] font-sans font-bold tracking-[0.2em] text-[#005CAE] uppercase">
            Explore
          </h4>
          <ul className="space-y-4">
            {["Instagram", "Pinterest", "Newsletter", "Contact"].map((item) => (
              <motion.li key={item} whileHover={{ x: 5 }}>
                <a 
                  href="#" 
                  className={`text-xl font-serif text-gray-600 hover:text-black transition-colors ${
                    item === "Instagram" ? "border-b border-gray-400 italic" : "italic"
                  }`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-[0.65rem] font-sans font-bold tracking-[0.2em] text-[#005CAE] uppercase">
            Legal
          </h4>
          <ul className="space-y-4">
            {["Privacy", "Terms"].map((item) => (
              <motion.li key={item} whileHover={{ x: 5 }}>
                <a 
                  href="#" 
                  className="text-xl font-serif italic text-gray-600 hover:text-black transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;