"use client";

import Image from "next/image";

export function ThemeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-primary mb-3 font-serif">
            Our School Theme
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
            2024-2025 Academic Year
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Theme Image */}
          <div>
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/24_25_theme.jpg"
                alt="2024-2025 School Year Theme - Endure"
                fill
                className="object-contain bg-white"
                priority
              />
            </div>
          </div>

          {/* Full School Photo */}
          <div>
            <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/cca_2024_all_school.jpg"
                alt="Concordia Classical Academy - All School Photo 2024"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-600 italic font-light">
              Our Concordia Classical Academy family - united in faith,
              learning, and purpose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
