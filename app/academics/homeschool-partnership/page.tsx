"use client";

import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Music,
  Users,
  Utensils,
  ShieldCheck,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

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
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HomeschoolPartnershipPage() {
  return (
    <div className="bg-white">
      <SEO
        title="Homeschool Partnership"
        description="Homeschool families are warmly invited to partner with Concordia Classical Academy for academic classes, music, and after-school activities in a Christ-centered, classical environment."
        keywords={[
          "homeschool partnership",
          "homeschool classes",
          "classical education homeschool",
          "Christian homeschool",
          "CCA homeschool",
          "homeschool enrichment",
          "Concordia Classical Academy homeschool",
          "homeschool co-op Mankato",
        ]}
        canonicalUrl="/academics/homeschool-partnership"
      />
      <PageHero
        title="Homeschool Partnership"
        subtitle="Walking alongside families in Christ-centered, classical education"
        backgroundImage="/ss_14.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Scripture & Mission */}
        <AnimatedSection delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <blockquote className="text-xl md:text-2xl font-serif text-primary italic leading-relaxed mb-3">
              &ldquo;Children are a gift from the Lord...&rdquo;
            </blockquote>
            <p className="text-sm text-slate-500 mb-8">— Psalm 127:3–5</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At Concordia Classical Academy (CCA), we joyfully affirm that
              children are entrusted to parents, and families play a central
              role in their education and formation.
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-lg px-8 py-6">
              <p className="text-base text-slate-700 italic leading-relaxed">
                &ldquo;In partnership with families, we strive to help students
                grow in the grace and knowledge of our Lord Jesus Christ as they
                grow in body, mind, and spirit with truth, goodness, and
                beauty.&rdquo;
              </p>
              <p className="text-sm text-slate-500 mt-3">— CCA Mission Statement</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Welcome Invitation */}
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-serif text-primary mb-4">
              You Are Welcome Here
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Homeschool families in our community are warmly invited to partner
              with CCA in meaningful ways. If you are seeking Christ-centered,
              classical enrichment and community, we would love to walk
              alongside you.
            </p>
          </div>
        </AnimatedSection>

        {/* Partnership Opportunities Overview */}
        <AnimatedSection delay={0.3}>
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-primary text-center mb-8">
              Partnership Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-serif text-primary mb-2">
                  Academic Classes
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Enroll in individual subject courses alongside CCA students,
                  space permitting.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-border p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Music className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-serif text-primary mb-2">
                  Music Opportunities
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Join band, strings, or choir — music is central to CCA&apos;s
                  curriculum and worship life.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-border p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-serif text-primary mb-2">
                  Clubs &amp; Activities
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Participate in after-school clubs, activities, and limited
                  sports offerings each quarter.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Detailed Policy Section */}
        <AnimatedSection delay={0.35}>
          <div className="mb-6">
            <h2 className="text-2xl font-serif text-primary text-center mb-2">
              Partnership Policy Details
            </h2>
            <p className="text-center text-slate-500 text-sm mb-10">
              The following outlines program costs and expectations for
              homeschool students participating at CCA.
            </p>
          </div>
        </AnimatedSection>

        {/* Academic Classes */}
        <AnimatedSection delay={0.4}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary shrink-0" />
              <h3 className="text-xl font-serif text-primary">
                Academic Classes
              </h3>
            </div>
            <p className="text-slate-500 text-sm mb-4 italic">
              Space permitting
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-1">
                  5 Days / Week
                </p>
                <p className="text-2xl font-serif text-primary mb-2">
                  $900<span className="text-base font-sans text-slate-500">/year</span>
                </p>
                <p className="text-slate-600 text-sm">
                  Examples: Math, Science, History
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-1">
                  2 Days / Week
                </p>
                <p className="text-2xl font-serif text-primary mb-2">
                  $450<span className="text-base font-sans text-slate-500">/year</span>
                </p>
                <p className="text-slate-600 text-sm">
                  Examples: Music, Latin
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Music */}
        <AnimatedSection delay={0.45}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <Music className="h-6 w-6 text-primary shrink-0" />
              <h3 className="text-xl font-serif text-primary">
                Music Opportunities
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-2">
                  Band &amp; Strings
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Private lessons with CCA band or string instructors. Eligible
                  students may join ensemble groups. All lesson fees are paid
                  directly to instructors, not through CCA.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-1">Choir</p>
                <p className="text-2xl font-serif text-primary mb-2">
                  $50<span className="text-base font-sans text-slate-500">/year</span>
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Music is part of CCA&apos;s core curriculum and worship life.
                  Families must commit to participation in scheduled worship
                  services.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* After-School Activities */}
        <AnimatedSection delay={0.5}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <Users className="h-6 w-6 text-primary shrink-0" />
              <h3 className="text-xl font-serif text-primary">
                After-School Activities &amp; Clubs
              </h3>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-2">
                    Homeschool students may participate in CCA clubs, activities,
                    and limited sports offerings. Offerings vary by quarter.
                  </p>
                  <p className="text-slate-500 text-sm italic">
                    Contact us for current quarter offerings.
                  </p>
                </div>
                <div className="shrink-0 text-center">
                  <p className="text-2xl font-serif text-primary">
                    $50<span className="text-base font-sans text-slate-500">/activity</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Lunch Program */}
        <AnimatedSection delay={0.55}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <Utensils className="h-6 w-6 text-primary shrink-0" />
              <h3 className="text-xl font-serif text-primary">
                Lunch Program
              </h3>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 space-y-4">
              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="text-sm text-slate-500">Lunch (FACTS)</p>
                  <p className="text-xl font-serif text-primary">$3.00<span className="text-sm font-sans text-slate-500">/meal</span></p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Additional entrée</p>
                  <p className="text-xl font-serif text-primary">$1.25</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lunches may be ordered through the FACTS system and should be
                prepaid monthly by submitting payment to the school office. The
                monthly menu is available on the FACTS Family Portal and in
                printed form at the school office.
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-primary mb-2">
                  Bringing Lunch from Home
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Cold lunches from home are welcome</li>
                  <li>• Acceptable beverages: water or milk (milk available to all students)</li>
                  <li>• Microwave use by students is not permitted</li>
                  <li>• Students are expected to eat in a peaceful and respectful manner</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Conduct & Dress Code */}
        <AnimatedSection delay={0.6}>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
              <h3 className="text-xl font-serif text-primary">
                Conduct &amp; Dress Code Expectations
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-3">Conduct</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All homeschool students are expected to follow CCA&apos;s
                  policies regarding student conduct and behavior —
                  demonstrating respect, attentiveness, and Christ-centered
                  conduct while on campus or at CCA-sponsored events.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-3">Dress Code</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Homeschool students are expected to follow CCA dress code
                  standards. A CCA logo shirt is not required, but clothing
                  should be modest, neat, and consistent with CCA dress
                  guidelines. Specific expectations will be shared upon
                  enrollment.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA / Contact */}
        <AnimatedSection delay={0.65}>
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-serif text-primary mb-3">
              Ready to Partner with CCA?
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-xl mx-auto">
              We would love to connect with your family. Reach out to learn more
              about enrollment, current offerings, and how we can best support
              your homeschool journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="tel:5073047430"
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <Phone className="h-4 w-4" />
                507-304-7430
              </a>
              <span className="hidden sm:block text-slate-300">|</span>
              <a
                href="mailto:ccamankato@gmail.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <Mail className="h-4 w-4" />
                ccamankato@gmail.com
              </a>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
