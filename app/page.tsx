import { Hero } from "@/components/custom/hero";
import { ThemeSection } from "@/components/custom/theme-section";
import { ClassicalEducation } from "@/components/custom/classical-education";
import { Testimonials } from "@/components/custom/testimonials";
import { CTASection } from "@/components/custom/cta-section";
import { StudentLife } from "@/components/custom/student-life";

export default function Home() {
  return (
    <main>
      <Hero />
      <ThemeSection />
      <ClassicalEducation />
      <CTASection />
      <Testimonials />
      <StudentLife />
    </main>
  );
}
