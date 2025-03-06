import { PageHero } from "@/components/custom/page-hero";
import { Clock } from "lucide-react";

export default function HoursPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="School Hours"
        subtitle="Daily schedule and extended care options for our families"
        backgroundImage="/ss_47.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Concordia Classical Academy provides flexible scheduling options to
            accommodate working families, including morning and after-school
            care programs.
          </p>
        </div>

        {/* Hours Grid */}
        <div className="grid gap-6">
          {/* School Day */}
          <div className="bg-primary/5 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-primary mb-2">
                  School Day
                </h2>
                <p className="text-slate-600 mb-4">
                  Regular academic hours for all students
                </p>
                <div className="inline-block bg-white px-4 py-2 rounded-lg font-medium text-primary">
                  8:15 AM - 2:45 PM
                </div>
              </div>
            </div>
          </div>

          {/* Extended Care Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Morning Care */}
            <div className="bg-white border border-slate-200 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-serif text-primary mb-2">
                    Morning Care
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Early drop-off available
                  </p>
                  <div className="inline-block bg-primary/5 px-4 py-2 rounded-lg font-medium text-primary">
                    7:30 AM - 8:00 AM
                  </div>
                </div>
              </div>
            </div>

            {/* After Care */}
            <div className="bg-white border border-slate-200 rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-serif text-primary mb-2">
                    After Care
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Extended supervision available
                  </p>
                  <div className="inline-block bg-primary/5 px-4 py-2 rounded-lg font-medium text-primary">
                    2:45 PM - 5:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 bg-white border border-slate-200 rounded-lg p-8">
            <h2 className="text-xl font-serif text-primary mb-4">
              Important Notes
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li>
                • Students may arrive as early as 7:30 AM for morning care
              </li>
              <li>• School doors open for regular arrival at 8:00 AM</li>
              <li>• Classes begin promptly at 8:15 AM</li>
              <li>• After care program ends at 5:00 PM sharp</li>
              <li>
                • Please contact the school office for extended care program
                fees and registration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
