import { PageHero } from "@/components/custom/page-hero";
import Link from "next/link";

export default function DonationSuccessPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Thank You for Your Donation!"
        subtitle="Your generous support helps us continue our mission"
        backgroundImage="/ss_36.png"
      />

      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-serif text-primary mb-4">
            Your Donation Was Successful
          </h2>
          <p className="text-slate-600 mb-8">
            Thank you for supporting Concordia Classical Academy. Your
            contribution helps us provide excellent Christian education and
            maintain our facilities for future generations of students.
          </p>
          <p className="text-slate-600 mb-8">
            You will receive a confirmation email with the details of your
            donation for your records.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
