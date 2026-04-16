import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  arrow?: boolean;
  "aria-label"?: string;
}

const variants = {
  primary: [
    "relative overflow-hidden",
    "bg-accent text-white border border-accent",
    "before:absolute before:inset-0 before:bg-accent-dark before:translate-y-full",
    "before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
    "hover:before:translate-y-0",
  ].join(" "),

  outline: [
    "relative overflow-hidden",
    "bg-transparent text-white border border-white/70",
    "before:absolute before:inset-0 before:bg-white before:translate-y-full",
    "before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
    "hover:before:translate-y-0 hover:text-primary hover:border-white",
  ].join(" "),

  dark: [
    "relative overflow-hidden",
    "bg-primary text-white border border-primary",
    "before:absolute before:inset-0 before:bg-accent before:translate-y-full",
    "before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
    "hover:before:translate-y-0",
  ].join(" "),

  ghost: [
    "bg-transparent text-foreground",
    "border border-stone",
    "hover:border-accent hover:text-accent",
    "transition-colors duration-200",
  ].join(" "),
};

const sizes = {
  sm: "px-5 py-2.5 text-xs tracking-[0.12em]",
  md: "px-7 py-3.5 text-xs tracking-[0.12em]",
  lg: "px-9 py-4 text-sm tracking-[0.12em]",
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  arrow = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2",
    "font-semibold uppercase",
    "transition-colors duration-300",
    "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    disabled && "opacity-40 cursor-not-allowed pointer-events-none",
    className
  );

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow && (
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={clsx(classes, "group")} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(classes, "group")}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
}
