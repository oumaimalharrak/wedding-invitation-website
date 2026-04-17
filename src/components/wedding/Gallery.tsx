import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { SectionTitle } from "./SectionTitle";

const images = [
  { src: g1, alt: "Ceremonia con pétalos de rosa en el pasillo", span: "md:row-span-2" },
  { src: g2, alt: "Mesa de banquete con rosas y velas" },
  { src: g3, alt: "Ramo de novia con peonías y rosas" },
  { src: g4, alt: "Finca de piedra al atardecer con luces", span: "md:col-span-2" },
];

export const Gallery = () => (
  <section id="galeria" className="py-24 md:py-32 px-6 bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionTitle eyebrow="Recuerdos" title="Galería" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 auto-rows-[220px] md:auto-rows-[280px]">
        {images.map((img, i) => (
          <div key={i} className={`overflow-hidden rounded-sm group ${img.span ?? ""}`}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
