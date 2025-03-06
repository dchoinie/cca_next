"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "strings-1",
    title: "Strings Program",
    description:
      "Students develop musical excellence through our comprehensive strings program.",
    image: "/ss_34.png",
    category: "arts",
  },
  {
    id: "strings-2",
    title: "Orchestra Performance",
    description:
      "Regular performances showcase our students' musical achievements.",
    image: "/ss_29.png",
    category: "arts",
  },
  {
    id: "chapel-1",
    title: "Daily Chapel",
    description: "Students gather daily for worship and spiritual growth.",
    image: "/ss_21.png",
    category: "spiritual",
  },
  {
    id: "chapel-2",
    title: "Chapel Families",
    description: "Multi-age groups foster mentorship and community.",
    image: "/ss_19.png",
    category: "spiritual",
  },
  {
    id: "christian-ed-1",
    title: "Christian Education",
    description: "Faith is integrated throughout all aspects of learning.",
    image: "/ss_17.png",
    category: "spiritual",
  },
  {
    id: "grammar-1",
    title: "Grammar Stage",
    description: "Building strong foundations in language and knowledge.",
    image: "/ss_46.png",
    category: "academic",
  },
  {
    id: "logic-1",
    title: "Logic Stage",
    description: "Developing critical thinking and analytical skills.",
    image: "/ss_48.png",
    category: "academic",
  },
  {
    id: "rhetoric-1",
    title: "Rhetoric Stage",
    description: "Mastering the art of expression and persuasion.",
    image: "/ss_50.png",
    category: "academic",
  },
  {
    id: "faculty-1",
    title: "Dedicated Faculty",
    description:
      "Our experienced teachers guide students in their educational journey.",
    image: "/ss_15.png",
    category: "faculty",
  },
  {
    id: "singing-1",
    title: "A Singing School",
    description: "Music and song are integral to our daily life.",
    image: "/ss_16.png",
    category: "arts",
  },
  {
    id: "singing-2",
    title: "Choral Excellence",
    description:
      "Students develop their voices through regular choral practice.",
    image: "/ss_24.png",
    category: "arts",
  },
  {
    id: "community-1",
    title: "School Community",
    description:
      "Building lasting relationships in a Christ-centered environment.",
    image: "/ss_30.png",
    category: "community",
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "academic", name: "Classical Education" },
  { id: "spiritual", name: "Spiritual Life" },
  { id: "arts", name: "Arts & Music" },
  { id: "faculty", name: "Faculty" },
  { id: "community", name: "Community" },
];

export function StudentLife() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-primary mb-3 font-serif">
            Life at CCA
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light tracking-wide">
            Experience the vibrant community of Concordia Classical Academy
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
