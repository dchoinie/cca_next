"use client";

import Image from "next/image";
import { PageHero } from "@/components/custom/page-hero";
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
  direction = "left",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const xOffset = direction === "left" ? -20 : 20;

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-sm"
      initial={{ opacity: 0, x: xOffset }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function Affiliation() {
  return (
    <div className="bg-white">
      <SEO
        title="Church Affiliation"
        description="Learn about Concordia Classical Academy's partnership with Good Shepherd Lutheran Church and our connection to the Lutheran Church—Missouri Synod (LCMS)."
        keywords={[
          "Lutheran church affiliation",
          "Good Shepherd Lutheran Church",
          "LCMS school",
          "Lutheran partnership",
          "church school",
          "Lutheran education",
          "Missouri Synod",
          "Christian partnership",
          "Lutheran community",
          "church campus",
        ]}
        canonicalUrl="/about/affiliation"
      />
      <PageHero
        title="Church Affiliation"
        subtitle="Connected in faith and education with Good Shepherd Lutheran Church"
        backgroundImage="/ss_52.png"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Church Connection Section */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/church_exterior.jpg"
                  alt="Good Shepherd Lutheran Church"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Good Shepherd Lutheran Church
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Concordia Classical Academy operates in close partnership with
                Good Shepherd Lutheran Church, creating a unified community of
                faith and learning. Our shared campus allows for daily
                integration of faith, education, and community life.
              </p>
              <p className="text-slate-600 leading-relaxed">
                This partnership strengthens both our educational mission and
                our spiritual foundation, providing students with a rich
                environment where academic excellence and Christian faith go
                hand in hand.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* LCMS Section */}
        <AnimatedSection delay={0.4}>
          <div className="bg-primary/5 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-serif text-primary mb-6">
                  Lutheran Church—Missouri Synod
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  As a congregation of The Lutheran Church—Missouri Synod
                  (LCMS), Good Shepherd Lutheran Church and Concordia Classical
                  Academy are part of a larger community of faith that spans the
                  globe. The LCMS is a mission-oriented, Bible-based,
                  confessional Christian denomination.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <AnimatedCard delay={0.6} direction="left">
                    <h3 className="font-medium text-primary mb-2">
                      Biblical Foundation
                    </h3>
                    <p className="text-sm text-slate-600">
                      Committed to the Bible as the inspired and inerrant Word
                      of God
                    </p>
                  </AnimatedCard>
                  <AnimatedCard delay={0.8} direction="right">
                    <h3 className="font-medium text-primary mb-2">
                      Rich Heritage
                    </h3>
                    <p className="text-sm text-slate-600">
                      Over 175 years of Lutheran education excellence in America
                    </p>
                  </AnimatedCard>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Through this affiliation, our students benefit from a strong
                  theological foundation and a connection to a worldwide
                  community of Lutheran schools and churches.
                </p>
              </div>
              <div className="w-full md:w-1/3">
                <div className="relative aspect-16/9 rounded-lg overflow-hidden bg-white p-8 shadow-lg">
                  <Image
                    src="/lcms_logo.jpg"
                    alt="LCMS Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection delay={0.6}>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-serif text-primary mb-6">
              Join Us for Worship
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              We invite you to join us for worship services and become part of
              our church community. Experience the warmth of Christian
              fellowship and the richness of Lutheran worship.
            </p>
            <motion.a
              href="http://www.goodshepherdmankato.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Church Website
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
