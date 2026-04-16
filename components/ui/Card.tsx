import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

interface CardProps {
  href?: string;
  image?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  index?: number;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  href,
  image,
  imageAlt,
  title,
  description,
  index,
  className,
  children,
}: CardProps) {
  const num = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  const content = (
    <div
      className={clsx(
        "group relative flex flex-col bg-white",
        "border border-stone hover:border-accent/50",
        "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:-translate-y-1 hover:shadow-lift",
        "overflow-hidden",
        className
      )}
    >
      {/* Image */}
      {image && (
        <div className="relative h-60 overflow-hidden bg-stone flex-shrink-0">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle gradient at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        {/* Index + title row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-base font-semibold heading-serif text-primary leading-snug group-hover:text-accent transition-colors duration-200">
            {title}
          </h3>
          {num && (
            <span className="text-[11px] font-semibold text-muted tracking-widest pt-0.5 flex-shrink-0">
              {num}
            </span>
          )}
        </div>

        {description && (
          <p className="text-muted text-sm leading-relaxed flex-1">{description}</p>
        )}

        {children}

        {/* Arrow CTA */}
        {href && (
          <div className="mt-5 pt-4 border-t border-stone flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
              Zjistit více
            </span>
            <div className="w-7 h-7 border border-accent/40 flex items-center justify-center
                            group-hover:bg-accent group-hover:border-accent transition-all duration-200">
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                className="text-accent group-hover:text-white transition-colors"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
