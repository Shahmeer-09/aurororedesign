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
      className="nebula-backdrop grid min-h-48 place-items-center border-b border-line py-9 text-center md:min-h-57 md:py-10"
    >
      <div className="wrap">
        <h1
          className="text-[clamp(2.65rem,5vw,4.6rem)] leading-[0.98] text-balance tracking-[-0.03em]"
          id="page-title"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
