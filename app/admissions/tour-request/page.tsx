import { PageHero } from "@/components/custom/page-hero";
import { ScheduleVisitForm } from "@/components/custom/schedule-visit-form";

export default function TourRequestPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Schedule a Tour"
        subtitle="Experience our classical Lutheran education firsthand"
        backgroundImage="/ss_49.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-serif text-primary mb-4">
            Visit Our Campus
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            We invite you to experience the unique atmosphere of Concordia
            Classical Academy. During your visit, you&apos;ll have the
            opportunity to:
          </p>
          <ul className="text-left text-slate-600 space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Tour our classrooms and facilities
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Observe our classical education approach in action
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Meet our dedicated teachers and staff
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Learn about our Christ-centered curriculum
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Ask questions about our programs and admissions process
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="bg-primary/5 rounded-lg p-8">
          <div className="max-w-2xl mx-auto">
            <ScheduleVisitForm
              trigger={
                <button className="w-full inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg cursor-pointer">
                  Schedule Your Visit Now
                </button>
              }
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-serif text-primary text-lg mb-3">
              Best Times to Visit
            </h3>
            <p className="text-slate-600">
              School tours are typically scheduled during regular school hours,
              allowing you to see our vibrant learning environment in action.
              We&apos;ll work with your schedule to find the best time for your
              visit.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-serif text-primary text-lg mb-3">
              What to Expect
            </h3>
            <p className="text-slate-600">
              Your visit will typically last about an hour, during which
              you&apos;ll tour the campus, observe classes, and have time for
              questions with our staff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
