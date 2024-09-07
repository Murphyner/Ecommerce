import React from 'react'
import Herosection from '../components/home/Herosection'
import Secondsection from '../components/home/Secondsection'
import Thirdsection from '../components/home/Thirdsection'
import FourSection from '../components/home/FourSection'
import FiveSection from '../components/home/FiveSection'
import SixSection from '../components/home/SixSection'
import SevenSection from '../components/home/SevenSection'
import Testimonials from '../components/home/Testimonials'

function Home() {
  return (
    <main className=' overflow-hidden'>
        <Herosection />
        <Secondsection />
        <Thirdsection />
        <FourSection />
        <FiveSection />
        <SixSection />
        <SevenSection />
        <Testimonials />
    </main>
  )
}

export default Home