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

export default function Mission() {
  return (
    <div className="bg-white">
      <SEO
        title="Our Mission"
        description="Discover Concordia Classical Academy's mission to help students grow in grace and knowledge of Christ through classical Lutheran education focused on truth, goodness, and beauty."
        keywords={[
          "school mission",
          "Christian education mission",
          "Lutheran school mission",
          "classical education goals",
          "educational philosophy",
          "Christ-centered education",
          "classical approach",
          "educational values",
          "school vision",
          "Lutheran education",
        ]}
        canonicalUrl="/about/mission"
      />
      <PageHero title="Our Mission" backgroundImage="/ss_2.png" />

      {/* Mission Statement Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <AnimatedSection delay={0.2}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-xl md:text-2xl lg:text-3xl font-serif text-primary leading-relaxed">
              At Concordia Classical Academy, in partnership with families, we
              strive to help students grow in the grace and knowledge of our
              Lord Jesus Christ as they grow in body, mind and spirit with
              truth, goodness and beauty.
            </p>
          </div>
        </AnimatedSection>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Left Column */}
          <AnimatedCard delay={0.4}>
            <div className="space-y-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/ss_20.png"
                  alt="Students in chapel"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-primary mb-4">
                  Christ-Centered Education
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Our foundation is built upon God&apos;s Word, ensuring that
                  every aspect of our education points to Christ. We believe
                  that true wisdom begins with the fear of the Lord, and we
                  integrate this truth into every subject and activity.
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Right Column */}
          <AnimatedCard delay={0.6}>
            <div className="space-y-8">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/ss_3.png"
                  alt="Classical education in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-primary mb-4">
                  Classical Approach
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Through the time-tested classical approach, we cultivate
                  wisdom and virtue in our students. Our curriculum embraces
                  truth, goodness, and beauty, helping students develop strong
                  character and critical thinking skills.
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Partnership Section */}
        <AnimatedSection delay={0.8}>
          <div className="mt-16 bg-primary/5 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src="/ss_42.png"
                    alt="Parent and teacher collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-serif text-primary mb-4">
                  Partnership with Families
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We recognize that parents are the primary educators of their
                  children. Our role is to come alongside families, supporting
                  and partnering with them in their God-given responsibility to
                  raise their children in the nurture and admonition of the
                  Lord.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Through regular communication, shared values, and mutual
                  commitment, we work together to provide an education that
                  nurtures the whole child - body, mind, and spirit.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
