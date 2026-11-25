import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonStyle = {
  variant?: "primary" | "outline";
  className?: string;
};

function buttonClass(variant: ButtonStyle["variant"], className?: string) {
  return `button button-${variant ?? "primary"}${className ? ` ${className}` : ""}`;
}

export function Button({
  variant,
  className,
  type = "button",
  ...props
}: ComponentProps<"button"> & ButtonStyle) {
  return (
    <button
      {...props}
      className={buttonClass(variant, className)}
      type={type}
    />
  );
}

export function ButtonLink({
  variant,
  className,
  ...props
}: ComponentProps<typeof Link> & ButtonStyle) {
  return <Link {...props} className={buttonClass(variant, className)} />;
}
