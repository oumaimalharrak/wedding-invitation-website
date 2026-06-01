import { Nav } from "@/components/wedding/Nav";
import { Hero } from "@/components/wedding/Hero";
import { Story } from "@/components/wedding/Story";
import { Schedule } from "@/components/wedding/Schedule";
import { Venue } from "@/components/wedding/Venue";
import { Gallery } from "@/components/wedding/Gallery";
import { Footer } from "@/components/wedding/Footer";

const Wedding = () => (
  <div className="bg-background animate-fade-in">
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
