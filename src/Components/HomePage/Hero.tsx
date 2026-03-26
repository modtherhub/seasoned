import { Play } from "lucide-react"
const Hero = () => {
  return (
    <div className='relative bg-gray-50 min-h-screen py-45.5'>
      <div className="absolute inset-0">
        <img
          src="/salt.jpg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/30 to-white/90"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10">
        <div className="relative flex items-center justify-center">
          <div className="flex flex-col items-center text-center space-y-6">
            <p className="text-[0.75rem] font-serif">Volume 01: Elements</p>
            <div className="text-[10rem] font-sans font-extrabold leading-none">
              <p>THE STORY</p>
              <p className=""> OF <span className="text-[#005CAE] italic">SALT</span></p>
            </div>
            <p className="text-[1.5rem] font-sans font-light max-w-2xl"> From the ancient crystalline beds of the Himalayas to the sun-drenched pans of the Mediterranean, salt is the silent alchemist of the culinary world.</p>
            <div className="flex space-x-4 items-center">
              <button className="font-sans font-thin text-[1.125rem] 
              px-10 py-5 bg-[#005CAE] rounded-full text-white">Explore the Archive</button>
              <button className="flex items-center space-x-3 font-sans text-[1rem]"><span className="p-2 border-2 rounded-full"><Play/></span><span> Watch the Documentary</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
