"use client";

/**
 * Brands component displays a horizontal marquee of brand names Mohan Ram has
 * collaborated with. The animation loops infinitely thanks to the custom
 * `animate-marquee` class defined in globals.css.
 */
export default function Brands() {
  const brands = ['IshqMe', 'KCN Realty', 'Wear Your Feeling', 'Cocomo'];
  // Duplicate the list to create a seamless loop
  const loop = [...brands, ...brands];
  return (
    <section className="bg-neutral-100 dark:bg-neutral-800 py-12" id="brands">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee items-center">
          {loop.map((brand, idx) => (
            <span
              key={idx}
              className="mx-6 text-xl font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wide hover:text-gold transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
