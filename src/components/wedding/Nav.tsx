import { useEffect, useState } from "react";


export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!scrolled) return null;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur border-b border-border transition-all">
      <nav className="max-w-6xl mx-auto flex items-center px-6 py-4">
        <a href="#home" className="font-serif-display italic text-xl text-primary">
          O & S
        </a>
      </nav>
    </header>
  );
};
