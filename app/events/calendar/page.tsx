"use client";

import { PageHero } from "@/components/custom/page-hero";
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

export default function CalendarPage() {
  return (
    <div className="bg-white">
      <SEO
        title="School Calendar"
        description="Stay informed about Concordia Classical Academy's upcoming events, holidays, and important dates. Access our comprehensive school calendar for chapel services, special events, and academic schedules."
        keywords={[
          "school calendar",
          "school events",
          "academic calendar",
          "school schedule",
          "school holidays",
          "chapel services",
          "school activities",
          "event calendar",
          "school dates",
          "academic schedule",
        ]}
        canonicalUrl="/events/calendar"
      />
      <PageHero
        title="School Calendar"
        subtitle="Stay up to date with school events and activities"
        backgroundImage="/ss_25.png"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <AnimatedSection delay={0.1}>
          <div className="prose prose-slate max-w-3xl mx-auto text-center mb-16">
            <p className="text-slate-600 leading-relaxed">
              Our school calendar keeps you informed about upcoming events,
              holidays, and important dates. From chapel services to special
              events, you&apos;ll find everything you need to know to stay
              connected with our school community.
            </p>
          </div>
        </AnimatedSection>

        {/* Calendar Container */}
        <AnimatedSection delay={0.2}>
          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&title=Concordia%20Classical%20Academy&src=MDRkMWp2Nmk5ZGI2b2Y0Y3E0a2FnNjQ4N3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23AD1457"
                style={{ border: "solid 1px #777" }}
                className="w-full h-full"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Note Section */}
        <AnimatedSection delay={0.3}>
          <div className="bg-primary/5 rounded-lg p-8 max-w-3xl mx-auto text-center mt-16">
            <p className="text-slate-600">
              The calendar is regularly updated with new events and any schedule
              changes. For the most current information, please check back
              regularly or subscribe to the calendar using the button in the
              bottom right corner of the calendar.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
