import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Reels from "@/components/Reels";
import Lookbook from "@/components/Lookbook";
import Gallery from "@/components/Gallery";
import ServicesMenu from "@/components/ServicesMenu";
import StylistsProfiles from "@/components/StylistsProfiles";
import ClientTestimonials from "@/components/ClientTestimonials";
import LiveAvailability from "@/components/LiveAvailability";
import VirtualTour from "@/components/VirtualTour";
import ClientCounter from "@/components/ClientCounter";
import InstagramFeed from "@/components/InstagramFeed";
import PriceCalculator from "@/components/PriceCalculator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Hero />
      <LiveAvailability />
      <Manifesto />
      <Reels />
      <ServicesMenu />
      <PriceCalculator />
      <VirtualTour />
      <ClientCounter />
      <StylistsProfiles />
      <Lookbook />
      <Gallery />
      <InstagramFeed />
      <ClientTestimonials />
      <Footer />
    </main>
  );
}
