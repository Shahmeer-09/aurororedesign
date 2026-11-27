export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section
      aria-labelledby="page-title"
      className="border-b border-line bg-surface"
    >
      <div className="wrap py-14 md:py-20">
        <h1
          className="max-w-[22ch] text-[clamp(3rem,7vw,5.75rem)] leading-none text-balance tracking-[-0.03em]"
          id="page-title"
        >
          {title}
        </h1>
        {subtitle && <p className="mt-4 text-base text-muted">{subtitle}</p>}
      </div>
    </section>
  );
}
