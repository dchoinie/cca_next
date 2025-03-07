import { PageHero } from "@/components/custom/page-hero";
import { getHandbookSections } from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";
import { SEO } from "@/components/custom/seo";

export default async function StudentHandbookPage() {
  const sections = await getHandbookSections();

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
          <div className="prose prose-lg mb-12">
            <p className="text-muted-foreground">
              Welcome to the Concordia Christian Academy Student Handbook. This
              handbook contains important information about our school policies,
              procedures, and expectations. Please take time to review this
              information carefully.
            </p>
          </div>

          {/* Handbook Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <div
                key={section._id}
                className="bg-white rounded-lg shadow-sm border border-border p-6 md:p-8"
              >
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  {section.section}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {section.description}
                </p>
                {section.extraContent && section.extraContent.length > 0 && (
                  <div className="prose prose-sm max-w-none">
                    <PortableText value={section.extraContent} />
                  </div>
                )}
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
