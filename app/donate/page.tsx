import { PageHero } from "@/components/custom/page-hero";
import { DonationForm } from "@/components/custom/DonationForm";
import { SEO } from "@/components/custom/seo";

export default function DonatePage() {
  return (
    <div className="bg-white">
      <SEO
        title="Support Our Mission"
        description="Support Concordia Classical Academy's mission of providing excellent Christian education. Your tax-deductible donations help maintain our facilities and provide financial assistance to families."
        keywords={[
          "school donations",
          "donate to CCA",
          "school support",
          "tax deductible donations",
          "Christian education support",
          "school fundraising",
          "educational donations",
          "school financial support",
          "donation form",
          "school giving",
        ]}
        canonicalUrl="/donate"
      />
      <PageHero
        title="Support Our Mission"
        subtitle="Help us provide excellent Christian education for future generations"
        backgroundImage="/ss_15.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-3xl mx-auto text-center mb-12">
          <p className="text-slate-600 leading-relaxed">
            Your generous donations help us maintain our facilities, provide
            financial assistance to families in need, and continue offering
            excellent Christian education. All donations are tax-deductible.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white shadow-sm border border-slate-200 rounded-lg p-8">
            <h2 className="text-2xl font-serif text-primary text-center mb-8">
              Make a Donation
            </h2>

            <DonationForm amount={100} />
          </div>

          <div className="mt-8 text-center text-sm text-slate-500">
            <p>
              For questions about donations or to discuss other ways to support
              our school, please contact our development office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
