import { Nav } from "@/components/wedding/Nav";
import { Hero } from "@/components/wedding/Hero";
import { Story } from "@/components/wedding/Story";
import { Schedule } from "@/components/wedding/Schedule";
import { Venue } from "@/components/wedding/Venue";
import { Gallery } from "@/components/wedding/Gallery";
import { Footer } from "@/components/wedding/Footer";

interface WeddingProps {
  fadeIn?: boolean;
}

const Wedding = ({ fadeIn = true }: WeddingProps) => (
  <div className={`bg-background ${fadeIn ? "animate-fade-in-slow" : ""}`}>
    <Nav />
    <Hero />
    <Story />
    <Schedule />
    <Venue />
    <Gallery />
    <Footer />
  </div>
);

export default Wedding;
