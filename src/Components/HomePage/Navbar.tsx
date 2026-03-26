import { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black text-[#005CAE] italic tracking-tighter cursor-pointer"
        >
          Seasoned
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {["Stories", "Ingredients", "About", "Join"].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="relative text-gray-500 hover:text-[#005CAE] font-medium transition-colors duration-300 group"
            >
              {item}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#005CAE]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
              {item === "Stories" && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#005CAE]"></span>}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          
          <motion.div 
            className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2"
            whileFocus={{ scale: 1.05 }}
          >
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm w-24 focus:w-40 transition-all duration-500"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="cursor-pointer">
            <User className="w-5 h-5 text-gray-700" />
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-full border-2 border-[#005CAE] bg-[#005CAE] text-white font-medium 
                       hover:bg-transparent hover:text-[#005CAE] transition-colors duration-300"
          >
            Subscribe
          </motion.button>

          <button className="md:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {["Stories", "Ingredients", "About", "Join"].map((item) => (
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  key={item} 
                  href="#" 
                  className="block text-gray-700 hover:text-[#005CAE] font-medium"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full py-3 bg-[#005CAE] text-white rounded-full font-bold shadow-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav >
  );
}