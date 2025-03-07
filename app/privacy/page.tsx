import { PageHero } from "@/components/custom/page-hero";
import { SEO } from "@/components/custom/seo";

export default function PrivacyPolicy() {
  return (
    <main>
      <SEO
        title="Privacy Policy"
        description="Learn about how Concordia Classical Academy protects and handles your information. Our privacy policy outlines our data collection, usage, and protection practices."
        keywords={[
          "privacy policy",
          "data protection",
          "student privacy",
          "information security",
          "Concordia Classical Academy privacy",
          "school data policy",
        ]}
        canonicalUrl="/privacy"
      />
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect and handle your information"
        backgroundImage=""
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="mt-12 mb-6">Introduction</h2>
          <p className="mb-8">
            At Concordia Classical Academy, we take your privacy seriously. This
            privacy policy explains how we collect, use, and protect your
            information when you visit our website.
          </p>

          <h2 className="mt-12 mb-6">Information We Collect</h2>
          <p className="mb-4">
            We collect information that you voluntarily provide to us,
            including:
          </p>
          <ul className="mb-8">
            <li>Contact information (name, email, phone number)</li>
            <li>
              Information submitted through forms (schedule visit, contact
              forms)
            </li>
            <li>Information about your children when applying for admission</li>
          </ul>

          <h2 className="mt-12 mb-6">How We Use Your Information</h2>
          <p className="mb-4">
            We use the collected information for the following purposes:
          </p>
          <ul className="mb-8">
            <li>To respond to your inquiries and requests</li>
            <li>To process your applications and schedule visits</li>
            <li>To send you important updates about our school</li>
            <li>To improve our website and services</li>
          </ul>

          <h2 className="mt-12 mb-6">Information Sharing</h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties.
            We may share your information with:
          </p>
          <ul className="mb-8">
            <li>Service providers who assist in our operations</li>
            <li>Educational partners who help us provide our services</li>
            <li>Law enforcement when required by law</li>
          </ul>

          <h2 className="mt-12 mb-6">Data Security</h2>
          <p className="mb-8">
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="mt-12 mb-6">Third-Party Services</h2>
          <p className="mb-8">
            Our website may contain links to third-party services. We are not
            responsible for the privacy practices of these external sites. We
            encourage you to read their privacy policies.
          </p>

          <h2 className="mt-12 mb-6">Children&apos;s Privacy</h2>
          <p className="mb-8">
            We are committed to protecting the privacy of children. Our website
            is not intended for children under 13 years of age. We do not
            knowingly collect personal information from children under 13.
          </p>

          <h2 className="mt-12 mb-6">Changes to This Policy</h2>
          <p className="mb-8">
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="mt-12 mb-6">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy, please contact
            us at:
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
