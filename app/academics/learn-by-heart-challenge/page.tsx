"use client";

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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
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
      transition={{ delay: delay, duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function LearnByHeartPage() {
  return (
    <div className="bg-white">
      <SEO
        title="Learn By Heart Challenge"
        description="Discover our Lutheran catechesis and Scripture memory program. Building a strong foundation of faith through memorization of God's Word and Lutheran doctrine."
        keywords={[
          "Lutheran catechesis",
          "Scripture memory",
          "Bible memorization",
          "Lutheran education",
          "catechism learning",
          "Christian memory work",
          "Lutheran doctrine",
          "faith education",
          "Bible study",
          "Lutheran teaching",
        ]}
        canonicalUrl="/academics/learn-by-heart-challenge"
      />
      <PageHero
        title="Learn By Heart Challenge"
        subtitle="Building a foundation of faith through Lutheran catechesis and Scripture memory"
        backgroundImage="/ss_8.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <AnimatedSection delay={0.1}>
          <div className="prose prose-slate max-w-none mb-16">
            <p className="text-slate-600 leading-relaxed mb-3">
              A hallmark of Lutheran catechesis is memory work. This is an
              important piece in our goal to teach our students here what is
              true, what is good, and what is beautiful.
            </p>
            <p className="text-slate-600 leading-relaxed">
              As we joyfully take up the task our God has given us to do, to
              pass on this saving faith in Jesus, once delivered to the saint
              (Jude 1:3) this framework is specifically designed to allow
              teachers to execute the plan in the best way according to age and
              abilities in the classroom. The ultimate goal is for our students
              to have tucked away in their hearts the very promises of Christ,
              so that, when the storms of life hit them, they will find that the
              Word of God dwells richly with them. (Philippians 4:7)
            </p>
          </div>
        </AnimatedSection>

        {/* Translation Note */}
        <AnimatedSection delay={0.2}>
          <div className="bg-primary/5 rounded-lg p-8 mb-16">
            <p className="text-slate-600">
              To ensure continuity through all years of education, each
              classroom will use the 1986 version of Luther&apos;s Small
              Catechism, and the ESV translation of the Bible.
            </p>
          </div>
        </AnimatedSection>

        {/* Grade Levels */}
        <div className="space-y-16">
          {/* Kindergarten */}
          <AnimatedSection delay={0.3}>
            <div>
              <h2 className="text-2xl font-serif text-primary mb-6">
                By the end of Kindergarten
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <AnimatedCard delay={0.4}>
                  <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <h3 className="font-serif text-primary text-lg mb-4">
                      From the Catechism
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Ten Commandments (excluding explanations)
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        All three articles of the Apostle&apos;s Creed
                        (excluding explanations)
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Lord&apos;s Prayer (excluding explanations)
                      </li>
                    </ul>
                  </div>
                </AnimatedCard>
                <AnimatedCard delay={0.5}>
                  <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <h3 className="font-serif text-primary text-lg mb-4">
                      Bible Verses
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Proverbs 3:5
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>1 John 1:8-9
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Psalm 118:1
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Psalm 34:13
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Psalm 119:105
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Matthew 11:28
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Ephesians 6:1
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        John 3:16
                      </li>
                    </ul>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </AnimatedSection>

          {/* Second Grade */}
          <AnimatedSection delay={0.6}>
            <div>
              <h2 className="text-2xl font-serif text-primary mb-6">
                By the end of Second Grade
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <AnimatedCard delay={0.7}>
                  <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <h3 className="font-serif text-primary text-lg mb-4">
                      From the Catechism
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Ten Commandments with explanations
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Apostle&apos;s Creed with explanations
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Lord&apos;s Prayer with explanations
                      </li>
                    </ul>
                  </div>
                </AnimatedCard>
                <AnimatedCard delay={0.8}>
                  <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <h3 className="font-serif text-primary text-lg mb-4">
                      Bible Verses
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Psalm 50:15
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>1 John 1:7
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>1
                        Corinthians 13:6
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Genesis 1:27
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Hebrews 13:16
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>1 Peter 4:8
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        John 3:16
                      </li>
                    </ul>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </AnimatedSection>

          {/* Fourth Grade */}
          <AnimatedSection delay={0.9}>
            <div>
              <h2 className="text-2xl font-serif text-primary mb-6">
                By the end of Fourth Grade
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <AnimatedCard delay={1}>
                  <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <h3 className="font-serif text-primary text-lg mb-4">
                      From the Catechism
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Sacrament of Holy Baptism with explanation
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Confession and the office of the keys
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Sacrament of the Altar with explanation
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The books of the Bible
                      </li>
                    </ul>
                  </div>
                </AnimatedCard>
                <AnimatedCard delay={1.1}>
                  <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <h3 className="font-serif text-primary text-lg mb-4">
                      Bible Verses
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Psalm 37:4
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>1 Peter 4:10
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>1 John 1:8-9
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Romans 5:19
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Galatians 3:13
                      </li>
                    </ul>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </AnimatedSection>

          {/* Sixth Grade */}
          <AnimatedSection delay={1.2}>
            <div>
              <h2 className="text-2xl font-serif text-primary mb-6">
                By the end of Sixth Grade
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <AnimatedCard delay={1.3}>
                  <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <h3 className="font-serif text-primary text-lg mb-4">
                      From the Catechism
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Ten Commandments with explanations
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Apostle&apos;s Creed with explanations
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Lord&apos;s Prayer with explanations
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Sacrament of Holy Baptism with explanation
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Confession and the office of the keys
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The Sacrament of the Altar with explanation
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        The books of the Bible
                      </li>
                    </ul>
                  </div>
                </AnimatedCard>
                <AnimatedCard delay={1.4}>
                  <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <h3 className="font-serif text-primary text-lg mb-4">
                      Bible Verses
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Psalm 19:1
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Psalm 139:13-14
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        John 1:14
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>2
                        Corinthians 5:21
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        James 1:2-3
                      </li>
                    </ul>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </AnimatedSection>

          {/* 7th and 8th Grade Note */}
          <AnimatedSection delay={1.5}>
            <div className="bg-primary/5 rounded-lg p-8">
              <h2 className="text-2xl font-serif text-primary mb-4">
                Seventh and Eighth Grade
              </h2>
              <p className="text-slate-600">
                Learn by heart for seventh and eighth grade will be incorporated
                into the systematic theology course taught by the pastor.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
