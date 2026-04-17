interface Props {
  eyebrow?: string;
  title: string;
}

export const SectionTitle = ({ eyebrow, title }: Props) => (
  <div className="text-center mb-12 md:mb-16">
    {eyebrow && (
      <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-primary mb-4">
        {eyebrow}
      </p>
    )}
    <h2 className="font-serif-display text-4xl md:text-5xl text-foreground">
      {title}
    </h2>
    <div className="mx-auto mt-6 h-px w-16 bg-primary/40" />
  </div>
);
