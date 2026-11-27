import Link from "next/link";
import type { ComponentProps } from "react";

const iconPaths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  calendar:
    "M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2-2v4m10-4v4M3 10h18m-12 5 2 2 4-4",
  sparkles:
    "M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3ZM5 2v4M3 4h4m12 13v4m-2-2h4",
  cart: "M2 3h3l2.5 11.5a2 2 0 0 0 2 1.5h8.8a2 2 0 0 0 2-1.6L22 7H6m4 13a1 1 0 1 0 0 .01m8-.01a1 1 0 1 0 0 .01",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M18 6 6 18",
  message:
    "M20 11.5a7.5 7.5 0 0 1-7.5 7.5H4l1.7-3.4A7.5 7.5 0 1 1 20 11.5ZM9 12h7",
  bag: "M5 8h14l2 13H3L5 8Zm4 1V6a3 3 0 0 1 6 0v3",
  refresh: "M20 7v5h-5m5 0a8 8 0 1 1-2.3-5.7L20 12",
  previous: "m15 18-6-6 6-6",
  next: "m9 6 6 6-6 6",
};

type ButtonStyle = {
  variant?: "primary" | "outline";
  icon?: keyof typeof iconPaths;
  className?: string;
};

function ButtonIcon({ icon }: { icon: keyof typeof iconPaths }) {
  return (
    <svg
      aria-hidden="true"
      className="button-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path d={iconPaths[icon]} />
    </svg>
  );
}

function buttonClass(variant: ButtonStyle["variant"], className?: string) {
  return `button button-${variant ?? "primary"}${className ? ` ${className}` : ""}`;
}

export function Button({
  variant,
  icon = "arrow",
  className,
  children,
  type = "button",
  ...props
}: ComponentProps<"button"> & ButtonStyle) {
  return (
    <button {...props} className={buttonClass(variant, className)} type={type}>
      <ButtonIcon icon={icon} />
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  icon = "arrow",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & ButtonStyle) {
  return (
    <Link {...props} className={buttonClass(variant, className)}>
      <ButtonIcon icon={icon} />
      {children}
    </Link>
  );
}
