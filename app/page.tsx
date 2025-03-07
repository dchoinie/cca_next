import { Hero } from "@/components/custom/hero";
import { ThemeSection } from "@/components/custom/theme-section";
import { ClassicalEducation } from "@/components/custom/classical-education";
import { Testimonials } from "@/components/custom/testimonials";
import { CTASection } from "@/components/custom/cta-section";
import { StudentLife } from "@/components/custom/student-life";
import { SEO } from "@/components/custom/seo";
import { AnimatedSection } from "@/components/custom/animated-section";

export default function Home() {
  return (
    <main>
      <SEO
        title="Concordia Classical Academy"
        description="Experience excellence in classical Lutheran education at Concordia Classical Academy. We provide Christ-centered, academically rigorous education that forms students in wisdom and virtue."
        keywords={[
          "classical education",
          "Lutheran school",
          "Christian education",
          "private school",
          "classical Christian",
          "North Mankato school",
          "Lutheran education",
          "classical academy",
          "Christian school",
          "classical curriculum",
        ]}
        canonicalUrl="/"
      />
      <Hero />
      <AnimatedSection direction="up" delay={0.2}>
        <ThemeSection />
      </AnimatedSection>
      <AnimatedSection direction="right" delay={0.4}>
        <ClassicalEducation />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.6}>
        <CTASection />
      </AnimatedSection>
      <AnimatedSection direction="left" delay={0.8}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={1}>
        <StudentLife />
      </AnimatedSection>
    </main>
  );
}
