import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Reels from "@/components/Reels";
import Lookbook from "@/components/Lookbook";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black">
      <Hero />
      <Manifesto />
      <Reels />
      <Lookbook />
      <Gallery />
      <Footer />
    </main>
  );
}
