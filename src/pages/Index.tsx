import { Link } from "react-router-dom";
import waxSeal from "@/assets/wax-seal.jpg";

const Index = () => {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      <img
        src={waxSeal}
        alt="Sello de cera con monograma E & D sobre sobre crema"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-serif-display italic text-primary text-lg md:text-xl tracking-wide translate-y-16 md:translate-y-24">
          The Digital Yes
        </p>
      </div>

      <Link
        to="/boda"
        className="absolute bottom-6 right-6 md:bottom-8 md:right-10 text-[10px] md:text-xs tracking-[0.3em] text-foreground/70 hover:text-foreground transition-colors"
      >
        SALTAR
      </Link>
    </main>
  );
};

export default Index;
