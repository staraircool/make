import Hero from "@/components/Hero";
import Reels from "@/components/Reels";
import Lookbook from "@/components/Lookbook";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <Reels />
      <Lookbook />
      <Gallery />
      <Footer />
    </main>
  );
}
