import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LetterModal from "@/components/LetterModal";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <>
      <LetterModal />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <GallerySection />
      <footer>made with ❤️ for us</footer>
    </>
  );
}