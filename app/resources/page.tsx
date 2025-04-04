"use client";

import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";
import { getAllResources, Resource } from "@/lib/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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

function ResourceCardSkeleton() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden h-full flex flex-col">
      <Skeleton className="h-48 w-full" />
      <div className="p-6 flex flex-col flex-grow">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mt-auto" />
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const data = await getAllResources();
        setResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, []);

  const lutheranResources = resources.filter((r) => r.category === "lutheran");
  const educationalResources = resources.filter(
    (r) => r.category === "educational"
  );

  return (
    <div className="bg-white">
      <SEO
        title="Resources"
        description="Access helpful Lutheran and educational resources curated by Concordia Classical Academy. Find materials to support your child's spiritual and academic growth."
        keywords={[
          "Lutheran resources",
          "educational resources",
          "learning materials",
          "Christian resources",
          "academic resources",
          "parent resources",
          "student resources",
          "teaching materials",
          "Lutheran education",
          "school resources",
        ]}
        canonicalUrl="/resources"
      />
      <PageHero
        title="Resources"
        subtitle="Helpful links and resources for our school community"
        backgroundImage="/ss_60.png"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <AnimatedSection>
          <div className="prose prose-slate max-w-3xl mx-auto text-center mb-16">
            <p className="text-slate-600 leading-relaxed">
              We&apos;ve compiled a collection of valuable resources to support
              our school community. From Lutheran educational materials to
              academic resources, these tools are carefully selected to enhance
              the learning experience and spiritual growth of our students and
              families.
            </p>
          </div>
        </AnimatedSection>

        {/* Lutheran Resources */}
        <AnimatedSection delay={0.2}>
          <div className="mb-24">
            <h2 className="text-3xl font-serif text-primary text-center mb-12">
              Lutheran Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                <>
                  <ResourceCardSkeleton />
                  <ResourceCardSkeleton />
                  <ResourceCardSkeleton />
                  <ResourceCardSkeleton />
                  <ResourceCardSkeleton />
                  <ResourceCardSkeleton />
                </>
              ) : (
                lutheranResources.map((resource, index) => (
                  <AnimatedCard key={resource._id} delay={0.1 * index}>
                    <Link
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-full block"
                    >
                      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col shadow-md">
                        <div className="relative h-48 flex-shrink-0">
                          <Image
                            src={resource.image.asset.url}
                            alt={resource.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="font-serif text-xl text-primary mb-2 group-hover:text-primary/80">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-slate-500 mt-auto">
                            Click to visit resource →
                          </p>
                        </div>
                      </div>
                    </Link>
                  </AnimatedCard>
                ))
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Educational Resources */}
        <AnimatedSection delay={0.2}>
          <div className="mb-24">
            <h2 className="text-3xl font-serif text-primary text-center mb-12">
              Educational Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {isLoading ? (
                <>
                  <ResourceCardSkeleton />
                  <ResourceCardSkeleton />
                  <ResourceCardSkeleton />
                  <ResourceCardSkeleton />
                  <ResourceCardSkeleton />
                  <ResourceCardSkeleton />
                </>
              ) : (
                educationalResources.map((resource, index) => (
                  <AnimatedCard key={resource._id} delay={0.1 * index}>
                    <Link
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group h-full block"
                    >
                      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
                        <div className="relative h-48 flex-shrink-0">
                          <Image
                            src={resource.image.asset.url}
                            alt={resource.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="font-serif text-xl text-primary mb-2 group-hover:text-primary/80">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-slate-500 mt-auto">
                            Click to visit resource →
                          </p>
                        </div>
                      </div>
                    </Link>
                  </AnimatedCard>
                ))
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Note Section */}
        <AnimatedSection delay={0.2}>
          <div className="bg-primary/5 rounded-lg p-8 max-w-3xl mx-auto text-center">
            <p className="text-slate-600">
              These resources are regularly updated to ensure they remain
              relevant and valuable to our community. If you have suggestions
              for additional resources, please contact the school office.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
