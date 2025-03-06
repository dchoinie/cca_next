"use client";

import Image from "next/image";
import Link from "next/link";

export function ClassicalEducation() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-primary mb-3 font-serif">
            What is Classical Education?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
            A Time-Tested Approach to Learning
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-3">
                Classical Lutheran education can be defined as the classical
                liberal arts with Lutheran catechesis. Dr. Gene Edward Veith has
                suggested that &quot;The liberal arts can equip a child for
                effective service in the world; catechesis can equip a child for
                everlasting life.&quot;
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                The liberal arts cultivate the student&apos;s mind and character
                with academic rigor, tools for learning, and formative content.
                Lutheran catechesis instructs and nurtures matters of the soul
                through the Holy Scriptures, the Lutheran confessions, and the
                liturgy and hymnody of the Church.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With the Seven Liberal Arts, the three sciences: moral, natural
                and theological, and the Small Catechism&apos;s Six Chief Parts,
                classical Lutheran education prepares servant leaders for church
                and world.
              </p>
            </div>

            {/* Quote */}
            <div className="p-6">
              <p className="text-gray-700 italic text-lg">
                &quot;Simply Classical: A Beautiful Education for Any
                Child&quot;
              </p>
              <p className="text-gray-600 mt-2">- Cheryl Swope, M.Ed</p>
            </div>

            {/* Learn More Button */}
            <Link
              href="/academics/what-is-classical-education/"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Learn More About Classical Education
            </Link>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ss_13.png"
                alt="Classical Education in Action"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/ss_18.png"
                alt="Lutheran Education"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
