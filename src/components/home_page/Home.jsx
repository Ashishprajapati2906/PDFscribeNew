import React from 'react'
import Navbar from '../landing_Page/navbar/Navbar'
import AiPower from '../AI_Power/AiPower'
import BestFeature from '../best_features/BestFeature'
import Testimonials from '../testimonials/Testimonials'
import Pricing from '../pricing/Pricing'
import Fnq from '../F&Q/Fnq'
import Contact from '../Contact_Us/Contact'
import Footer from '../Footer/Footer'


const Home = () => {
    return (
        <div>
            <Navbar />
            <AiPower />
            <BestFeature />
            <Testimonials />
            <Pricing />
            <Fnq />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home