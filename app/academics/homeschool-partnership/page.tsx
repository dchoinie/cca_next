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
  ClipboardList,
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
              &ldquo;Children are a gift from God, entrusted to parents.&rdquo;
            </blockquote>
            <p className="text-sm text-slate-500 mb-8">— Psalm 127:3–5</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At Concordia Classical Academy (CCA), we recognize that parents
              are the primary educators of their children and that education is
              most fruitful when schools and families work together in unity.
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-lg px-8 py-6">
              <p className="text-base text-slate-700 italic leading-relaxed">
                &ldquo;In partnership with families, we strive to help students
                grow in the grace and knowledge of our Lord Jesus Christ as they
                grow in body, mind, and spirit through truth, goodness, and
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
              CCA welcomes homeschool families to partner with our school
              community in a variety of ways. If you are seeking Christ-centered,
              classical enrichment and community, we would love to walk
              alongside you.
            </p>
          </div>
        </AnimatedSection>

        {/* Partnership Process */}
        <AnimatedSection delay={0.25}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList className="h-6 w-6 text-primary shrink-0" />
              <h2 className="text-2xl font-serif text-primary">
                Homeschool Partnership Process
              </h2>
            </div>
            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Initial Inquiry",
                  detail: "Student name(s) and age(s), desired classes or programs, and desired schedule/time commitment.",
                },
                {
                  step: "2",
                  title: "Campus Tour & Faculty Introduction",
                  detail: null,
                },
                {
                  step: "3",
                  title: "Family Interview",
                  detail: "This may be completed during the campus tour.",
                  italic: true,
                },
                {
                  step: "4",
                  title: "Submission of Application Materials",
                  detail: null,
                },
                {
                  step: "5",
                  title: "Upon Acceptance",
                  detail: "Completion of enrollment paperwork and payment of registration and book fees.",
                },
                {
                  step: "6",
                  title: "Welcome to the CCA Community!",
                  detail: null,
                },
              ].map(({ step, title, detail, italic }) => (
                <li
                  key={step}
                  className="flex gap-4 bg-slate-50 rounded-lg p-4 border border-slate-200"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                    {step}
                  </span>
                  <div>
                    <p className="font-semibold text-primary">{title}</p>
                    {detail && (
                      <p
                        className={`text-slate-600 text-sm mt-0.5 ${
                          italic ? "italic" : ""
                        }`}
                      >
                        {detail}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        {/* Partnership Commitments */}
        <AnimatedSection delay={0.3}>
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-primary mb-6">
              Homeschool Partnership Commitments
            </h2>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <p className="text-slate-700 text-sm font-medium mb-4">
                As a homeschool partner family:
              </p>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    Students in grades K–3 commit to attending at least one full
                    day per week (or two half days) for the full academic year.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    Students in grades 4–8 commit to enrolling in at least one
                    class for the full academic year.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    Families commit to participation for the entire academic
                    year.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    Students are eligible to attend school field trips, including
                    those that do not occur on their scheduled attendance day.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    Families may participate in school fundraisers and are
                    eligible for applicable school-wide incentives or rewards
                    connected to fundraising efforts (e.g., field trips, special
                    events, pizza parties, extra recess, etc.).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Policy Details header */}
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

        {/* Grades K–3 Enrollment Options */}
        <AnimatedSection delay={0.4}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="h-6 w-6 text-primary shrink-0" />
              <h3 className="text-xl font-serif text-primary">
                Grades K–3 Enrollment Options
              </h3>
            </div>
            <p className="text-slate-500 text-sm mb-4 italic">Space permitting</p>

            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 mb-4">
              <p className="font-semibold text-primary mb-3">Attendance Options</p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    Morning half-day program{" "}
                    <span className="italic">(minimum of two mornings per week)</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    Afternoon half-day program{" "}
                    <span className="italic">(minimum of two afternoons per week)</span>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    Full-day program{" "}
                    <span className="italic">(minimum of one full day per week)</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-2 bg-primary text-white text-sm font-semibold">
                <div className="px-5 py-3">Attendance</div>
                <div className="px-5 py-3">Rate</div>
              </div>
              {[
                { attendance: "1 day per week or two half days", rate: "$55 per day" },
                { attendance: "2 days per week or four half days", rate: "$50 per day" },
                { attendance: "3 days per week or five half days", rate: "$45 per day" },
                { attendance: "4 days per week", rate: "$40 per day" },
              ].map(({ attendance, rate }, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 text-sm border-t border-slate-200 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  }`}
                >
                  <div className="px-5 py-3 text-slate-700">{attendance}</div>
                  <div className="px-5 py-3 font-semibold text-primary">{rate}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Grades 4–8 Academic Classes */}
        <AnimatedSection delay={0.45}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="h-6 w-6 text-primary shrink-0" />
              <h3 className="text-xl font-serif text-primary">
                Grades 4–8 Academic Classes
              </h3>
            </div>
            <p className="text-slate-500 text-sm mb-4 italic">Space permitting</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-1">
                  Full-Time: 4–5 Days / Week
                </p>
                <p className="text-2xl font-serif text-primary mb-3">
                  $900
                  <span className="text-base font-sans text-slate-500">
                    /year per class
                  </span>
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">
                  Available subjects may include:
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Grammar / English / Phonics / Spelling</li>
                  <li>• Latin</li>
                  <li>• Literature (Grade 4)</li>
                  <li>• Math</li>
                  <li>• Omnibus (Grades 5–8 Literature &amp; History)</li>
                  <li>• Science</li>
                  <li>• Theology</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-1">
                  Half-Time: 1–3 Days / Week
                </p>
                <p className="text-2xl font-serif text-primary mb-3">
                  $450
                  <span className="text-base font-sans text-slate-500">
                    /year per class
                  </span>
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">
                  Available subjects may include:
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Art</li>
                  <li>• History (Grade 4)</li>
                  <li>• Logic</li>
                  <li>• Music</li>
                  <li>• Rhetoric</li>
                  <li>• Science (Grade 4)</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Music */}
        <AnimatedSection delay={0.5}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <Music className="h-6 w-6 text-primary shrink-0" />
              <h3 className="text-xl font-serif text-primary">
                Music Opportunities for All Students
              </h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Music is an integral part of CCA&apos;s curriculum and worship
              life. Students are encouraged to develop their musical gifts and
              participate in joyful worship through song and performance.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-2">Choir</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Homeschool students are welcome to participate in choir
                  through enrollment in half-time classes. Families are expected
                  to commit to all scheduled rehearsals and performances,
                  including worship services and special events.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-2">
                  Band &amp; Strings
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Donor-funded instruments and group instruction through CCA&apos;s
                  Strings Program are available to{" "}
                  <span className="font-semibold">full-time students only</span>.
                  Private instruction is also available through CCA&apos;s
                  instructors (pending availability), and eligible students may
                  participate in ensemble groups.
                </p>
                <p className="text-slate-500 text-xs italic">
                  Lesson fees are paid directly to instructors at $60 per full
                  hour and are not included in CCA Homeschool Partnership
                  tuition.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* After-School Activities */}
        <AnimatedSection delay={0.55}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <Users className="h-6 w-6 text-primary shrink-0" />
              <h3 className="text-xl font-serif text-primary">
                After-School Activities &amp; Clubs
              </h3>
            </div>
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Homeschool students may participate in select CCA
                    extracurricular activities, clubs, and limited athletic
                    offerings. Activities and clubs vary by quarter.
                  </p>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-2">
                    Examples may include:
                  </p>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li>• Volleyball</li>
                    <li>• Basketball</li>
                    <li>• Art Club</li>
                    <li>• Theater</li>
                  </ul>
                  <p className="text-slate-500 text-sm italic mt-3">
                    Please contact the school office for current offerings and
                    availability.
                  </p>
                </div>
                <div className="shrink-0 text-center md:text-right">
                  <p className="text-2xl font-serif text-primary">
                    $50
                    <span className="text-base font-sans text-slate-500">
                      /activity
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Lunch Program */}
        <AnimatedSection delay={0.6}>
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
                  <p className="text-sm text-slate-500">Standard Lunch (FACTS)</p>
                  <p className="text-xl font-serif text-primary">
                    $3.00
                    <span className="text-sm font-sans text-slate-500">/meal</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Additional Entrée</p>
                  <p className="text-xl font-serif text-primary">$1.25</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lunch may be ordered through the FACTS Family Portal. Payments
                should be prepaid monthly through the school office. Monthly
                menus are available on the FACTS Family Portal or in printed
                form through the school office.
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm font-semibold text-primary mb-2">
                  Lunch Expectations
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Students may bring a cold lunch from home</li>
                  <li>• Acceptable beverages: water or milk (milk available to all students)</li>
                  <li>• Microwave use by students is not permitted</li>
                  <li>• Students are expected to eat in a peaceful, respectful, and orderly manner</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Conduct & Dress Code */}
        <AnimatedSection delay={0.65}>
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
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  All homeschool students are expected to follow CCA&apos;s
                  policies as indicated in the CCA Handbook. Students should
                  demonstrate:
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Respect for teachers and peers</li>
                  <li>• Attentiveness in class</li>
                  <li>• Appropriate participation</li>
                  <li>• Christ-centered behavior on campus and at CCA-sponsored events</li>
                </ul>
                <p className="text-slate-500 text-xs italic mt-3">
                  CCA reserves the right to dismiss a student or discontinue a
                  homeschool partnership if significant behavioral concerns
                  arise.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <p className="font-semibold text-primary mb-3">Dress Code</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  Homeschool students are expected to follow CCA dress code
                  standards while participating in classes and school activities.
                  A CCA logo shirt is not required, but attire should be:
                </p>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>• Modest</li>
                  <li>• Neat</li>
                  <li>• Consistent with CCA dress code guidelines</li>
                </ul>
                <p className="text-slate-500 text-xs italic mt-3">
                  The complete uniform and dress code policy will be provided
                  upon enrollment.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA / Contact */}
        <AnimatedSection delay={0.7}>
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
