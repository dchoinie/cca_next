"use client";

import Image from "next/image";

export function ThemeSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-primary mb-3 font-serif">
            Our School Theme
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
            2025-2026 Academic Year
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          {/* Left: Image with caption */}
          <div className="flex flex-col items-center md:items-end">
            <div className="relative w-full max-w-2xl aspect-[16/9] rounded-lg overflow-hidden shadow-2xl border border-white/60 backdrop-blur-md">
              <Image
                src="/cca_2024_all_school.jpg"
                alt="Concordia Classical Academy - All School Photo 2024"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-600 italic font-light max-w-md">
              Our Concordia Classical Academy family - united in faith,
              learning, and purpose
            </p>
          </div>

          {/* Divider for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent z-10" />

          {/* Right: Theme title, icon, and Psalm in a glass card */}
          <div className="flex flex-col items-center md:items-start z-20">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-serif text-center md:text-left">
              &quot;Make a Joyful Noise to the Lord&quot;
            </h2>
            <div className="bg-white/60 backdrop-blur-md border border-primary/10 rounded-lg shadow-lg p-6 w-full max-w-lg">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed italic">
                <span className="font-semibold text-primary">Psalm 98:1-4</span>
                <br />
                &quot;1 Oh sing to the Lord a new song, for he has done
                marvelous things! His right hand and his holy arm have worked
                salvation for him. <br />2 The Lord has made known his
                salvation; he has revealed his righteousness in the sight of the
                nations. <br />3 He has remembered his steadfast love and
                faithfulness to the house of Israel. All the ends of the earth
                have seen the salvation of our God. <br />4 Make a joyful noise
                to the Lord, all the earth; break forth into joyous song and
                sing praises!&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
