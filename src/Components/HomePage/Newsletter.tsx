import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="bg-[#F9F7F5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-[4rem] md:text-[5rem] font-extralight leading-none tracking-tighter text-[#1E3A8A] italic">
              STAY
              <br />
              <span className="font-bold not-italic">SEASONED.</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-500 font-serif max-w-md leading-relaxed">
            Join 40,000+ curious palates. Weekly dispatches on the science, history, and magic of ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-grow px-6 py-4 rounded-xl bg-gray-200/50 border-none outline-none focus:ring-2 focus:ring-[#005CAE]/20 transition-all text-gray-700"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#005CAE] text-white font-bold rounded-xl shadow-lg hover:bg-[#004a8d] transition-colors"
            >
              Join
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform translate-x-6 translate-y-6 -rotate-3-z-10"></div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square transform rotate-[-6deg]">
            <img
              src="/Buckwheat.jpg"
              alt="Assorted Spices"
              className="w-full h-full object-cover transition-transform duration-1000 rounded-[3rem] aspect-square transform"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Newsletter;