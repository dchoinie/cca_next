"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { admissionsUrl } from "@/constants";

export function Hero() {
  return (
    <div className="min-h-screen bg-primary/5 pt-12">
      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        {/* Text Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Concordia Classical Academy
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-slate-700">
            Concordia Classical Academy uses God&apos;s Word in a
            Christ-centered education to assist families in training students
            for Christian lives on earth and for eternity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8"
            >
              <a target="_blank" rel="noopener noreferrer" href={admissionsUrl}>
                Apply Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-secondary/20 text-lg px-8"
            >
              <Link href="/about/mission">About CCA</Link>
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative rounded-lg overflow-hidden shadow-xl bg-primary/5">
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YVG90KPfaEA?si=4qWUdu7dy35XDrAD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
