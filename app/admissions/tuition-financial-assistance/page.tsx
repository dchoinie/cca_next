import { PageHero } from "@/components/custom/page-hero";

export default function TuitionPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Tuition & Financial Assistance"
        subtitle="Making classical Lutheran education accessible for families"
        backgroundImage="/ss_48.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Cost Overview */}
        <div className="mb-16">
          <div className="bg-primary/5 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-serif text-primary mb-6">
              Cost & Scholarship Overview
            </h2>
            <div className="space-y-6 text-slate-600">
              <p className="leading-relaxed">
                The cost of educating each child is{" "}
                <span className="font-medium">$6,700</span>. The Lutheran Church
                of the Good Shepherd will provide a{" "}
                <span className="font-medium">$2,500 scholarship</span> for each
                child with the expectation they will sing on the designated
                Sundays during the year and participate in the fundraisers
                throughout the year.
              </p>
              <p className="leading-relaxed">
                You may choose to opt out of singing and fundraising by paying
                the $2,500.
              </p>
            </div>
          </div>
        </div>

        {/* Tuition Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-primary mb-6">
            Tuition Schedule
          </h2>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/5">
                  <th className="px-6 py-4 text-left text-sm font-medium text-primary">
                    Number of Children
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-primary">
                    Annual Tuition
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm text-slate-600">1</td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-primary">
                    $4,200
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm text-slate-600">2</td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-primary">
                    $4,200
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm text-slate-600">3</td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-primary">
                    $2,200
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 text-sm text-slate-600">4+</td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-primary">
                    $0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Discounts */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-primary mb-6">
            Additional Discounts & Information
          </h2>
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-medium text-primary mb-2">
                New Student Scholarship
              </h3>
              <p className="text-slate-600">
                All new students including kindergarten receive an additional
                $1,000 scholarship off the $4,200 tuition.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-medium text-primary mb-2">
                Early Payment Discount
              </h3>
              <p className="text-slate-600">
                Pay your family&apos;s total tuition by cash or check no later
                than September 15 and receive a 5% discount of the total tuition
                due.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-medium text-primary mb-2">
                Financial Assistance
              </h3>
              <p className="text-slate-600">
                Tuition assistance is available on a needs-based program that
                works with a sliding scale, based on income.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-medium text-primary mb-2">Important Note</h3>
              <p className="text-slate-600">
                In the event you withdraw your child early, all discounts will
                be null and void.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-serif text-primary mb-6">
            Contact Us About Tuition
          </h2>
          <div className="space-y-4 text-slate-600">
            <p className="leading-relaxed">
              Parents are invited to call Concordia Classical Academy at{" "}
              <a
                href="tel:507-304-7430"
                className="text-primary hover:underline"
              >
                507-304-7430
              </a>{" "}
              or email at{" "}
              <a
                href="mailto:ccamankato@gmail.com"
                className="text-primary hover:underline"
              >
                ccamankato@gmail.com
              </a>{" "}
              to inquire further about tuition cost and setting up an initial
              meeting with our Headmaster Pastor LaPlant.
            </p>
            <p className="leading-relaxed">
              For tuition assistance inquiries please reach out to Pastor
              LaPlant at{" "}
              <a
                href="mailto:pastor@ccamankato.education"
                className="text-primary hover:underline"
              >
                pastor@ccamankato.education
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
