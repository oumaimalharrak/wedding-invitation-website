import { useEffect, useState } from "react";

interface CountdownProps {
  target: Date;
}

const calc = (target: Date) => {
  const diff = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

export const Countdown = ({ target }: CountdownProps) => {
  const [t, setT] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setT(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { label: "Jours", value: t.d },
    { label: "Heures", value: t.h },
    { label: "Min", value: t.m },
    { label: "Sec", value: t.s },
  ];

  return (
    <div className="flex justify-center gap-6 md:gap-12">
      {items.map((it) => (
        <div key={it.label} className="text-center">
          <div className="font-serif-display text-4xl md:text-5xl text-foreground" style={{ color: "#ffffff" }}>
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] md:text-xs tracking-[0.25em] uppercase text-muted-foreground" style={{ color: "#ffffff" }}>
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
};
