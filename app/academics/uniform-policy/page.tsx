"use client";

import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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

export default function UniformPolicy() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/uniform_policy.pdf';
    link.download = 'uniform_policy.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white">
      <SEO
        title="Uniform Policy"
        description="Learn about Concordia Classical Academy's uniform policy and dress code requirements for students. Download our complete uniform policy document."
        keywords={[
          "uniform policy",
          "dress code",
          "school uniforms",
          "student dress code",
          "uniform requirements",
          "school dress policy",
          "classical school uniforms",
          "Christian school dress code",
          "student attire",
          "school clothing policy",
        ]}
        canonicalUrl="/academics/uniform-policy"
      />
      <PageHero 
        title="Uniform Policy" 
        subtitle="Maintaining a focused learning environment through appropriate dress standards"
        backgroundImage="/ss_2.png" 
      />

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <AnimatedSection delay={0.2}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
              Dress for Success
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At Concordia Classical Academy, we believe that appropriate dress contributes to a focused, respectful learning environment. Our uniform policy helps students develop habits of neatness, modesty, and attention to detail while maintaining a sense of community and school pride.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Our complete uniform policy includes detailed guidelines for all grade levels, specific clothing requirements, and expectations for special occasions. Download the full policy document to review all requirements and ensure your student is properly dressed for school.
            </p>
          </div>
        </AnimatedSection>

        {/* Download Section */}
        <AnimatedSection delay={0.4}>
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif text-primary mb-4">
                Complete Uniform Policy
              </h3>
              <p className="text-slate-600 mb-6">
                Download our comprehensive uniform policy document to review all dress code requirements, approved vendors, and specific guidelines for each grade level.
              </p>
              <Button 
                onClick={handleDownload}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 cursor-pointer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Uniform Policy PDF
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Additional Information */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-lg p-6">
              <h4 className="text-xl font-serif text-primary mb-3">
                Key Benefits
              </h4>
              <ul className="text-slate-600 space-y-2">
                <li>• Promotes focus on learning</li>
                <li>• Reduces distractions</li>
                <li>• Builds school community</li>
                <li>• Develops good habits</li>
                <li>• Eliminates clothing competition</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h4 className="text-xl font-serif text-primary mb-3">
                What&apos;s Included
              </h4>
              <ul className="text-slate-600 space-y-2">
                <li>• Daily uniform requirements</li>
                <li>• Special occasion dress</li>
                <li>• Grade-specific guidelines</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
