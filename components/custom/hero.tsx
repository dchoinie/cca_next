"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cca-mn.client.renweb.com/oa/index.cfm?memberid=16976"
              >
                Apply Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-secondary/20 text-lg px-8"
            >
              <Link href="/about">About CCA</Link>
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative rounded-lg overflow-hidden shadow-xl bg-primary/5">
          <video
            ref={videoRef}
            controls
            className="w-full aspect-video object-cover"
            poster="/poster.png"
          >
            <source src="/promo_2025_long.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
