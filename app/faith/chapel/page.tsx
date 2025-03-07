"use client";

import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";
import Image from "next/image";
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

export default function ChapelPage() {
  return (
    <div className="bg-white">
      <SEO
        title="Daily Chapel"
        description="Experience daily worship and spiritual growth at Concordia Classical Academy's chapel services. Learn about our Lutheran worship practices and how we start each day in God's Word."
        keywords={[
          "daily chapel",
          "Lutheran worship",
          "school chapel",
          "morning worship",
          "Christian worship",
          "chapel service",
          "student worship",
          "Lutheran liturgy",
          "chapel schedule",
          "school prayer",
        ]}
        canonicalUrl="/faith/chapel"
      />
      <PageHero
        title="Daily Chapel"
        subtitle="Starting each day in worship and prayer"
        backgroundImage="/ss_30.png"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-serif text-primary mb-6">
                The Heart of Our Day
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Daily chapel is a cornerstone of life at Concordia Classical
                Academy. It&apos;s a time when our entire school community comes
                together to begin our day in God&apos;s Word, joining in prayer
                and praise.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Led by our pastors and teachers, chapel services include hymn
                singing, Scripture readings, and messages that connect
                God&apos;s Word to our students&apos; daily lives. These
                services help build a strong foundation of faith while fostering
                a sense of community among our students, faculty, and staff.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/ss_20.png"
                alt="Students participating in chapel service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Schedule Section */}
        <AnimatedSection delay={0.2}>
          <div className="bg-primary/5 rounded-lg p-12 mb-24">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif text-primary text-center mb-8">
                Chapel Schedule
              </h2>
              <div className="grid gap-6">
                <AnimatedCard delay={0.3}>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-4 items-center">
                      <h3 className="font-serif text-xl text-primary">
                        Monday
                      </h3>
                      <p className="text-slate-600 md:text-right">
                        8:15 - 8:30 AM
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
                <AnimatedCard delay={0.4}>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-4 items-center">
                      <h3 className="font-serif text-xl text-primary">
                        Tuesday
                      </h3>
                      <p className="text-slate-600 md:text-right">
                        8:15 - 8:30 AM
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
                <AnimatedCard delay={0.5}>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-4 items-center">
                      <h3 className="font-serif text-xl text-primary">
                        Wednesday
                      </h3>
                      <p className="text-slate-600 md:text-right">
                        8:30 - 9:00 AM
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
                <AnimatedCard delay={0.6}>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-4 items-center">
                      <h3 className="font-serif text-xl text-primary">
                        Thursday
                      </h3>
                      <p className="text-slate-600 md:text-right">
                        8:15 - 8:30 AM
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
                <AnimatedCard delay={0.7}>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-4 items-center">
                      <h3 className="font-serif text-xl text-primary">
                        Friday
                      </h3>
                      <p className="text-slate-600 md:text-right">
                        2:00 - 2:20 PM
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Welcome Section */}
        <AnimatedSection delay={0.8}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/ss_28.png"
                alt="Chapel community gathering"
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Join Us for Chapel
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our chapel services aren&apos;t just for students – they&apos;re
                open to our entire community. We warmly welcome parents, family
                members, and friends to join us for any chapel service
                throughout the week.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you&apos;re a prospective family wanting to experience
                our community, a parent hoping to share in your child&apos;s
                spiritual growth, or simply someone seeking a moment of worship
                during your day, you&apos;ll find a welcoming place in our
                chapel services.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
