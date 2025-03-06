import { PageHero } from "@/components/custom/page-hero";

export default function Accessibility() {
  return (
    <main>
      <PageHero
        title="Accessibility"
        subtitle="Ensuring an inclusive digital experience for all"
        backgroundImage=""
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="mt-12 mb-6">Our Commitment to Accessibility</h2>
          <p className="mb-8">
            At Concordia Classical Academy, we believe that education should be
            accessible to all. This commitment extends to our digital presence.
            We strive to ensure that our website is accessible to everyone,
            regardless of their abilities or the technology they use to access
            the internet.
          </p>

          <h2 className="mt-12 mb-6">Accessibility Standards</h2>
          <p className="mb-4">
            Our website is designed and developed in accordance with the
            following accessibility standards:
          </p>
          <ul className="mb-8">
            <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
            <li>Section 508 of the Rehabilitation Act</li>
            <li>Americans with Disabilities Act (ADA) requirements</li>
          </ul>

          <h2 className="mt-12 mb-6">Accessibility Features</h2>
          <p className="mb-4">
            We have implemented various features to enhance accessibility:
          </p>
          <ul className="mb-8">
            <li>Keyboard navigation support throughout the website</li>
            <li>Screen reader compatibility</li>
            <li>High contrast text and background colors</li>
            <li>Alt text for all images</li>
            <li>Proper heading hierarchy</li>
            <li>Descriptive link text</li>
            <li>Resizable text without loss of functionality</li>
            <li>Form labels and error messages</li>
          </ul>

          <h2 className="mt-12 mb-6">Assistive Technologies</h2>
          <p className="mb-8">
            Our website is compatible with various assistive technologies,
            including:
          </p>
          <ul className="mb-8">
            <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
            <li>Keyboard-only navigation</li>
            <li>High contrast mode</li>
          </ul>

          <h2 className="mt-12 mb-6">Ongoing Improvements</h2>
          <p className="mb-8">
            We are committed to continuously improving our website&apos;s
            accessibility. This includes:
          </p>
          <ul className="mb-8">
            <li>Regular accessibility audits</li>
            <li>
              User testing with individuals who use assistive technologies
            </li>
            <li>Staff training on accessibility best practices</li>
            <li>
              Regular updates to maintain compliance with accessibility
              standards
            </li>
          </ul>

          <h2 className="mt-12 mb-6">Reporting Accessibility Issues</h2>
          <p className="mb-4">
            If you encounter any accessibility barriers on our website, please
            let us know. We value your feedback and will work to address any
            issues promptly.
          </p>
          <p className="mb-8">You can report accessibility issues by:</p>
          <ul className="mb-8">
            <li>Emailing us at ccamankato@gmail.com</li>
            <li>Calling us at 507-304-7430</li>
            <li>Using our contact form</li>
          </ul>

          <h2 className="mt-12 mb-6">Third-Party Content</h2>
          <p className="mb-8">
            While we strive to ensure our website is fully accessible, some
            third-party content or applications may not meet our accessibility
            standards. We encourage third-party content providers to maintain
            high accessibility standards and will work with them to improve
            accessibility when possible.
          </p>

          <h2 className="mt-12 mb-6">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our accessibility features or need
            assistance, please contact us at:
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
