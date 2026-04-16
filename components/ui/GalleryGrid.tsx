"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category?: string;
  title?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  showFilter?: boolean;
  categories?: { value: string; label: string }[];
}

export default function GalleryGrid({
  items,
  showFilter = false,
  categories = [],
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("vse");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allCategories = [
    { value: "vse", label: "Vše" },
    ...categories,
  ];

  const filtered =
    activeCategory === "vse"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div>
      {showFilter && categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center" role="group" aria-label="Filtrovat realizace">
          {allCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? "bg-accent text-white"
                  : "bg-white text-foreground border border-gray-200 hover:border-accent hover:text-accent"
              }`}
              aria-pressed={activeCategory === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-lg group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Zobrazit: ${item.title || item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <svg
                width="40"
                height="40"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
                <path d="M11 8v6M8 11h6" />
              </svg>
            </div>
            {item.title && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
