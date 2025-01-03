import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import StatsSection from './components/StatsSection';
import YogaPathSection from "./components/YogaPathSection";
import AccreditationSection from "./components/AccreditationSection";
import InstructorSlider from './components/Instructor';
import YogaAd from './components/YogaAd';
import Testimonials from './components/Testimonials';
import YogaSubscriptionAd from './components/YogaSubscriptionAd';
import AccessContentAd from "./components/AccessContentAd";
import DownloadAppSection from './components/DownloadSection';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <StatsSection />
      <YogaPathSection />
      <InstructorSlider />
      <YogaAd />
      <Testimonials />
      <YogaSubscriptionAd />
      <AccreditationSection />
      <AccessContentAd />
      <DownloadAppSection />
      <Footer />
    </>
  )
}

export default App
