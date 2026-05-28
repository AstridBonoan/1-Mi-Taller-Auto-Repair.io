import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { MobileCallBar } from './components/MobileCallBar'
import { Navbar } from './components/Navbar'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { TrustBar } from './components/TrustBar'
import { WhyChooseUs } from './components/WhyChooseUs'

function App() {
  return (
    <>
      <Navbar />
      <main className="pb-20 sm:pb-0">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}

export default App
