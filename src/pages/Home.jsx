import React from 'react'
import Herosection from '../components/Herosection'
import Secondsection from '../components/Secondsection'
import Thirdsection from '../components/Thirdsection'
import FourSection from '../components/FourSection'
import FiveSection from '../components/FiveSection'
import SixSection from '../components/SixSection'
import SevenSection from '../components/SevenSection'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <main>
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