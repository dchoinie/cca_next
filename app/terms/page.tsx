import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";

export default function TermsAndConditions() {
  return (
    <main>
      <SEO
        title="Terms & Conditions"
        description="Review Concordia Classical Academy's terms and conditions. Understand our website usage policies, admission requirements, and legal agreements."
        keywords={[
          "terms and conditions",
          "website terms",
          "legal agreement",
          "school policies",
          "admission terms",
          "website usage",
          "Concordia Classical Academy terms",
        ]}
        canonicalUrl="/terms"
      />
      <PageHero
        title="Terms & Conditions"
        subtitle="Understanding our website usage policies"
        backgroundImage=""
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="mt-12 mb-6">Introduction</h2>
          <p className="mb-8">
            Welcome to Concordia Classical Academy&apos;s website. By accessing
            and using this website, you agree to be bound by these terms and
            conditions. Please read them carefully before proceeding.
          </p>

          <h2 className="mt-12 mb-6">Use of Website</h2>
          <p className="mb-4">
            This website is intended for informational purposes and to
            facilitate communication between Concordia Classical Academy and its
            community. You agree to use this website only for lawful purposes
            and in a way that does not infringe upon the rights of others.
          </p>
          <ul className="mb-8">
            <li>
              You must not use the website in any way that causes damage or
              impairment to its functionality
            </li>
            <li>
              You must not attempt to gain unauthorized access to any part of
              the website
            </li>
            <li>
              You must not use the website for any illegal or unauthorized
              purpose
            </li>
            <li>You must not transmit any malicious code or viruses</li>
          </ul>

          <h2 className="mt-12 mb-6">Intellectual Property</h2>
          <p className="mb-8">
            All content on this website, including but not limited to text,
            graphics, logos, images, and software, is the property of Concordia
            Classical Academy and is protected by copyright laws. You may not
            reproduce, distribute, or transmit any content without our prior
            written consent.
          </p>

          <h2 className="mt-12 mb-6">Admission and Enrollment</h2>
          <p className="mb-4">
            The information provided on this website regarding admission and
            enrollment is for general guidance only. Specific requirements and
            procedures may vary and are subject to change. We reserve the right
            to:
          </p>
          <ul className="mb-8">
            <li>Modify admission requirements at any time</li>
            <li>Change tuition and fee structures</li>
            <li>Update academic programs and curriculum</li>
            <li>Adjust school policies and procedures</li>
          </ul>

          <h2 className="mt-12 mb-6">Third-Party Links</h2>
          <p className="mb-8">
            Our website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of these external
            sites. We encourage you to review their terms and conditions and
            privacy policies.
          </p>

          <h2 className="mt-12 mb-6">Disclaimer</h2>
          <p className="mb-8">
            While we strive to provide accurate and up-to-date information, we
            make no warranties about the completeness, reliability, or accuracy
            of the content on this website. Any reliance on such information is
            at your own risk.
          </p>

          <h2 className="mt-12 mb-6">Limitation of Liability</h2>
          <p className="mb-8">
            Concordia Classical Academy shall not be liable for any damages
            arising from the use or inability to use this website, including but
            not limited to direct, indirect, incidental, or consequential
            damages.
          </p>

          <h2 className="mt-12 mb-6">Changes to Terms</h2>
          <p className="mb-8">
            We reserve the right to modify these terms and conditions at any
            time. We will notify you of any changes by posting the new terms on
            this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="mt-12 mb-6">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these terms and conditions, please
            contact us at:
          </p>
          <p className="mb-8">
            Concordia Classical Academy
            <br />
            507-304-7430
            <br />
            ccamankato@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}
