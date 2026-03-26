import Navbar from '../Components/HomePage/Navbar'
import Hero from '../Components/HomePage/Hero'
import Narratives from '../Components/HomePage/Narratives'
import Newsletter from '../Components/HomePage/Newsletter'
import Footer from '../Components/HomePage/Footer'

const Home = () => {
  return (
    <div className='bg-white min-h-screen'>
      <Navbar/>
      <Hero/>
      <Narratives/>
      <Newsletter/>
      <div className='m-[5rem]'></div>
      <Footer/>
    </div>
  )
}

export default Home
