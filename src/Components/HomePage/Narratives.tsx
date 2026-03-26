import { Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Narratives = () => {
  const stories = [
    {
      id: 1,
      tag: "ORIGINS",
      tagBg: "bg-cyan-100",
      tagText: "text-cyan-900",
      image: "/Diver.jpg",
      title: "THE ABYSSAL HARVEST",
      description: "Exploring the mineral richness of prehistoric sea beds buried miles beneath the surface.",
      readTime: "12 MIN READ",
    },
    {
      id: 2,
      tag: "PEOPLE",
      tagBg: "bg-gray-100",
      tagText: "text-gray-900",
      image: "/saltHand.jpg",
      title: "THE SALT GUARDIANS",
      description: "Meet the Guerande families who have harvested fleur de sel for seven centuries.",
    },
    {
      id: 3,
      tag: "TECHNIQUE",
      tagBg: "bg-gray-100",
      tagText: "text-gray-900",
      image: "/meetSalt.jpg",
      title: "BEYOND THE SHAKER",
      description: "Understanding temperature and grain size for the perfect seasoning.",
    },
    {
      id: 4,
      tag: "ORIGINS",
      tagBg: "bg-gray-100",
      tagText: "text-gray-900",
      image: "/largestsalt .jpg",
      title: "BOLIVIAN MIRRORS",
      description: "A journey across the Salar de Uyuni, where the earth and sky become one crystalline entity.",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-white text-black min-h-screen p-6 md:p-12 lg:p-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 lg:mb-16">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-black text-neutral-800 tracking-tighter mb-4">
              Curated Narratives
            </h1>
            <p className="text-lg text-neutral-400 font-serif leading-relaxed">
              Deep dives into the origins, techniques, and the remarkable people
              behind our most essential ingredients.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex items-center gap-6"
          >
            <button className="px-8 py-3 bg-[#AEC7E0] text-gray-900 font-bold rounded-full transition-all hover:bg-[#005CAE] hover:text-white hover:shadow-lg active:scale-95">
              All Stories
            </button>
            <button className="text-sm font-medium text-neutral-400 hover:text-black transition-colors">
              Archive
            </button>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <motion.div variants={itemVariants} className="lg:row-span-2 group">
            <StoryCard story={stories[0]} isAbyssal={true} />
          </motion.div>
          <motion.div variants={itemVariants} className="group">
            <StoryCard story={stories[1]} isAbyssal={false}/>
          </motion.div>
          
          <motion.div variants={itemVariants} className="group">
            <StoryCard story={stories[2]} isAbyssal={false}/>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="group lg:h-full flex flex-col"
          >
            <div className="bg-[#AEC7E0] p-8 rounded-[1.5rem] flex-grow flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="absolute top-0 right-0 h-full w-24 flex items-center justify-center -mr-6 opacity-10">
                <div className="h-[90%] w-full bg-blue-900 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-blue-900 text-white text-[0.625rem] font-bold rounded-full tracking-wider mb-8">
                  TECHNIQUE
                </span>
                <h2 className="text-3xl md:text-4xl font-extralight text-blue-900 leading-tight mb-8">
                  THE ART OF <br /> CURING
                </h2>
                <p className="text-sm text-blue-900/70 leading-relaxed max-w-xs mb-10">
                  How salt transforms the perishable into the eternal through the slow alchemy of time.
                </p>
              </div>
              <a href="#" className="group/link inline-flex items-center gap-2 text-xs font-bold text-blue-900 border-b-2 border-blue-900 pb-1 w-fit transition-all hover:gap-4">
                LEARN THE CRAFT
                <ExternalLink className="w-3.5 h-3.5 group-hover/link:rotate-45 transition-transform" />
              </a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="group">
            <StoryCard story={stories[3]} isAbyssal={false} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const StoryCard = ({ story, isAbyssal }: any) => (
  <div className={`flex flex-col h-full`}>
    <motion.div 
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-[1.5rem] overflow-hidden cursor-pointer ${
        isAbyssal ? "h-[500px] lg:h-full" : "aspect-[4/3]"
      }`}
    >
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <span className={`absolute top-6 left-6 px-3 py-1 ${story.tagBg} ${story.tagText} text-[0.625rem] font-bold rounded-full tracking-wider z-10 shadow-sm`}>
        {story.tag}
      </span>
    </motion.div>

    <div className="mt-6">
      <h3 className="text-xl font-black text-neutral-800 tracking-tight transition-colors duration-300 group-hover:text-[#005CAE]">
        {story.title}
      </h3>
      <p className="text-sm text-neutral-500 font-serif leading-relaxed mt-2 mb-4">
        {story.description}
      </p>
      {story.readTime && (
        <div className="flex items-center gap-2 text-[#005CAE] text-[0.625rem] font-bold tracking-widest">
          <Clock className="w-3.5 h-3.5" />
          {story.readTime}
        </div>
      )}
    </div>
  </div>
);

export default Narratives;