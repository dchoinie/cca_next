"use client";

import { PageHero } from "@/components/custom/page-hero";
import { StaffGrid } from "@/components/custom/staff-grid";
import { SEO } from "@/components/custom/seo";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { getAllStaffMembers } from "@/lib/sanity/queries";
import { StaffMember } from "@/lib/sanity/queries";
import { Skeleton } from "@/components/ui/skeleton";

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

export default function StaffPage() {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const staff = await getAllStaffMembers();
        setStaffMembers(staff);
      } catch (error) {
        console.error("Error fetching staff members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div className="bg-white">
      <SEO
        title="Our Staff"
        description="Meet the dedicated teachers and staff members at Concordia Classical Academy who provide excellence in classical Lutheran education for our students."
        keywords={[
          "school staff",
          "teachers",
          "faculty",
          "school employees",
          "educators",
          "teaching staff",
          "school administration",
          "Lutheran teachers",
          "classical educators",
          "school personnel",
        ]}
        canonicalUrl="/about/staff"
      />
      <PageHero
        title="Our Staff"
        subtitle="Meet the dedicated team that makes Concordia Classical Academy exceptional"
        backgroundImage="/ss_15.png"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <AnimatedSection delay={0.2}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-slate-600 leading-relaxed">
              Our faculty and staff are committed to providing excellence in
              classical Lutheran education. Each member brings unique gifts and
              talents to create an enriching educational environment for our
              students.
            </p>
          </div>
        </AnimatedSection>

        {/* Staff Grid */}
        <AnimatedSection delay={0.4}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Skeleton className="absolute inset-0" />
                  </div>
                  <div className="p-6">
                    <Skeleton className="h-7 w-3/4 mb-1" />
                    <Skeleton className="h-5 w-1/2 mb-4" />
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Skeleton className="h-4 w-4 mr-2" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <StaffGrid staffMembers={staffMembers} />
          )}
        </AnimatedSection>
      </div>
    </div>
  );
}
