'use client'

import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen, Users, Shield } from "lucide-react";

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

export default function StudentHandbookPage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/handbook.pdf';
    link.download = 'CCA_Student_Handbook.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

      <div className="mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <AnimatedSection delay={0.1}>
            <div className="mb-12 text-center">
              <p className="text-muted-foreground text-lg mb-8">
                Welcome to the Concordia Christian Academy Student Handbook.
                This comprehensive guide contains important information about our school
                policies, procedures, and expectations for students and families.
              </p>
              
              {/* Download Button */}
              <div className="flex justify-center">
                <Button 
                  onClick={handleDownload}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Student Handbook PDF
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Handbook Overview */}
          <AnimatedSection delay={0.2}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                What&apos;s Included in the Handbook
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm border border-border p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Academic Policies</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Comprehensive information about our academic standards, grading policies, 
                    homework expectations, and assessment procedures.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-border p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Student Life</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Guidelines for student conduct, dress code, attendance policies, 
                    and expectations for behavior in our Christian learning environment.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-border p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Safety & Security</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Important safety protocols, emergency procedures, and security 
                    measures to ensure a safe learning environment for all students.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-border p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-primary">Parent Resources</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Information for parents including communication protocols, 
                    volunteer opportunities, and ways to support your child&apos;s education.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Important Note */}
          <AnimatedSection delay={0.3}>
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Important Note
              </h3>
              <p className="text-muted-foreground">
                This handbook is subject to updates and modifications throughout
                the school year. Students and parents will be notified of any
                significant changes. Please download the latest version to ensure
                you have the most current information.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
