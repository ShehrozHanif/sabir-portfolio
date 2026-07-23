import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "text-center mx-auto" : ""} max-w-2xl ${className}`}
    >
      <Reveal>
        <div
          className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-gold/50" aria-hidden />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] mt-4 text-balance">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
