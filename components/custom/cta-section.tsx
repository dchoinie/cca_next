"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ScheduleVisitForm } from "./schedule-visit-form";
import { admissionsUrl } from "@/constants";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/ss_6.png"
          alt="CCA Students"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Text */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src="/luther-rose.png"
                alt="Concordia Classical Academy Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-white text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-medium">
                Begin Your Classical Education Journey
              </h2>
              <p className="text-secondary text-lg my-1">
                Join our Christ-centered community of learners
              </p>
              <p className="text-white/90 text-md italic">
                Now accepting applications for the {new Date().getFullYear()}-
                {new Date().getFullYear() + 1} school year
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <ScheduleVisitForm
              trigger={
                <Button className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors text-lg whitespace-nowrap h-[58px] cursor-pointer">
                  Schedule a Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
            <Button
              asChild
              variant="outline"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 hover:text-slate-200 transition-colors text-lg whitespace-nowrap h-[58px]"
            >
              <a href={admissionsUrl} target="_blank" rel="noopener noreferrer">
                Apply Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
