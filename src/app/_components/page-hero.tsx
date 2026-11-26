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
      className="nebula-backdrop grid min-h-[400px] place-items-center border-b border-line py-9 text-center"
    >
      <div className="wrap">
        <h1
          className="text-[clamp(3.35rem,7vw,6.75rem)] leading-[0.94] text-balance [text-shadow:0_3px_30px_var(--hero-text-shadow)] tracking-[-0.03em]"
          id="page-title"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
