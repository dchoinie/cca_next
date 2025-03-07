"use client";

import { PageHero } from "@/components/custom/page-hero";
import { getAllSupplyLists } from "@/lib/sanity/queries";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { SEO } from "@/components/custom/seo";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface SupplyList {
  _id: string;
  grade: string;
  content: PortableTextBlock[];
  order: number;
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

function SupplyListSkeleton() {
  return (
    <div>
      <Skeleton className="h-8 w-1/3 mb-6" />
      <div className="bg-white border border-slate-200 rounded-lg p-8">
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  );
}

export default function SupplyListPage() {
  const [supplyLists, setSupplyLists] = useState<SupplyList[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSupplyLists() {
      try {
        const data = await getAllSupplyLists();
        setSupplyLists(data);
      } catch (error) {
        console.error("Error fetching supply lists:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSupplyLists();
  }, []);

  // Find the "all grades" list and filter it out from grade-specific lists
  const allGradesList = supplyLists.find(
    (list) =>
      list.grade.toLowerCase().includes("all") ||
      list.grade.toLowerCase().includes("general")
  );
  const gradeSpecificLists = supplyLists
    .filter((list) => list !== allGradesList)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="bg-white">
      <SEO
        title="School Supply Lists"
        description="Find comprehensive supply lists for all grade levels at Concordia Classical Academy. Ensure your student has everything needed for a successful academic year."
        keywords={[
          "school supplies",
          "supply lists",
          "classroom materials",
          "grade supplies",
          "back to school",
          "student supplies",
          "school materials",
          "academic supplies",
          "classroom supplies",
        ]}
        canonicalUrl="/academics/supply-list"
      />
      <PageHero
        title="Supply Lists"
        subtitle="Everything your student needs for a successful year"
        backgroundImage="/ss_51.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Please ensure your student has all the required supplies for their
              grade level, as well as the general supplies needed for all
              grades.
            </p>
          </div>
        </AnimatedSection>

        {/* All Grades Section */}
        {isLoading ? (
          <AnimatedSection delay={0.2}>
            <div className="mb-16">
              <Skeleton className="h-8 w-1/2 mb-6" />
              <div className="bg-primary/5 rounded-lg p-8">
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ) : (
          allGradesList && (
            <AnimatedSection delay={0.2}>
              <div className="mb-16">
                <h2 className="text-2xl font-serif text-primary mb-6">
                  General Supplies (All Grades)
                </h2>
                <div className="bg-primary/5 rounded-lg p-8">
                  <div className="prose prose-slate max-w-none">
                    <PortableText value={allGradesList.content} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )
        )}

        {/* Grade-Specific Lists */}
        <div className="space-y-12">
          {isLoading
            ? // Show 3 skeleton lists while loading
              Array.from({ length: 3 }).map((_, index) => (
                <SupplyListSkeleton key={index} />
              ))
            : gradeSpecificLists.map((list) => (
                <div key={list._id}>
                  <h2 className="text-2xl font-serif text-primary mb-6">
                    {list.grade}
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-lg p-8">
                    <div className="prose prose-slate max-w-none">
                      <PortableText value={list.content} />
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Additional Notes */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 bg-primary/5 rounded-lg p-8">
            <h2 className="text-xl font-serif text-primary mb-4">
              Important Notes
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Please label all supplies with your student&apos;s name
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Some supplies may need to be replenished throughout the year
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Contact the school office if you have any questions about the
                supply lists
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
