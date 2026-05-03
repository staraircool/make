import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Reels from "@/components/Reels";
import Lookbook from "@/components/Lookbook";
import Gallery from "@/components/Gallery";
import ServicesMenu from "@/components/ServicesMenu";
import LuxurySpace from "@/components/LuxurySpace";
import StylistsProfiles from "@/components/StylistsProfiles";
import ClientTestimonials from "@/components/ClientTestimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Hero />
      <Manifesto />
      <Reels />
      <ServicesMenu />
      <LuxurySpace />
      <StylistsProfiles />
      <Lookbook />
      <Gallery />
      <ClientTestimonials />
      <Footer />
    </main>
  );
}
