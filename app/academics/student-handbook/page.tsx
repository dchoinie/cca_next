"use client";

import { PageHero } from "@/components/custom/page-hero";
import { getHandbookSections } from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";
import { SEO } from "@/components/custom/seo";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface PortableTextBlock {
  _type: string;
  children: { text: string }[];
  style: string;
}

interface HandbookSection {
  _id: string;
  section: string;
  description: string;
  extraContent?: PortableTextBlock[];
}

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

function SectionSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-border p-6 md:p-8">
      <Skeleton className="h-8 w-3/4 mb-4" />
      <Skeleton className="h-4 w-full mb-6" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
}

export default function StudentHandbookPage() {
  const [sections, setSections] = useState<HandbookSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSections() {
      try {
        const data = await getHandbookSections();
        setSections(data as HandbookSection[]);
      } catch (error) {
        console.error("Error fetching handbook sections:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSections();
  }, []);

  return (
    <main>
      <SEO
        title="Student Handbook"
        description="Access Concordia Classical Academy's comprehensive student handbook. Find important policies, procedures, and guidelines for our school community."
        keywords={[
          "student handbook",
          "school policies",
          "academic guidelines",
          "school procedures",
          "student conduct",
          "parent information",
          "school rules",
          "academic policies",
          "student expectations",
        ]}
        canonicalUrl="/academics/student-handbook"
      />
      <PageHero
        title="Student Handbook"
        subtitle="Important information and guidelines for our students"
        backgroundImage="/ss_37.png"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <AnimatedSection delay={0.1}>
            <div className="prose prose-lg mb-12">
              <p className="text-muted-foreground">
                Welcome to the Concordia Christian Academy Student Handbook.
                This handbook contains important information about our school
                policies, procedures, and expectations. Please take time to
                review this information carefully.
              </p>
            </div>
          </AnimatedSection>

          {/* Handbook Sections */}
          <div className="space-y-12">
            {isLoading
              ? // Show 3 skeleton sections while loading
                Array.from({ length: 3 }).map((_, index) => (
                  <div key={index}>
                    <SectionSkeleton />
                  </div>
                ))
              : sections.map((section) => (
                  <div key={section._id}>
                    <div className="bg-white rounded-lg shadow-sm border border-border p-6 md:p-8">
                      <h2 className="text-2xl font-semibold text-primary mb-4">
                        {section.section}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {section.description}
                      </p>
                      {section.extraContent &&
                        section.extraContent.length > 0 && (
                          <div className="prose prose-sm max-w-none">
                            <PortableText value={section.extraContent} />
                          </div>
                        )}
                    </div>
                  </div>
                ))}
          </div>

          {/* Important Note */}
          <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/10">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Important Note
            </h3>
            <p className="text-muted-foreground">
              This handbook is subject to updates and modifications throughout
              the school year. Students and parents will be notified of any
              significant changes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
