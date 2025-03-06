import { PageHero } from "@/components/custom/page-hero";
import { getAllSupplyLists } from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";

export default async function SupplyListPage() {
  const supplyLists = await getAllSupplyLists();

  // Find the "all grades" list and filter it out from grade-specific lists
  const allGradesList = supplyLists.find(
    (list) =>
      list.grade.toLowerCase().includes("all") ||
      list.grade.toLowerCase().includes("general")
  );
  const gradeSpecificLists = supplyLists
    .filter((list) => list !== allGradesList)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="bg-white">
      <PageHero
        title="Supply Lists"
        subtitle="Everything your student needs for a successful year"
        backgroundImage="/ss_51.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Please ensure your student has all the required supplies for their
            grade level, as well as the general supplies needed for all grades.
          </p>
        </div>

        {/* All Grades Section */}
        {allGradesList && (
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-primary mb-6">
              General Supplies (All Grades)
            </h2>
            <div className="bg-primary/5 rounded-lg p-8">
              <div className="prose prose-slate max-w-none">
                <PortableText value={allGradesList.content} />
              </div>
            </div>
          </div>
        )}

        {/* Grade-Specific Lists */}
        <div className="space-y-12">
          {gradeSpecificLists.map((list) => (
            <div key={list._id}>
              <h2 className="text-2xl font-serif text-primary mb-6">
                {list.grade}
              </h2>
              <div className="bg-white border border-slate-200 rounded-lg p-8">
                <div className="prose prose-slate max-w-none">
                  <PortableText value={list.content} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Notes */}
        <div className="mt-16 bg-primary/5 rounded-lg p-8">
          <h2 className="text-xl font-serif text-primary mb-4">
            Important Notes
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Please label all supplies with your student&apos;s name
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Some supplies may need to be replenished throughout the year
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              Contact the school office if you have any questions about the
              supply lists
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
