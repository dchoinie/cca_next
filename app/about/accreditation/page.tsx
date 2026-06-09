"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Users, Award, GraduationCap } from "lucide-react";

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

const pillars = [
  {
    icon: BookOpen,
    title: "Accreditation",
    description:
      "The CCLE accredits Lutheran schools and guides them in understanding and implementing classical educational principles rooted in the liberal arts and Lutheran doctrine.",
  },
  {
    icon: GraduationCap,
    title: "Certification",
    description:
      "Teachers receive training to better understand classical education and become qualified classical educators in both homeschool and classroom settings.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "The CCLE facilitates networking through annual summer conferences and online activities, advancing the classical Lutheran education movement nationwide.",
  },
];

export default function Accreditation() {
  return (
    <div className="bg-white">
      <SEO
        title="CCLE Accreditation"
        description="Concordia Classical Academy is accredited through the Consortium for Classical Lutheran Education (CCLE), affirming our commitment to rigorous classical and Lutheran educational standards."
        keywords={[
          "CCLE accreditation",
          "Consortium for Classical Lutheran Education",
          "classical Lutheran accreditation",
          "accredited classical school",
          "Lutheran school accreditation",
          "classical education standards",
          "CCLE member school",
          "classical Christian accreditation",
        ]}
        canonicalUrl="/about/accreditation"
      />
      <PageHero
        title="CCLE Accreditation"
        subtitle="Accredited by the Consortium for Classical Lutheran Education"
        backgroundImage="/ss_2.png"
      />

      {/* Accreditation Badge + Intro */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden bg-white p-6 shadow-lg flex items-center justify-center">
                <Image
                  src="/ccle_3.avif"
                  alt="CCLE Accreditation Seal"
                  fill
                  sizes="256px"
                  className="object-contain p-4"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-widest">
                  Accredited Institution
                </span>
              </div>
              <h2 className="text-3xl font-serif text-primary mb-6">
                Concordia Classical Academy is Proud to be CCLE Accredited
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Concordia Classical Academy has earned accreditation through the
                Consortium for Classical Lutheran Education (CCLE). This
                accreditation is a formal recognition that our school meets the
                standards set for classical Lutheran education — uniting the
                classical liberal arts with faithful Lutheran catechesis.
              </p>
              <p className="text-slate-600 leading-relaxed">
                For families choosing CCA, CCLE accreditation is assurance that
                our program has been evaluated against established benchmarks and
                found to deliver the quality, integrity, and Christ-centered
                focus that defines classical Lutheran schooling.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* About CCLE */}
        <AnimatedSection delay={0.4}>
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-serif text-primary mb-6 text-center">
              About the CCLE
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl mx-auto text-center">
              The Consortium for Classical Lutheran Education partners with
              classical Lutheran schools, teachers, administrators, and
              homeschool families to support and advance the classical Lutheran
              education movement across the country.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {pillars.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  className="bg-white rounded-lg p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                >
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-primary mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Classical Lutheran Education */}
        <AnimatedSection delay={0.6}>
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif text-primary mb-6">
                Rooted in the Reformation
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                The CCLE draws its inspiration from the educational legacy of
                the Reformation. Martin Luther and Philip Melanchthon revived
                classical liberal arts education in the sixteenth century,
                establishing school models that shaped Christian education for
                centuries. The CCLE continues this tradition today.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Classical Lutheran education is defined as the classical liberal
                arts united with Lutheran catechesis — equipping students with
                the tools of learning while nurturing their souls through
                Scripture, the Lutheran confessions, and the liturgy and
                hymnody of the Church.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/ss_20.png"
                  alt="Classical Lutheran education in practice"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Trivium */}
        <AnimatedSection delay={0.7}>
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 mb-20">
            <h2 className="text-3xl font-serif text-primary mb-4 text-center">
              The Classical Trivium
            </h2>
            <p className="text-slate-600 mb-10 text-center max-w-2xl mx-auto leading-relaxed">
              CCLE-accredited schools are guided by the three stages of the
              classical Trivium, shaping students who communicate clearly,
              deliberate wisely, and act responsibly.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  stage: "Grammar",
                  grades: "K–4",
                  description:
                    "Building strong foundations through memorization, songs, and the fundamental content of each discipline.",
                },
                {
                  stage: "Logic",
                  grades: "5–6",
                  description:
                    "Developing critical thinking and analytical skills through formal logic, argumentation, and reasoned inquiry.",
                },
                {
                  stage: "Rhetoric",
                  grades: "7–8",
                  description:
                    "Mastering eloquent expression and persuasive communication, preparing students to articulate truth with clarity.",
                },
              ].map(({ stage, grades, description }, i) => (
                <motion.div
                  key={stage}
                  className="bg-white rounded-lg p-6 shadow-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                >
                  <p className="text-xs font-medium text-primary/60 uppercase tracking-widest mb-1">
                    {grades}
                  </p>
                  <h3 className="text-xl font-serif text-primary mb-3">
                    {stage}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.8}>
          <div className="text-center">
            <h2 className="text-3xl font-serif text-primary mb-4">
              Learn More About the CCLE
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Visit the CCLE website to explore their mission, member schools,
              and the standards behind classical Lutheran accreditation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.ccle.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit CCLE Website
              </motion.a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
