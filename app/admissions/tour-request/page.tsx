"use client";

import { PageHero } from "@/components/custom/page-hero";
import { ScheduleVisitForm } from "@/components/custom/schedule-visit-form";
import { SEO } from "@/components/custom/seo";
import { motion, useInView } from "framer-motion";
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
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{
        duration: 0.3,
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
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function TourRequestPage() {
  return (
    <div className="bg-white">
      <SEO
        title="Schedule a Tour"
        description="Visit Concordia Classical Academy and experience our classical Lutheran education firsthand. Schedule a campus tour to meet our teachers, observe classes, and learn about our programs."
        keywords={[
          "school tour",
          "campus visit",
          "schedule visit",
          "school tour request",
          "admissions tour",
          "visit campus",
          "school visit",
          "tour scheduling",
          "campus tour",
          "school observation",
        ]}
        canonicalUrl="/admissions/tour-request"
      />
      <PageHero
        title="Schedule a Tour"
        subtitle="Experience our classical Lutheran education firsthand"
        backgroundImage="/ss_49.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <AnimatedSection delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-serif text-primary mb-4">
              Visit Our Campus
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We invite you to experience the unique atmosphere of Concordia
              Classical Academy. During your visit, you&apos;ll have the
              opportunity to:
            </p>
            <ul className="text-left text-slate-600 space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Tour our classrooms and facilities
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Observe our classical education approach in action
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Meet our dedicated teachers and staff
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Learn about our Christ-centered curriculum
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Ask questions about our programs and admissions process
              </li>
            </ul>
          </div>
        </AnimatedSection>

        {/* Form Section */}
        <AnimatedSection delay={0.2}>
          <div className="bg-primary/5 rounded-lg p-8">
            <div className="max-w-2xl mx-auto">
              <ScheduleVisitForm
                trigger={
                  <button className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg cursor-pointer">
                    Schedule Your Visit Now
                  </button>
                }
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Additional Information */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.4}>
              <div className="bg-white border border-slate-200 rounded-lg p-6 h-full flex flex-col">
                <h3 className="font-serif text-primary text-lg mb-3">
                  Best Times to Visit
                </h3>
                <p className="text-slate-600 flex-grow">
                  School tours are typically scheduled during regular school
                  hours, allowing you to see our vibrant learning environment in
                  action. We&apos;ll work with your schedule to find the best
                  time for your visit.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.5}>
              <div className="bg-white border border-slate-200 rounded-lg p-6 h-full flex flex-col">
                <h3 className="font-serif text-primary text-lg mb-3">
                  What to Expect
                </h3>
                <p className="text-slate-600 flex-grow">
                  Your visit will typically last about an hour, during which
                  you&apos;ll tour the campus, observe classes, and have time
                  for questions with our staff.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
