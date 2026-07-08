"use client";

import Image from "next/image";
import { Music2, Quote } from "lucide-react";

const psalmVerses = [
  {
    number: 1,
    text: "Oh sing to the Lord a new song, for he has done marvelous things! His right hand and his holy arm have worked salvation for him.",
  },
  {
    number: 2,
    text: "The Lord has made known his salvation; he has revealed his righteousness in the sight of the nations.",
  },
  {
    number: 3,
    text: "He has remembered his steadfast love and faithfulness to the house of Israel. All the ends of the earth have seen the salvation of our God.",
  },
  {
    number: 4,
    text: "Make a joyful noise to the Lord, all the earth; break forth into joyous song and sing praises!",
  },
];

export function ThemeSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-primary text-xs md:text-sm font-semibold tracking-widest uppercase mb-4">
            <Music2 className="h-4 w-4" />
            2025-2026 Academic Year Theme
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-primary font-serif">
            Our School Theme
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="lg:col-span-3">
            <div className="relative">
              <div className="hidden md:block absolute -inset-3 rounded-2xl border-2 border-secondary/40" />
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/cca_2024_all_school.jpg"
                  alt="Concordia Classical Academy - All School Photo 2024"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            </div>
            <p className="text-center mt-5 text-gray-600 italic font-light">
              Our Concordia Classical Academy family - united in faith,
              learning, and purpose
            </p>
          </div>

          {/* Theme title and Psalm card */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-5 font-serif text-center lg:text-left leading-snug">
              &quot;Make a Joyful Noise to the Lord&quot;
            </h3>

            <div className="relative bg-white rounded-2xl shadow-lg border border-primary/10 p-6 md:p-8">
              <div className="absolute -top-4 -left-4 h-9 w-9 rounded-full bg-secondary text-primary shadow-md flex items-center justify-center">
                <Quote className="h-4 w-4" fill="currentColor" />
              </div>

              <div className="space-y-3">
                {psalmVerses.map((verse) => (
                  <p
                    key={verse.number}
                    className="text-gray-700 text-base md:text-lg leading-relaxed italic"
                  >
                    <sup className="not-italic text-xs font-bold text-secondary mr-1.5">
                      {verse.number}
                    </sup>
                    {verse.text}
                  </p>
                ))}
              </div>

              <p className="mt-5 pt-4 border-t border-primary/10 text-sm font-semibold text-primary tracking-wide uppercase">
                Psalm 98:1-4
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
