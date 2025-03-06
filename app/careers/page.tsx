import { PageHero } from "@/components/custom/page-hero";

export default function Careers() {
  return (
    <main>
      <PageHero
        title="Careers"
        subtitle="Join our mission of classical Christian education"
        backgroundImage=""
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="mt-12 mb-6">Our Mission</h2>
          <p className="mb-8">
            At Concordia Classical Academy, we are dedicated to providing a
            classical Christian education that nurtures the whole child - mind,
            body, and spirit. Our faculty and staff play a vital role in shaping
            the next generation of leaders, thinkers, and faithful servants of
            Christ.
          </p>

          <h2 className="mt-12 mb-6">Current Openings</h2>
          <div className="bg-muted p-6 rounded-lg mb-8">
            <p className="text-center text-lg">
              We currently have no open positions. Please check back regularly
              for updates.
            </p>
          </div>

          <h2 className="mt-12 mb-6">Why Work at CCA?</h2>
          <p className="mb-4">
            As a member of our team, you&apos;ll be part of a community that
            values:
          </p>
          <ul className="mb-8">
            <li>Faith-based education and spiritual growth</li>
            <li>Classical teaching methods and curriculum</li>
            <li>Small class sizes and personalized attention</li>
            <li>Professional development opportunities</li>
            <li>Supportive and collaborative environment</li>
            <li>Competitive compensation and benefits</li>
            <li>Work-life balance</li>
            <li>Making a lasting impact on students&apos; lives</li>
          </ul>

          <h2 className="mt-12 mb-6">Stay Connected</h2>
          <p className="mb-4">
            While we don&apos;t have any current openings, we encourage you to:
          </p>
          <ul className="mb-8">
            <li>Check our website regularly for new positions</li>
            <li>Follow us on social media for updates</li>
            <li>Submit your resume for future consideration</li>
            <li>Attend our school events to learn more about our community</li>
          </ul>

          <h2 className="mt-12 mb-6">Contact Us</h2>
          <p className="mb-4">
            If you&apos;d like to learn more about working at Concordia
            Classical Academy or submit your resume for future consideration,
            please contact us at:
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
