"use client";

import { PageHero } from "@/components/custom/page-hero";
import { Clock } from "lucide-react";
import { SEO } from "@/components/custom/seo";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function HoursPage() {
  return (
    <div className="bg-white">
      <SEO
        title="School Hours"
        description="View Concordia Classical Academy's daily schedule, including regular school hours, morning care, and after-school care options for families."
        keywords={[
          "school hours",
          "school schedule",
          "morning care",
          "after school care",
          "extended care",
          "school day",
          "drop off time",
          "pick up time",
          "daily schedule",
          "school timing",
        ]}
        canonicalUrl="/about/hours"
      />
      <PageHero
        title="School Hours"
        subtitle="Daily schedule and extended care options for our families"
        backgroundImage="/ss_47.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-16">
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Concordia Classical Academy provides flexible scheduling options
              to accommodate working families, including morning and
              after-school care programs.
            </p>
          </div>
        </AnimatedSection>

        {/* Hours Grid */}
        <div className="grid gap-6">
          {/* School Day */}
          <AnimatedSection delay={0.4}>
            <div className="bg-primary/5 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-primary mb-2">
                    School Day
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Regular academic hours for all students
                  </p>
                  <div className="inline-block bg-white px-4 py-2 rounded-lg font-medium text-primary">
                    8:15 AM - 2:45 PM
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Extended Care Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Morning Care */}
            <AnimatedCard delay={0.6}>
              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif text-primary mb-2">
                      Morning Care
                    </h2>
                    <p className="text-slate-600 mb-4">
                      Early drop-off available
                    </p>
                    <div className="inline-block bg-primary/5 px-4 py-2 rounded-lg font-medium text-primary">
                      7:30 AM - 8:00 AM
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* After Care */}
            <AnimatedCard delay={0.8}>
              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif text-primary mb-2">
                      After Care
                    </h2>
                    <p className="text-slate-600 mb-4">
                      Extended supervision available
                    </p>
                    <div className="inline-block bg-primary/5 px-4 py-2 rounded-lg font-medium text-primary">
                      2:45 PM - 5:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Additional Information */}
          <AnimatedSection delay={1}>
            <div className="mt-8 bg-white border border-slate-200 rounded-lg p-8">
              <h2 className="text-xl font-serif text-primary mb-4">
                Important Notes
              </h2>
              <ul className="space-y-3 text-slate-600">
                <li>
                  • Students may arrive as early as 7:30 AM for morning care
                </li>
                <li>• School doors open for regular arrival at 8:00 AM</li>
                <li>• Classes begin promptly at 8:15 AM</li>
                <li>• After care program ends at 5:00 PM sharp</li>
                <li>
                  • Please contact the school office for extended care program
                  fees and registration
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
